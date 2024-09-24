<script>
	
	import { page } from '$app/stores';
	import { allfeatures } from '$lib/components/PageSection/Featuresection/allfeature';
	$: routeID = $page.params.featureID;
	$: console.log(routeID);
	$: FeatureData = allfeatures.filter(n=>n.id===Number(routeID))[0];
    $: console.log(FeatureData);


	let btnText='Copy Code';
	let copyCode=()=>{
		 navigator.clipboard.writeText(FeatureData.copy)
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
			<svelte:component this={FeatureData.comp} />
		</div>
		<div>
			<button on:click={copyCode} class="rounded bg-black px-4 py-2 font-bold text-white border-2 hover:shadow-slate-700">
				{btnText}
			</button>
		</div>
	
</div> 

