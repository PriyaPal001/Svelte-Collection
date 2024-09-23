<script>
	
	import { allfeatures } from '$lib/components/Featuresection/allfeature';
	import { page } from '$app/stores';
	$: routeID = $page.params.featureID;
	$: console.log(routeID);
	$: featureData = allfeatures.filter(n=>n.id===Number(routeID))[0];
    $: console.log(featureData);
    
</script>


<svelte:component this={featureData.comp} />