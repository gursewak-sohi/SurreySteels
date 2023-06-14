/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                oswald: ['Oswald', 'sans-serif'],
            },
            fontSize : {
                'large' : '115px'
            },
            colors: {
                'primary': {
                    500: '#FF8300', //brand
                    600: '#E87700',
                },
                'dark': {
                    100: '#f5f6f6',
                    200: '#ececed',
                    400: '#4f4f4f',
                    500: '#323232',
                },
                'danger': {
                    500: '#810000',
                },
                'navy': {
                    500: '#173352',
                },
            },
        },
    },
    plugins: [
        require('prettier-plugin-tailwindcss'),
        require('@tailwindcss/typography'),
    ],
}