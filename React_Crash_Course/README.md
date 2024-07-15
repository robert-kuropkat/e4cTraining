[Home](/) \| [e4c Training](/e4cTraining)

# React + Vite Tutorial

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Comments

I did not find the first NextJS tutorial very helpful.  It is too old and even the directory structure has changed making it basically imppossible
to follow along.  However, the video strognly recommended a React Crash Course if you were not already familiar with React (which I'm not).  As 
luck would have it, he just udpated his React Crash Course a copule monts ago.  Other than it being three hours long, I found this one much more
helpful than the older NextJS one.

I installed the MS Edge browser extension for VSCode.  After finally getting a launch.json to work, it worked fine until the application needed to pop up an 
alert dialog.  Not sure yet if that is fixable.

## Training Materials

[React Crash Course 2024](https://www.youtube.com/watch?v=LDB4uaJ87e0) by Traversy Media

This video had us install a lot of extras.

- VS Code Extension, ES7+ React/Redux/React-Native snippets

```bash
npm  create vite@latest React_Crash_Course
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm i react-icons
npm i react-router-dom
npm i -D json-server
npm i react-spinners
npm i react-toastify 
```

