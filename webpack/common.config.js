// webpack plu.
// webpack gives you the ability to work with dependencies.
// a regular JavaScript file.
// common has a set of rules that the application will follow for every environment.

const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin'); // putting together a set of lists.

module.exports = { 
  entry: {
    app: ['./src/bootstrap.js'], // entry point for all other application logic.
    vendor: './src/vendor.js', 
  },

  resolve: { // give a whitelist for yypes of files you want to be inside your application.
    extensions: ['.js', '.scss'], // allow JS/scss files.

    modules: ['node_modules'], // node_modules directory.
  },

  module: {
    rules: [
      {
        test: /\.js$/, // testing against a certain value (testing against any files ending with .js)
        exclude: /node_modules/, // not including node modules.
        use: ['babel-loader'], // including the babel-loader. (if you encounter any kind of weird looking JavaScript, modern JavaScript, then we want you to use babel, so that it can be converted and it can work just like any other type of JavaScript.)
      },

      {
        type: 'javascript/auto', 
        test: /\.(jpg|png|gif|eot|svg|ttf|woff|woff2)$/, // allowing to work with images.
        loader: 'file-loader', // gives the application the ability to read and work with different file types.
        options: {
          name: '[path][name].[ext]',
          publicPath: '/',
        },
      },

      {
        test: /\.(mp4|webm)$/, // use to include any video media.
        loader: 'url?limit=10000',
      },
    ],
  },

  plugins: [
    new SplitChunksPlugin({ // splits your applicaiton into chunks/pieces and loads them when they need to be loaded; loads what's only necessary.
      name: ['app', 'vendor'],
      minChunks: Infinity,
    }),
  ],
};

// https://bottega.devcamp.com/pt-full-stack-development-javascript-python-react/guide/overview-webpack-s-role-react
