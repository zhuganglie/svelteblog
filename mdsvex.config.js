import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import remarkGfm  from 'remark-gfm';
import emoji from 'remark-emoji';
import remarkFootnotes from 'remark-footnotes';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [emoji, remarkGfm, remarkFootnotes],
	rehypePlugins: []
});

export default config;
