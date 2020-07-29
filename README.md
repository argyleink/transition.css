<p align="center">
<a href="https://transition.style" target="_blank">
<img src="https://storage.googleapis.com/atoms-sandbox.google.com.a.appspot.com/transition-css-right.png" style="max-width: 480px; width: 100%; height: auto;" />
</a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/58d0ecf5-6241-4209-aa35-cf09983e0b37/deploy-status)](https://app.netlify.com/sites/transitions-css/deploys)

### Just-add-water CSS clip-path transitions



#### Installation
1. `npm i transition-style` & `@import 'transition-style'`
OR
1. Use a CDN `https://unpkg.com/transition-style`

#### Usage
After `transition.css` has been added to your project, add an attribute to an element:  

```html
<div transition="in:circle:bottom-right">A transitioned element</div>
```

#### Play
Play and experiment with [this Codepen](https://codepen.io/argyleink/pen/RwrzGJb)

<br><br>

## Development
Running `npm start` runs Browsersync, Rollup and Postcss concurrently, watching changes to your files in `./app` and refreshes connected browsers.

## Production
Running `npm run build` compiles and minifies your code in `app` and outputs the optimised result to a folder called `dist` that's ready for static hosting.

Running `npm run production` will build your project and start a server at `dist`.

`npm run lib` to build the library files
