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
State machine style; set the attribute `<div transition="in:wipe:up">...</div>` and watch it go 👍


#### Installation
**NPM**  
1. `npm i transition-style` 
2. `@import "transition-style";` from CSS
3. or `import 'transition-style';` from JS

<br>

**CDN**  
**Latest:** `https://unpkg.com/transition-style`  
**Individual Category Bundles**
  - Circles: `https://unpkg.com/transition-style/transition.circles.min.css`
  - Squares: `https://unpkg.com/transition-style/transition.squares.min.css`
  - Polygons: `https://unpkg.com/transition-style/transition.polygons.min.css`
  - Wipes: `https://unpkg.com/transition-style/transition.wipes.min.css`

**THE HACKPACK**  
`https://unpkg.com/transition-style/transition.hackpack.min.css`  
ONLY the custom properties and a couple base styles. **More options, more control, smaller import.**
Build [custom](#custom) `@keyframe` animations and MUCH more: 
- custom transitions leveraging provided variables
- multi-part transitions that aren't just `from` and `to`
- use classes (make your own BEM convention) or integrate in your CSS-in-JS architecture or front end framework

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

Attributes were chosen as the default so there's no question which transition is active. **There can be only 1 at a time.** With classes, for example, what happens when multiple "transition in" classes are applied to an element? Transition.css chooses to default with a state machine approach. See the [custom](#custom) section below for ways to use classes and/or the custom properties, so transition.css can fit into your development environment. It's very flexible, the built in attribute based approach is very easy to hack and customize. 

Transition.css is very similar to [animate.css](https://animate.style). The docs they've made are excellent and show many examples of advanced usage of libraries like this. You'll notice `transition.css` is very inspired by `animate.css`.

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

.--in-custom {
  --transition__duration: 1s;
  --transition__easing: ease-in-out;
  animation-name: circle-swoop;
}
```

Then, in the HTML:

```html
<div transition class="... --in-custom">
  A custom transitioned element
</div>
```

> The only rule is that you must transition from the same type of shapes

#### Play
Play and experiment with [this Codepen](https://codepen.io/argyleink/pen/RwrzGJb)

<br><br>

## Development
Running `npm start` runs Browsersync, Rollup and Postcss concurrently, watching changes to your files in `./app` and refreshes connected browsers.

## Production
Running `npm run build` compiles and minifies your code in `app` and outputs the optimised result to a folder called `dist` that's ready for static hosting.

Running `npm run production` will build your project and start a server at `dist`.

`npm run lib` to build the library files
