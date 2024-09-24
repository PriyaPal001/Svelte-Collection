<script>
    import { allBlogs } from '$lib/components/PageSection/BlogSection/allblog';
    import { page } from '$app/stores';
    $: routeID=$page.params.blogID
    $: BlogData=allBlogs.filter(n=>n.id===Number(routeID))[0];
</script>

<div>
    <div class="mb-4 mt-2 rounded-lg border-2 p-4">
        <svelte:component this={BlogData.comp} />
    </div>
    <div>
        <button class="rounded bg-black px-4 py-2 font-bold text-white border-2 hover:shadow-slate-700">
            Copy Code
        </button>
    </div>
</div>