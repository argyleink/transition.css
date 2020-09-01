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
}
  `.trim(),
  'in:circle:center': null,
  'in:circle:top-right': null,
  'in:circle:top-left': null,
  'in:circle:bottom-right': null,
  'in:circle:bottom-left': null,
  'out:circle:hesitate': null,
  'out:circle:center': null,
  'out:circle:top-right': null,
  'out:circle:top-left': null,
  'out:circle:bottom-right': null,
  'out:circle:bottom-left': null,
  'in:square:center': null,
  'in:square:hesitate': null,
  'in:square:top-right': null,
  'in:square:top-left': null,
  'in:square:bottom-right': null,
  'in:square:bottom-left': null,
  'out:square:center': null,
  'out:square:hesitate': null,
  'out:square:top-right': null,
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