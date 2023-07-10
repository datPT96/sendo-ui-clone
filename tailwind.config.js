/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {},
        colors: {
            topRed: '#d52220',
            red: '#ee2624',
            white: '#fff',
        },
        screens: {
            md: '1356px',
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
