module.exports = {
    content: ['./src/**/*.{js,jsx}', './public/index.html'],
    theme: {
        extend: {
            colors: {
                primary: '#000000'
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