module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                primaryOrange: 'hsla(21.6, 100%, 50%, 1)',
                darkOrange: 'hsla(21.6, 100%, 20%, 1)',
                lightOrange: 'hsla(29, 96%, 64%, 0.8)',
                purple: 'hsla(315, 97%, 26%, 1)',
                darkPurple: 'hsla(315, 97%, 17%, 1)',
                lightPurple: 'hsla(315, 97%, 42%, 0.81)',
                primaryBlack: 'hsla(330, 28%, 13%, 1)',
                successGreen: 'hsla(162, 95%, 34%, 1)',
                neonGreen: 'hsla(144, 82%, 47%, 1)',
                darkGreen: 'hsla(162, 87%, 24%, 1)',
                lightGrey: 'hsla(100, 0%, 98%, 0.75)'
            },
        },
        screens: {
            'sm': '480px',
            'md': '768px',
            'lg': '976px',
            'xl': '1440px',
        }
    },
    plugins: [],
};