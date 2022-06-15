<script context="module">
    // export const prerender = true
    export async function load({ fetch, params }) {
      const { slug } = params
      const res = await fetch(`/notes/${slug}.json`)
      if (res.ok) {
        const { note } = await res.json()
        return {
          props: { note },
        }
      }
    }
  </script>
  
  <script lang='ts'>
    import {formatDate} from '$lib/date';
    
    export let note
    
    let { html, date, title, categories } = note
    let dateDisplay = formatDate(date);
  </script>

<svelte:head>
  <title>Note</title>
</svelte:head>

  
  <div class="xl:w-3/4 mx-auto">
    <div class="py-4 sm:py-6 text-center">
      <div class="font-bold text-2xl sm:text-3xl mb-4">{title}</div>
      <div class="text-sm flex flax-wrap justify-center items-center space-x-1"><div class="i-mdi-calendar" /><span>{dateDisplay}</span></div>
      <div class="mt-3 flex flex-wrap justify-center items-center">
        {#each categories as category}
          <a sveltekit:prefetch class="flex justify-center items-center space-x-1 rounded bg-zinc-700 px-2.5 py-0.5 mx-1.5 my-1 text-sm text-yellow-500 hover:text-yellow-300" href="/categories/{category}"
          ><div class="i-mdi-tag-outline" /><span>{category}</span></a
          >
        {/each}
        </div>
    </div>
    <hr />
    <main class="">{@html html}</main> 
    <hr />
    <a href="/notes/" class="bg-zinc-700 text-yellow-500 hover:text-zinc-100 rounded px-2.5 py-0.5">&larr; 返回列表</a>
  <div class="mt-6">
    <script src="https://utteranc.es/client.js"
          repo="zhuganglie/svelteplay"
          issue-term="pathname"
          label="Comment"
          theme="github-dark"
          crossorigin="anonymous"
          async>
  </script>
  </div>
  </div>