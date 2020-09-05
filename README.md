# simple-react-node-app

Building simple React & React-Dom Node Modules.
This repository will tell you to do the initial set-up for this.

Steps :-

1. First we need a directory for this :-

   > mkdir simple-react-node-app
   > cd simple-react-node-app

2. Then we need to initiate the package JSON will default values in the JSON:-

   > npm init -y

3. Now we have install the dependencies:-

   > npm install react react-dom --save

4. After this install the webpack and it's subsidiaries for module bundling and distributable creation.

   > npm install webpack webpack-cli webpack-dev-server --save

5. Next we need the transpiler with us to transform JSX to JS and modern JS to ES understandable to browsers :-

   > npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

6. Create the .babelrc file to support the configuration :- >{
   "presets": ["@babel/preset-env", "@babel/preset-react"]
   }

7. Post this system is ready and able to create the build but we have to provide those commands in package JSON under "scripts" for this like for Module Building :-

   > {"build": "webpack --mode production"}

8. For the running webpack dev server

   > {"dev": "webpack-dev-server --mode development --open "}

9. by default webpack4.0 needs minimal settings and it's entry point will **./src/index.js** and output will be generated in **dist/name-of-the-file** here (default name is main.js for the bundle) 

10. Run the command "npm run build" You will see that **dist/** folder is being created with the relevant files but this is not being connected to any HTML. So let's install another set of plugin for using HTML as the templates.

11. loaders are being used in the Webpack to read the non-JS stuff and convert them or put them in the bundle. We will be using.
    1.  **html-loader** : for loading **.html** files as the templates
    2.  **html-webpack-plugin**: for copying the files in the dist folder

12. Now run :-
    > npm run start : for running the Dev server @ localhost:8080
      OR    
    > npm run build : for building the project in dist/ folder


