/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        colors: {
            topRed: '#d52220',
            red: '#ee2624',
            white: '#fff',
            black: '#0f1e29',
            gray: '#f2f3f4',
            blue: '#0f62fe',
        },
        screens: {
            sm: '768px',
            lg: '1272px',
            '2xl': '1356px',
        },
        container: {
            center: true,
        },
        fontSize: {
            sm: '1.2rem',
            base: '1.4rem',
        },
    },
    plugins: [],
}
