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
                successGreen: 'hsla(144, 57%, 33%, 1)',
                successBackground: 'hsla(144, 71%, 77%, 1)',
                neonGreen: 'hsla(144, 82%, 47%, 1)',
                darkGreen: 'hsla(162, 87%, 24%, 1)',
                grey: 'hsla(100, 0%, 90%, 0.75)',
                darkGrey: 'hsla(100, 0%, 20%, 0.75)',
                lightGrey: 'hsla(100, 0%, 98%, 0.75)',
                orangeGrey: 'hsla(21, 46%, 36%, 0.86)',
            },
            backgroundImage: {
                netSVG: 'url(/public/imgs/habbysvg.png)',
                logo: "url('/public/imgs/habbyLogo.png')",
                heroPattern: "url('/public/imgs/hero-pattern.png')",
                growing: "url('/public/imgs/growing.gif')",
            },
        },
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1440px',
        },
    },
    plugins: [],
};
