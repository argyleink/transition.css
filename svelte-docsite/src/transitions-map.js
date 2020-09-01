export default {

'in:circle:hesitate': `
@keyframes circle-in-hesitate {
  0% {
    clip-path: circle(0%);
  }
  40% {
    clip-path: circle(40%);
  }
  100% {
    clip-path: circle(125%);
  }
}

[transition-style="in:circle:hesitate"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-hesitate both;
}`.trim(),

'in:circle:center': `
@keyframes circle-in-center {
  from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(125%);
  }
}

[transition-style="in:circle:center"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-center both;
}`.trim(),

'in:circle:top-right': `
@keyframes circle-in-top-right {
  from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(150% at top right);
  }
}

[transition-style="in:circle:top-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-top-right both;
}`.trim(),

'in:circle:top-left': `
@keyframes circle-in-top-left {
  from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(150% at top left);
  }
}

[transition-style="in:circle:top-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-top-left both;
}`.trim(),

'in:circle:bottom-right': `
@keyframes circle-in-bottom-right {
  from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(150% at bottom right);
  }
}

[transition-style="in:circle:bottom-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-bottom-right both;
}`.trim(),

'in:circle:bottom-left': `
@keyframes circle-in-bottom-left {
  from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(150% at bottom left);
  }
}

[transition-style="in:circle:bottom-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-in-bottom-left both;
}`.trim(),

'out:circle:hesitate': `
@keyframes circle-out-hesitate {
  0% {
    clip-path: circle(125%);
  }
  40% {
    clip-path: circle(40%);
  }
  100% {
    clip-path: circle(0%);
  }
}

[transition-style="out:circle:hesitate"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-out-hesitate both;
}`.trim(),

'out:circle:center': `
@keyframes circle-out-center {
  from {
    clip-path: circle(0%);
  }
  to {
    clip-path: circle(125%);
  }
}

[transition-style="out:circle:center"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-out-center both;
}`.trim(),

'out:circle:top-right': `
@keyframes circle-out-top-right {
  from {
    clip-path: circle(125%);
  }
  to {
    clip-path: circle(0% at top right);
  }
}

[transition-style="out:circle:top-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-out-top-right both;
}`.trim(),

'out:circle:top-left': `
@keyframes circle-out-top-left {
  from {
    clip-path: circle(125%);
  }
  to {
    clip-path: circle(0% at top left);
  }
}

[transition-style="out:circle:top-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-out-top-left both;
}`.trim(),

'out:circle:bottom-right': `
@keyframes circle-out-bottom-right {
  from {
    clip-path: circle(125%);
  }
  to {
    clip-path: circle(0% at bottom right);
  }
}

[transition-style="out:circle:bottom-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-out-bottom-right both;
}`.trim(),

'out:circle:bottom-left': `
@keyframes circle-out-bottom-left {
  from {
    clip-path: circle(125%);
  }
  to {
    clip-path: circle(0% at bottom left);
  }
}

[transition-style="out:circle:bottom-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) circle-out-bottom-left both;
}`.trim(),

'in:square:center': `
@keyframes square-in-center {
  from {
    clip-path: inset(100% 100% 100% 100%);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:square:center"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-in-center both;
}`.trim(),

'in:square:hesitate': `
@keyframes square-in-hesitate {
  0% {
    clip-path: inset(100% 100% 100% 100%);
  }
  40% {
    clip-path: inset(33% 33% 33% 33%);
  }
  100% {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:square:hesitate"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-in-hesitate both;
}`.trim(),

'in:square:top-right': `
@keyframes square-in-top-right {
  from {
    clip-path: inset(100% 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:square:top-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-in-top-right both;
}`.trim(),

'in:square:top-left': `
@keyframes square-in-top-left {
  from {
    clip-path: inset(100% 0 0 100%);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:square:top-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-in-top-left both;
}`.trim(),

'in:square:bottom-right': `
@keyframes square-in-bottom-right {
  from {
    clip-path: inset(0 100% 100% 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:square:bottom-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-in-bottom-right both;
}`.trim(),

'in:square:bottom-left': `
@keyframes square-in-bottom-left {
  from {
    clip-path: inset(0 0 100% 100%);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:square:bottom-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-in-bottom-left both;
}`.trim(),

'out:square:center': `
@keyframes square-out-center {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(100% 100% 100% 100%);
  }
}

[transition-style="out:square:center"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-out-center both;
}`.trim(),

'out:square:hesitate': `
@keyframes square-out-hesitate {
  0% {
    clip-path: inset(0 0 0 0);
  }
  40% {
    clip-path: inset(33% 33% 33% 33%);
  }
  100% {
    clip-path: inset(100% 100% 100% 100%);
  }
}

[transition-style="out:square:hesitate"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-out-hesitate both;
}`.trim(),

'out:square:top-right': `
@keyframes square-out-top-right {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(0 0 100% 100%);
  }
}

[transition-style="out:square:top-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-out-top-right both;
}`.trim(),

'out:square:top-left': null,

'out:square:bottom-right': null,

'out:square:bottom-left': null,

'in:wipe:right': null,

'in:wipe:left': null,

'in:wipe:up': null,

'in:wipe:down': null,

'in:wipe:top-right': null,

'in:wipe:top-left': null,

'in:wipe:bottom-right': null,

'in:wipe:bottom-left': null,

'out:wipe:right': null,

'out:wipe:left': null,

'out:wipe:up': null,

'out:wipe:down': null,

'out:wipe:top-right': null,

'out:wipe:top-left': null,

'out:wipe:bottom-right': null,

'out:wipe:bottom-left': null,

'in:diamond:center': null,

'in:diamond:hesitate': null,

'in:polygon:opposing-corners': null,

'out:diamond:center': null,

'out:diamond:hesitate': null,

'out:polygon:opposing-corners': null,

}