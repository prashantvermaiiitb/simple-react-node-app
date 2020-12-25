# simple-react-node-app

Building simple React App using React/ React-Dom /Node Modules to learn the below concepts :-
1. Setting up the REPO from the scratch.
2. Creating Components for the project.
3. Passing the props around and using state.
4. Using children and React.children() API.
5. Inline Css / External Css file usage and loading that using webpack loaders and plugins. 
6. Life-Cycle hooks and methods.
7. Functional components - create / use them.
8. useState() & useEffect() - simple inclusion & usage.
9. forceUpdate() to manual render the entire app.
10. LifeCycleHooks component to show all the life-cycle methods.
11. Error Boundary to be used for the Component
12. Higher Order component for showing the Loader for a XHR-request
13. Mixins Vs HOC
14. Creating and using Refs
15. Portals 
16. Hooks
17. Render Props
18. Relay
19. PropsTypes having Default Props & Prop-validations
20. Stateless components, Uncontrolled Components
21. React Children API
22. React memoization for caching the response or the component
23. UnMounting the entire React APP after a timeout by using ReactDom.unmountComponentAtNode


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

   > npm install webpack webpack-cli webpack-dev-server --save-dev

5. Next we need the transpiler with us to transform JSX to JS and modern JS to ES understandable to browsers :-

   > npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev

6. Create the .babelrc file to support the configuration :- 
7. >{
   "presets": ["@babel/preset-env", "@babel/preset-react"]
   }

8. Post this system is ready and able to create the build but we have to provide those commands in package JSON under "scripts" for this like for Module Building :-

   > {"build": "webpack --mode production"}

9. For the running webpack dev server

   > {"dev": "webpack-dev-server --mode development --open --hot"}

10. by default webpack4.0 needs minimal settings and it's entry point will **./src/index.js** and output will be generated in **dist/name-of-the-file** here (default name is main.js for the bundle) 

11. Run the command "npm run build" You will see that **dist/** folder is being created with the relevant files but this is not being connected to any HTML. So let's install another set of plugin for using HTML as the templates.

12. loaders are being used in the Webpack to read the non-JS stuff and convert them or put them in the bundle. We will be using.
    1.  **html-loader** : for loading **.html** files as the templates
    2.  **html-webpack-plugin**: for copying the files in the dist folder.
      >npm install --save-dev html-loader html-webpack-plugin

13. Now run :-
    > npm run start : for running the Dev server @ localhost:8080
      OR    
    > npm run build : for building the project in dist/ folder

14. now we can also use the CSS in the code for that we need style-loader & css-loader to be installed. Those instructions are being updated in the webpack config and package JSON. this will help in loading CSS using JS in the <script> tag.

