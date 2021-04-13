// npm install @babel/preset-env @babel/core @babel/preset-env --save-dev
// Create .babelrc file added 
{
    "presets": [
        "@babel/preset-env"
    ]
}

Add script in package.json - "dashboard-demo": "nodemon --exec babel-node ./session-6/dashboard/index.js"
refer package.json. Check file path at last.

npm run dashboard-demo