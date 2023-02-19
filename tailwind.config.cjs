/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	darkMode: true,
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				Raleway: ["Raleway", "sans-serif"],
				Montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				primary: '#7611a6',
				secondary: '#FFFFFF',
				light: '#c561f6',
			},
		},
		screens: {
			'mb' : {'max': '640px'},
			'sm' : {'min': '640px', 'max': '767px'},
			'md' : {'min': '768px', 'max': '1023px'},
			'lg' : {'min': '1024px', 'max': '1279px'},
			'xl' : {'min': '1280px', 'max': '1535px'},
			'2xl': {'min': '1536px'},
        },
	},
	plugins: [],
}
