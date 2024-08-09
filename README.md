#LMS Frontend

### setup instructions

1 clone the project
```git clone https://github.com/nishant0patil/lms-frontend-en.git
```

2 move into the directory
```cd lms_frontend
```

3 install dependencies
```npm i
```

4 Run the server
```npm run dev
```

### how to setup tailwind in your project[link]
https://tailwindcss.com/docs/guides/vite

1 install tailwind and other dependencies
```npm install -D tailwindcss postcss autoprefixer
```
2create the `tailwind.config.js` file
```npx tailwindcss init -p
```
3 add the files and extensions to tailwind config in the content property
```
"./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
```
4 Add the tailwind directives on the top of index.css file
```
@tailwind base;
@tailwind components;
@tailwind utilities;

```
5 then run the server tailwind should be integrated
