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

'out:square:top-left': `
@keyframes square-out-top-left {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(0 100% 100% 0);
  }
}

[transition-style="out:square:top-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-out-top-left both;
}`.trim(),

'out:square:bottom-right': `
@keyframes square-out-bottom-right {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(100% 0 0 100%);
  }
}

[transition-style="out:square:bottom-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-out-bottom-right both;
}`.trim(),

'out:square:bottom-left': `
@keyframes square-out-bottom-left {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(100% 100% 0 0);
  }
}

[transition-style="out:square:bottom-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) square-out-bottom-left both;
}`.trim(),

'in:wipe:right': `
@keyframes wipe-in-right {
  from {
    clip-path: inset(0 100% 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:wipe:right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-right both;
}`.trim(),

'in:wipe:left': `
@keyframes wipe-in-left {
  from {
    clip-path: inset(0 0 0 100%);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:wipe:left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-left both;
}`.trim(),

'in:wipe:up': `
@keyframes wipe-in-up {
  from {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:wipe:up"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-up both;
}`.trim(),

'in:wipe:down': `
@keyframes wipe-in-down {
  from {
    clip-path: inset(0 0 100% 0);
  }
  to {
    clip-path: inset(0 0 0 0);
  }
}

[transition-style="in:wipe:down"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-down both;
}`.trim(),

'in:wipe:top-right': `
@keyframes wipe-in-top-right {
  from {
    clip-path: polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%);
  }
  to {
    clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
  }
}

[transition-style="in:wipe:top-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-top-right both;
}`.trim(),

'in:wipe:top-left': `
@keyframes wipe-in-top-left {
  from {
    clip-path: polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%);
  }
  to {
    clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
  }
}

[transition-style="in:wipe:top-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-top-left both;
}`.trim(),

'in:wipe:bottom-right': `
@keyframes wipe-in-bottom-right {
  from {
    clip-path: polygon(0 0, 0 0, 0 0, 0 50%);
  }
  to {
    clip-path: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%);
  }
}

[transition-style="in:wipe:bottom-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-bottom-right both;
}`.trim(),

'in:wipe:bottom-left': `
@keyframes wipe-in-bottom-left {
  from {
    clip-path: polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%);
  }
  to {
    clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
  }
}

[transition-style="in:wipe:bottom-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-in-bottom-left both;
}`.trim(),

'out:wipe:right': `
@keyframes wipe-out-right {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(0 0 0 100%);
  }
}

[transition-style="out:wipe:right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-right both;
}`.trim(),

'out:wipe:left': `
@keyframes wipe-out-left {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(0 100% 0 0);
  }
}

[transition-style="out:wipe:left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-left both;
}`.trim(),

'out:wipe:up': `
@keyframes wipe-out-up {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(0 0 100% 0);
  }
}

[transition-style="out:wipe:up"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-up both;
}`.trim(),

'out:wipe:down': `
@keyframes wipe-out-down {
  from {
    clip-path: inset(0 0 0 0);
  }
  to {
    clip-path: inset(100% 0 0 0);
  }
}

[transition-style="out:wipe:down"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-down both;
}`.trim(),

'out:wipe:top-right': `
@keyframes wipe-out-top-right {
  from {
    clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
  }
  to {
    clip-path: polygon(50% -50%, 150% 50%, 150% 50%, 50% -50%);
  }
}

[transition-style="out:wipe:top-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-top-right both;
}`.trim(),

'out:wipe:top-left': `
@keyframes wipe-out-top-left {
  from {
    clip-path: polygon(-50% 0%, 200% 0, 0 200%, 0 -50%);
  }
  to {
    clip-path: polygon(0 0, 0 0, 0 0, 0 50%);
  }
}

[transition-style="out:wipe:top-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-top-left both;
}`.trim(),

'out:wipe:bottom-right': `
@keyframes wipe-out-bottom-right {
  from {
    clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
  }
  to {
    clip-path: polygon(150% 50%, 150% 50%, 50% 150%, 50% 150%);
  }
}

[transition-style="out:wipe:bottom-right"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-bottom-right both;
}`.trim(),

'out:wipe:bottom-left': `
@keyframes wipe-out-bottom-left {
  from {
    clip-path: polygon(50% -50%, 150% 50%, 50% 150%, -50% 50%);
  }
  to {
    clip-path: polygon(-50% 50%, 50% 150%, 50% 150%, -50% 50%);
  }
}

[transition-style="out:wipe:bottom-left"] {
  animation: 2.5s cubic-bezier(.25, 1, .30, 1) wipe-out-bottom-left both;
}`.trim(),

'in:diamond:center': `
@keyframes diamond-in-center {
  from {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }
  to {
    clip-path: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%);
  }
}

[transition-style="in:diamond:center"] {
  animation: 1.5s cubic-bezier(.25, 1, .30, 1) diamond-in-center both;
}`.trim(),

'in:diamond:hesitate': `
@keyframes diamond-in-hesitate {
  0% {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }
  50% {
    clip-path: polygon(45% 50%, 50% 25%, 55% 50%, 50% 75%);
  }
  100% {
    clip-path: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%);
  }
}

[transition-style="in:diamond:hesitate"] {
  animation: 1.5s cubic-bezier(.25, 1, .30, 1) diamond-in-hesitate both;
}`.trim(),

'in:polygon:opposing-corners': `
@keyframes polygon-in-opposing-corners {
  from {
    clip-path: polygon(0 0, 50% 50%, 100% 100%, 50% 50%);
  }
  to {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
  }
}

[transition-style="in:polygon:opposing-corners"] {
  animation: 1.5s cubic-bezier(.25, 1, .30, 1) polygon-in-opposing-corners both;
}`.trim(),

'out:diamond:center': `
@keyframes diamond-out-center {
  from {
    clip-path: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%);
  }
  to {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }
}

[transition-style="out:diamond:center"] {
  animation: 1.5s cubic-bezier(.25, 1, .30, 1) diamond-out-center both;
}`.trim(),

'out:diamond:hesitate': `
@keyframes diamond-out-hesitate {
  0% {
    clip-path: polygon(-50% 50%, 50% -50%, 150% 50%, 50% 150%);
  }
  50% {
    clip-path: polygon(45% 50%, 50% 25%, 55% 50%, 50% 75%);
  }
  100% {
    clip-path: polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%);
  }
}

[transition-style="out:diamond:hesitate"] {
  animation: 1.5s cubic-bezier(.25, 1, .30, 1) diamond-out-hesitate both;
}`.trim(),

'out:polygon:opposing-corners': `
@keyframes polygon-out-opposing-corners {
  from {
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
  }
  to {
    clip-path: polygon(0 0, 50% 50%, 100% 100%, 50% 50%);
  }
}

[transition-style="out:polygon:opposing-corners"] {
  animation: 1.5s cubic-bezier(.25, 1, .30, 1) polygon-out-opposing-corners both;
}`.trim(),

}