<script lang="ts">
import { page } from '$app/stores';
import '$lib/styles/global.css'
import 'uno.css'
import ClickOutside from "svelte-click-outside"
import Taiji from '$lib/components/taiji.svelte'

    const routes = [
    {name: "Home", href: "/", icon : "i-tabler-home"},
    {name: "Notes", href: "/notes", icon: "i-tabler-writing"},
    {name: "About", href:"/about", icon:"i-tabler-info-circle"},
]
let open = false;
const toggleMenu = () => {
open = !open;}
</script>

<div class="w-screen h-screen">
<header class="z-999 top-0 sticky w-full p-4 md:px-24 flex items-start justify-between bg-zinc-800 shadow-lg">


<div class="flex items-center justify-between gap-x-5 min-w-max md:my-auto">
<div class="">
<Taiji />
</div>
<span class="text-xl lg:text-4xl font-semibold">道 之 动</span>
</div>

<div class="m-0 p-0 w-0 md:w-1/2"></div>
<nav class=" hidden md:flex md:items-center md:justify-center md:my-auto mt-12 md:gap-x-8 mr-8" class:hidden={!open}>
{#each routes as route}
<a sveltekit:prefetch href={route.href} class="my-10 font-semibold md:text-center text-zinc-100 no-underline uppercase flex items-center space-x-2 " ><div class="{route.icon}"/><span class:active="{$page.url.pathname.includes(route.href + "/" ) || $page.url.pathname === route.href}">{route.name}</span></a>
{/each}
</nav>


<ClickOutside on:clickoutside="{() => (open = false)}">
  <div class=" md:hidden text-4xl grow-0" class:open on:click={toggleMenu}>
  <div class="i-tabler-align-left icon " />
</div>
</ClickOutside>

<!--/div-->
</header>

<main class="my-8 px-4 md:w-2/3 mx-auto w-full min-h-screen">
<slot />
</main>

<footer class="bottom-0 sticky text-center p-4 w-full">
<span>&copy; {new Date().getFullYear()}</span>
</footer>
</div>

<style>
.active {
  text-decoration: underline;
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
}
.open .icon {
 transform: rotate(-180deg);

}
</style>
