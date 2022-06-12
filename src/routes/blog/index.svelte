<script context="module">
    // export const prerender = true
    export async function load({ fetch }) {
      const res = await fetch(`/blog.json`)
      if (res.ok) {
        const { posts } = await res.json()
        return {
          props: { posts },
        }
      }
    }
  </script>
  
  <script lang='ts'>
    export let posts = []
    let textSearch = ''
    let filteredPosts = [];
    $: {
    filteredPosts = posts.filter((post) => {
      return (post.title.toLowerCase().includes(textSearch.toLowerCase())||post.html.toLowerCase().includes(textSearch.toLowerCase()));
    });
  }
  </script>

<svelte:head>
  <title>Posts</title>
</svelte:head>
  
  
    <h1 class="text-3xl">博 客</h1>
    <hr />

    <input
        id="text-search"
        bind:value="{textSearch}"
        class="w-full text-gray-100 bg-zinc-700 rounded mb-6"
        type="text"
        placeholder="搜索"
      />

     {#if filteredPosts.length}
    <div class="grid place-items-center place-content-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
    {#each filteredPosts as post}
      {#if !post.draft}
    <div class="bg-zinc-700/60 gap-2 p-4 rounded shadow-lg w-full">
        <a sveltekit:prefetch href={`/blog/${post.slug}`} class="text-md text-yellow-500 hover:text-yellow-300 text-left font-semibold mb-2">{post.title}</a>
        <div class="flex flex-wrap justify-start ml-4">
          {#each post.tags as tag}
            <a sveltekit:prefetch class="flex items-center justify-center py-0.5 px-2.5 mr-1.5 my-1 text-sm bg-zinc-800 rounded text-zinc-300 hover:text-zinc-100" href="/tags/{tag}"
              > {tag}</a>
          {/each}
          </div>
       </div>
      {/if}
    {/each}
    </div>
    {:else}
    <div>没有找到含有{textSearch}字段的文章，请再试。</div>
    {/if}
  