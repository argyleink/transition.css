import { writable } from 'svelte/store'

export const transition = location.hash !== ''
    ? writable(location.hash.slice(1))
    : writable('out:circle:hesitate')

export const duration = writable(2.5)
export const easing = writable('cubic-bezier(.25, 1, .30, 1)')