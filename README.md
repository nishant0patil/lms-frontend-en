#LMS Frontend

### setup instructions

1. clone the project
```git clone https://github.com/nishant0patil/lms-frontend-en.git
```

2. move into the directory
```cd lms_frontend
```

3. install dependencies
```npm i
```

4. Run the server
```npm run dev
```

### how to setup tailwind in your project[link]
https://tailwindcss.com/docs/guides/vite

1. install tailwind and other dependencies
```npm install -D tailwindcss postcss autoprefixer
```
2. create the `tailwind.config.js` file
```npx tailwindcss init -p
```
3. add the files and extensions to tailwind config in the content property
```
"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
```
4. Add the tailwind directives on the top of index.css file
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```
5. then run the server tailwind should be integrated

### Adding plugins and dependencies
```
npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```
### Adiing auto import sort for eslint
```
 npm i -D eslint-plugin-simple-import-sort

```
### adding auto import soet for eslint

1. install the plugin 

```npm i -D eslint-plugin-simple-import-sort
```
2. add rule in `.eslint.config.js`

```'simple-import-sort/imports':'error'
```
3. Add simple import sort in the plugin array of `.eslint.config.js` file

```plugins:[...,'simple-import-sort']
```
4. open setting.json in vscode configuration settings

5. Add the following line 

```"editor.CodeActionOnSave":{
        "source.fixAll.eslint":true
    }
```
