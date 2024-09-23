<script>
	
	import { allHeros } from '$lib/components/HeroSection/allhero';
	import { page } from '$app/stores';
	$: routeID = $page.params.HeroID;
	$: console.log(routeID);
	$: HerosData = allHeros.filter(n=>n.id===Number(routeID))[0];
    $: console.log(HerosData);


	let btnText='Copy Code';
	let copyCode=()=>{
		 navigator.clipboard.writeText(HerosData.copy)
            .then(() => {
                btnText = "Copied";
                // Revert back to "Copy Code" after 2 seconds
                setTimeout(() => {
                    btnText = "Copy Code";
                   
                }, 1000);
            })
            .catch((err) => {
                console.error("Failed to copy: ", err);
            });
		
	}
</script>


<div>
	
		<div class="mb-4 mt-2 rounded-lg border-2 p-4">
			<svelte:component this={HerosData.comp} />
		</div>
		<div>
			<button on:click={copyCode} class="rounded bg-black px-4 py-2 font-bold text-white border-2 hover:shadow-slate-700">
				{btnText}
			</button>
		</div>
	
</div> 

