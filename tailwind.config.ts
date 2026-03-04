import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#faf8f6',
                    100: '#f5f0eb',
                    200: '#ebe3db',
                    300: '#d9cec0',
                    400: '#c4b5a1',
                    500: '#b39b84',
                    600: '#9d8168',
                    700: '#836853',
                    800: '#6e5446',
                    900: '#5c463d',
                    950: '#312420',
                },
                secondary: {
                    50: '#f7f5f3',
                    100: '#ede8e2',
                    200: '#dbd3c7',
                    300: '#c5b8a7',
                    400: '#a89885',
                    500: '#8f7d6b',
                    600: '#786657',
                    700: '#635349',
                    800: '#53443d',
                    900: '#463935',
                    950: '#261d19',
                },
                accent: {
                    50: '#fdf8f6',
                    100: '#fbeee8',
                    200: '#f7ddd2',
                    300: '#f2c7b5',
                    400: '#e9a28d',
                    500: '#df7c68',
                    600: '#d25d45',
                    700: '#b34330',
                    800: '#91372c',
                    900: '#763029',
                    950: '#3d1512',
                },
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
                serif: ['var(--font-playfair)', 'Georgia', 'serif'],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
        },
    },
    plugins: [],
}
export default config
