/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent': '#1ED760',
				'elevated': '#121212',
				'elevated-2': '#222222',
				'elevated-3': '#292929',
				'elevated-4': '#727272',
			},
		},
	},
	plugins: [],
}
