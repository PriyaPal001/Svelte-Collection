<script>
	
	import { page } from '$app/stores';
	import { allFooters } from '$lib/components/PageSection/Footer/allfooter';
	$: routeID = $page.params.footerID;
	$: console.log(routeID);
	$: FooterData = allFooters.filter(n=>n.id===Number(routeID))[0];


	let btnText='Copy Code';
	let copyCode=()=>{
		 navigator.clipboard.writeText(FooterData.copy)
            .then(() => {
                btnText = "Copied";
                
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
			<svelte:component this={FooterData.comp} />
		</div>
		<div>
			<button on:click={copyCode} class="rounded bg-black px-4 py-2 font-bold text-white border-2 hover:shadow-slate-700">
				{btnText}
			</button>
		</div>
	
</div> 

