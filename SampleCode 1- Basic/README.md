# For SP-WDF Course References

- WDF (Web and Mobile Development Using Framework)
- This is a React.js Sample Code

## To start

1. Execute `npm install`
2. Execute `npm start`
3. Open index.html in Live Server

## To convert to webpack for redux

1. Execute `npm install --save-dev webpack webpack-cli`
2. Add webpack.config.js
   module.exports = {
   entry: {
   App: './output/App.js',
   },
   output: {
   // default output to ./dist folder
   filename: '[name].js', // Retain original file name
   },
   mode: 'development',
   watch: true,
   };
3. Add new script to package.json (the webpack part)
   "scripts": {
   "start": "npx babel ...",
   "build": "webpack"
   },
4. Execute `npm start` and `npm run build`
5. Replace index.html App.js directory to `./dist/App.js`
6. Execute `npm install react react-dom`
7. Update webpack.config.js
   const { ProvidePlugin } = require('webpack'); // Remember to import
   module.exports = {
   ...,
   // Add plugins
   plugins: [
   new ProvidePlugin({
   React: 'react',
   ReactDOM: 'react-dom/client'
   }),
   ],
   };
8. Delete `<script>` in index.html (Not Required Anymore)
9. Execute `npm install @reduxjs/toolkit react-redux @redux-devtools/core`
