// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://sonneko.aoristos.net/',
	integrations: [mdx(), sitemap()],
	vite: {
		ssr: {
			noExternal: ['beercss', 'material-dynamic-colors'],
		}
	}
});
