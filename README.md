<p align="center">
<a href="https://transition.style" target="_blank">
<img src="https://github.com/argyleink/transition.css/blob/main/app/logo.gif?raw=true" />
</a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/58d0ecf5-6241-4209-aa35-cf09983e0b37/deploy-status)](https://app.netlify.com/sites/transitions-css/deploys)

### Just-add-water CSS clip-path transitions



#### Installation
**NPM**  
1. `npm i transition-style` 
2. `@import "transition-style";` in your CSS or `import 'transition-style';` in your Javascript 

**CDN**  
Latest at `https://unpkg.com/transition-style`  
  
Or go minimal, import individual category bundles
  - `https://unpkg.com/transition-style/transition.circles.min.css`
  - `https://unpkg.com/transition-style/transition.squares.min.css`
  - `https://unpkg.com/transition-style/transition.polygons.min.css`
  - `https://unpkg.com/transition-style/transition.wipes.min.css`
  
<br><br>

#### Usage
After `transition.css` has been added to your project, add an attribute to an element:  

```html
<div transition="in:circle:bottom-right">
  A transitioned IN element
</div>

<div transition="out:wipe:down">
  A transitioned OUT element
</div>
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
