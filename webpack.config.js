const path = require('path');

module.exports = {
    mode: 'development', // Установите 'development' или 'production' в зависимости от вашего режима разработки
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: 'html-loader'
            }
        ]
    }
};
