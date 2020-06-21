const path = require('path');

// cela ne compresse pas le code
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    
    //lignes de code avec des sortes de liens quand il y a une erreur
    // ça fait une carte des fichiers quand il y a une erreur, ça pointe plus vers le main.js
    devtool: 'source-map',

    module: {
        rules: [
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
              {
                loader: 'file-loader',
              },
            ],
          },
        ],
      },
};