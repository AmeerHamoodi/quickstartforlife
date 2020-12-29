const fs = require("fs");
const exec = require("child_process").exec;
const electronContent = fs.readFileSync("./files/electron.js");
const gulpContent = fs.readFileSync("./files/gulp.js");
const htmlContent = fs.readFileSync("./files/index.html");
const webpackContent = fs.readFileSync("./files/webpack.js");

/*
-src
--js
--css
--imgs
-devBuild
*/
const createFolders = () => {
    const { existsSync, mkdirSync } = fs;

    !existsSync("./src") && mkdirSync("./src");
    !existsSync("./src/js") && mkdirSync("./src/js");
    !existsSync("./src/css") && mkdirSync("./src/css");
    !existsSync("./devBuild") && mkdirSync("./devBuild");
};

/*
-src
--js
---main.jsx
---App.jsx
--css
---master.css
--index.html
-gulpfile.js
-webpack.config.js
-app.js
*/
const createFiles = () => {
    const { writeFileSync } = fs;

    writeFileSync("./src/js/main.jsx", "", (err) => {
        if (err) throw err;
    });
    writeFileSync("./src/js/App.jsx", "", (err) => {
        if (err) throw err;
    });
    writeFileSync("./src/css/master.css", "", (err) => {
        if (err) throw err;
    });
    writeFileSync("./src/index.html", htmlContent, (err) => {
        if (err) throw err;
    });
    fs.writeFileSync("./gulpfile.js", gulpContent, (err) => {
        if (err) throw err;
    });
    fs.writeFileSync("./webpack.config.js", webpackContent, (err) => {
        if (err) throw err;
    });
    fs.writeFileSync("./app.js", electronContent, (err) => {
        if (err) throw err;
    });
}

/*
gulp DEV
electron DEV
electron-log
electron-updater
webpack-stream DEV
gulp-run DEV
gulp-sass DEV
node-sass DEV
babel-loader DEV
@babel/preset-env DEV
@babel/preset-react DEV
@babel/core DEV
react
react-dom
react-router-dom
mobx
mobx-react-lite
*/
const installDependencies = () => {
    exec("npm init --y");
    exec("git init");
    exec("npm i gulp electron webpack-stream gulp-run gulp-sass node-sass babel-loader @babel/preset-env @babel/preset-react @babel/core --save-dev");
    exec("npm i react react-dom react-router-dom mobx mobx-react-lite electron-log electron-updater");
}

createFolders();
createFiles();
installDependencies();