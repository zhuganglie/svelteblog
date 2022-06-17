<script context="module">
    // export const prerender = true
    export async function load({ fetch }) {
      const res = await fetch(`/notes.json`)
      if (res.ok) {
        const { notes } = await res.json()
        return {
          props: { notes },
        }
      }
    }
  </script>
  
  <script lang='ts'>
    import {formatDate} from '$lib/date';
    export let notes = []
    let textSearch = ''
    let filteredNotes = [];
    $: {
    filteredNotes = notes.filter((note) => {
      return (note.title.toLowerCase().includes(textSearch.toLowerCase())||note.html.toLowerCase().includes(textSearch.toLowerCase()));
    });
  }
  </script>

<svelte:head>
  <title>Notes</title>
</svelte:head>
  
  
    <h1 class="text-3xl">故 事 会</h1>
    <hr />

    <input
        id="text-search"
        bind:value="{textSearch}"
        class="w-full text-gray-100 bg-zinc-700 rounded mb-6"
        type="text"
        placeholder="搜索"
      />

     {#if filteredNotes.length}
    <div class="grid place-items-center place-content-center grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2">
    {#each filteredNotes as note}
      {#if !note.draft}
    <div class="bg-zinc-700/60 gap-2 p-4 rounded shadow-lg w-full text-center">
      <div class="text-sm text-left  underline underline-offset-3 px-2 py-0.5 mb-3 min-w-max">{formatDate(note.date)}</div>
        <a sveltekit:prefetch href={`/notes/${note.slug}`} class="text-lg md:text-xl text-yellow-500 hover:text-yellow-300 my-8 font-semibold">{note.title}</a>
        <div class="flex flex-wrap justify-start ml-4">
          {#each note.categories as category}
            <a sveltekit:prefetch class="flex items-center justify-center py-0.5 px-2.5 mr-1.5 my-1 text-sm bg-zinc-800 rounded text-zinc-300 hover:text-zinc-100" href="/categories/{category}"
              > {category}</a>
          {/each}
          </div>
       </div>
      {/if}
    {/each}
    </div>
    {:else}
    <div>没有找到标题中含有{textSearch}字段的笔记，请再试。</div>
    {/if}
  