
const path = require('path');

const RULES = [ // Configure the loaders.
  { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ }, // Typescript.
];

const EXTENSIONS = ['.ts', '.tsx', '.js', '.json']; // Extensions to process.

const OUTPUT = path.resolve(__dirname, './dist'); // Webpack output directory.

module.exports = [
  {
    name: 'client',
    entry: './client/client.ts',
    target: 'web', // Client will run in the web browser.

    module: { rules: RULES },

    resolve: { extensions: EXTENSIONS },
    output: {
      filename: 'client.js',
      path: OUTPUT,
      publicPath: '/'
    }
  },
  {
    name: 'server',
    entry: './server/server.ts',
    target: 'node', // server is going to run on node

    module: { rules: RULES },
    // Defines which files to try bundling.
    resolve: { extensions: EXTENSIONS },

    output: {
      filename: 'server.js',
      path: OUTPUT,
      publicPath: '/',
      libraryTarget: 'commonjs2' // Important for webpack-hot-server-middleware.                                       }                                                                                                                }                                                                                                                ];
    }
  }
];
