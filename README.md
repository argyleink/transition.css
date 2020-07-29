<p align="center">
<a href="https://transition.style" target="_blank">
<img src="https://storage.googleapis.com/atoms-sandbox.google.com.a.appspot.com/transition-css-right.png" style="max-width: 480px; width: 100%; height: auto;" />
</a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/59a03ed4-bf70-4441-b65c-200bcd61c013/deploy-status)](https://app.netlify.com/sites/shortstax/deploys)

### Just-add-water CSS clip-path transitions



#### Installation
1. `npm i transition-css`
1. TODO: CDN `https://cdnjs.cloudflare.com/ajax/libs/transition.css/1.0.0/transition.min.css`

#### Usage
After `transition.css` has been added to your project, add an attribute to an element:  

```html
<div transition="in:circle:bottom-right">A transitioned element</div>
```

<br><br>

## Development
Running `npm start` runs Browsersync, Rollup and Postcss concurrently, watching changes to your files in `./app` and refreshes connected browsers.

## Production
Running `npm run build` compiles and minifies your code in `app` and outputs the optimised result to a folder called `dist` that's ready for static hosting.

Running `npm run production` will build your project and start a server at `dist`.
