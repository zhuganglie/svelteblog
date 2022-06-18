<script context="module" lang="ts">
	//export const prerender = true;	
</script>

<script>
	export let src="/images/bg.jpeg"
	export let alt="lanke"
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>


<section class="grid h-full w-full">
	<div class="self-center justify-self-center">
	<img {src} {alt} width="900" loading="lazy" class="max-w-full h-auto rounded object-fill mb-12"/>
		<div class="md:mt-24"></div>
	<div class="one text-3xl text-center">
		<h1 class="text-3xl md:ml-12 mb-12">道德经</h1>
		<p class="font-bold  font-sans  text-base md:ml-12 mb-12">春秋 &middot; 李耳 </p>
				<p class="md:ml-4">道可道非常道</p>
				<p class="md:ml-4">名可名非常名</p>	
				<p class="md:ml-4">无名天地之始</p>	
				<p class="md:ml-4">有名万物之母</p>	
				<p class="md:ml-4">故</p>
				<p class="md:ml-4">常无欲以观其妙</p>	
				<p class="md:ml-4">常有欲以观其徼</p>	
				<p class="md:ml-4">此两者同出而异名</p>	
				<p class="md:ml-4">同谓之玄</p>	
				<p class="md:ml-4">玄之又玄</p>
				<p class="md:ml-4">	众妙之门</p>
				 </div> 
</div>
	</section>

		<style>  
		@import url('https://fonts.googleapis.com/css2?family=Zhi+Mang+Xing&display=swap');
			.one {  
				font-family: 'Zhi Mang Xing', cursive;
				margin: 0 auto;  
			}  
			@media (min-width: 768px){
				.one {
					font-family: 'Zhi Mang Xing', cursive;
					margin: 0 auto;
					writing-mode: vertical-rl;/*从左向右 从右向左是 writing-mode: vertical-rl;*/  
				    writing-mode: tb-rl;/*IE浏览器的从左向右 从右向左是 writing-mode: tb-rl；*/ 
				}
			}
			</style>  