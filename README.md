# LMS Frontend

### Setup instructions

1 clone the project
```git clone https://github.com/nishant0patil/lms-frontend-en.git
```

2 move into the directory
```cd lms-frontend
```

3 install dependencies
```npm i
```

4 Run the server
```npm run dev 
```

### how to setup tailwind in your project[link]

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
