const path = require('path');

module.exports = () => {
    const ENTRY_POINT = path.join(__dirname, 'client', 'src', 'index.jsx');
    const DIST_FOLDER_PATH  = path.join(__dirname,'client', 'dist');

    return {
        entry: ENTRY_POINT,
        output: {
            path: DIST_FOLDER_PATH,
            filename: "bundle.js"
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.jsx$/,
                exclude: /node_modules/
            }]
        }
    }
};