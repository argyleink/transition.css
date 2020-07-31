<p style="text-align:center">
<a href="https://transition.style" target="_blank">
<img src="https://github.com/argyleink/transition.css/blob/main/app/logo.gif?raw=true" />
</a>
</p>

<p style="text-align='center'">
  <img src="https://img.shields.io/npm/dt/transition.css.svg" alt="Total Downloads">
  <img src="https://img.shields.io/npm/v/transition.css.svg" alt="Latest Release">
  <img src="https://img.shields.io/npm/l/transition.css.svg" alt="License">
  <img src="https://api.netlify.com/api/v1/badges/58d0ecf5-6241-4209-aa35-cf09983e0b37/deploy-status" alt="Netlify Status">
</p>

### Just-add-water CSS clip-path transitions



#### Installation
**NPM**  
1. `npm i transition-style` 
2. `@import "transition-style";` in your CSS or `import 'transition-style';` in your Javascript 

**CDN**  
**Latest** at `https://unpkg.com/transition-style`  
  
Or import **individual category bundles**
  - `https://unpkg.com/transition-style/transition.circles.min.css`
  - `https://unpkg.com/transition-style/transition.squares.min.css`
  - `https://unpkg.com/transition-style/transition.polygons.min.css`
  - `https://unpkg.com/transition-style/transition.wipes.min.css`

Or go a **slim & custom** route by importing the `hackpack`
  - `https://unpkg.com/transition-style/transition.hackpack.min.css`
  - Create a [custom](#custom) `@keyframe` animation with the imported custom properties. 

> Custom properties ship with each `.min.css` as well
  
<br><br>

#### Usage
After `transition.css` has been added to your project, add an attribute to an element and watch the magic:  

```html
<div transition="in:circle:bottom-right">
  A transitioned IN element
</div>

<div transition="out:wipe:down">
  A transitioned OUT element
</div>
```

> if nothing is happening when using the attributes, it's likely `transition.css` has not loaded

<br><br>

#### Custom
Go off the rails and build your own transitions with the custom props that ship with the each bundle. There's even the `hackpack` which is exclusively the custom props 🤘💀

Most of the built in transitions are from the center. Here's how you can set the `from` transition to somewhere custom. This is also the animation used on page load for [transition.style](https://transition.style).

```css
@keyframes circle-swoop {
  from {
    clip-path: var(--circle-top-right-out);
  }
  to {
    clip-path: var(--circle-bottom-right-in);
  }
}

[transition="in:custom:circle-swoop"] {
  --transition__duration: 1s;
  animation-name: circle-swoop;
}
```

Then, in the HTML:

```html
<div transition="in:custom:circle-swoop">
  A custom transitioned element
</div>
```

> The only rule is that you must transition from the same type of shapes

<br><br>

#### Play
Play and experiment with [this Codepen](https://codepen.io/argyleink/pen/RwrzGJb)

<br><br>

## Development
Running `npm start` runs Browsersync, Rollup and Postcss concurrently, watching changes to your files in `./app` and refreshes connected browsers.

## Production
Running `npm run build` compiles and minifies your code in `app` and outputs the optimised result to a folder called `dist` that's ready for static hosting.

Running `npm run production` will build your project and start a server at `dist`.

`npm run lib` to build the library files
