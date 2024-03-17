/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent': '#65D46E',
				'accent-muted': '#56B55F',
				'elevated': '#121212',
				'elevated-2': '#222222',
				'elevated-3': '#292929',
				'elevated-4': '#444141',
				'elevated-5': '#727272',
			},
		},
	},
	plugins: [],
}
