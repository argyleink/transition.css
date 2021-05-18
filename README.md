<p align="center">
  <img src="https://img.shields.io/npm/dt/transition.css.svg" alt="Total Downloads">
  <img src="https://img.shields.io/npm/v/transition.css.svg" alt="Latest Release">
  <img src="https://img.shields.io/npm/l/transition.css.svg" alt="License">
  <img src="https://api.netlify.com/api/v1/badges/58d0ecf5-6241-4209-aa35-cf09983e0b37/deploy-status" alt="Netlify Status">
</p>

<p align="center">
<a href="https://codepen.io/argyleink/pen/zYqYpEB" target="_blank">
<img src="https://github.com/argyleink/transition.css/blob/main/gif/kitchen-sink.gif?raw=true" />
</a>
</p>

**46 pre-built transitions!**  
> Hands on at [Codepen](https://codepen.io/argyleink/pen/RwrzGJb) or preview all @ [transition.style](https://transition.style)

<br>
<br>

## Basics
Import the CSS and set an attribute on some HTML: [try on Codepen](https://codepen.io/argyleink/pen/QWNRXEG)  
<img src="https://github.com/argyleink/transition.css/blob/main/gif/wipe-up.gif?raw=true" />

```html
<link rel="stylesheet" href="https://unpkg.com/transition-style">

<div transition-style="in:wipe:up">
  👍
</div>
```

<br>
<br>

## Installation
#### NPM  
1. `npm i transition-style` 
2. import from **CSS**
```css
@import "transition-style";
```
3. or import from **JS** 
```js
import 'transition-style';
```

#### CDN 
`https://unpkg.com/transition-style`  

<br>

**Individual Category Bundles**
  - **Circles** `https://unpkg.com/transition-style/transition.circles.min.css`
  - **Squares** `https://unpkg.com/transition-style/transition.squares.min.css`
  - **Polygons** `https://unpkg.com/transition-style/transition.polygons.min.css`
  - **Wipes** `https://unpkg.com/transition-style/transition.wipes.min.css`
  
> Import category bundles from NPM too `import "transition-style/transition.circles.min.css"`

<br>

### 👉 The Hackpack 
`https://unpkg.com/transition-style/transition.hackpack.min.css`  

**More options, more control, smaller import**  
by importing only the custom properties and base styles:
- compose custom transition combinations
- create multi-part transitions
- bring your own architecture with classes or CSS-in-JS or anything!

[The Hackpack Sandbox](https://codepen.io/argyleink/pen/MWyJxLx)

> Custom properties ship with each `.min.css` as well

<br>

### 🔗 Bookmarklet

Try transition.css on almost any _existing_ site! Just copy 📋 the following, create a new bookmark, and paste in the URL:

```js
javascript:(function(){var a=document.createElement("link");a.rel="stylesheet";a.href="https://unpkg.com/transition-style";document.head.append(a);})();
```

You can now go to a website and click the bookmark to try it out! Animations automatically run when you manually add classes in dev tools, or run code like this in the console:

```js
$('body').setAttribute('transition-style','in:circle:bottom-right')
```

Caveat: this bookmarklet doesn't work on websites that have a strict CSP set up.

<br>
<img src="https://github.com/argyleink/transition.css/blob/main/gif/opposing-corner-fold.gif?raw=true" />
<br><br>

## Usage
After `transition.css` has been added to your project, add an attribute to an element and watch the magic:  

```html
<div transition-style="in:circle:bottom-right">
  A transitioned IN element
</div>

<div transition-style="out:wipe:down">
  A transitioned OUT element
</div>
```

> if nothing is happening when using the attributes, it's likely `transition.css` has not loaded

<br>
Attributes were chosen as the default so there's no question which transition is active. **There can be only 1 at a time.** With classes, for example, what happens when multiple "transition in" classes are applied to an element? Transition.css chooses to default with a state machine approach so things like a classname collision doesn't need solved. See the [custom](#custom) section below for ways to use classes and/or the shape custom properties so transition.css can fit into your development environment. The built in attribute based approach is very easy to hack, customize and escape. 

#### Using `@keyframes`
Each bundle ships with the `@keyframes` declared, and you can use them as you see fit. You can use these to build your own animations or just hook into the presets in your own way:

```css
.main--state-in {
  animation: wipe-in-left;
  animation-duration: 2s;
  animation-fill-mode: both;
}
```

Checkout the [src](https://github.com/argyleink/transition.css/blob/main/src) to find the names of the `@keyframe` animations. They follow a pattern like the attributes, so you should be able to assume what they are with decent accuracy. 

<br>

#### Using CSS Custom Properties
Each bundle ships with clearly named custom properties which contain the state and geometry needed to orchestrate custom transitions. 

```css
.overrides {
  --transition__duration: 1s;            /* default: 2.5s */
  --transition__easing: ease-in-out;     /* default: cubic-bezier(.25, 1, .30, 1) */
  --transition__delay: 1s;               /* default: 0 */
}
```

or target a specific transition and override it's defaults:

```css
[transition="in:wipe:up"] {
  --transition__duration: 1s;
}
```

<br>

#### Custom
Go off the rails and build your own transitions with these variables. There's even the `The Hackpack` which is exclusively the custom props 🤘💀  Here's how you can compose a brand new transition from the custom property primitives:

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
<div transition-style class="--in-custom">
  A custom transitioned element
</div>
```

> The only rule is that you must transition from the same type of shapes

At this point you're using Transition.css to it's maximum. You can reach a huge set of transitions by using the custom properties. Have fun!

#### Play
Play and experiment with [this Codepen](https://codepen.io/argyleink/pen/RwrzGJb)

<br><br>

## Development
See the `svelte` branch.

## Production
`npm run bundle` concurrently bundles and minifies. 
