import { writable } from 'svelte/store'

// INTERACTIVE TRANSITION
export const transition = location.hash !== ''
  ? writable(location.hash.slice(1))
  : writable('in:custom:circle-swoop')

export const duration = writable(2.5)
export const easing = writable('cubic-bezier(.25, 1, .30, 1)')

// TOAST
export const toast = writable({
  showing: false,
  x: 0,
  y: 0,
})