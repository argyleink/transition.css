import { writable } from 'svelte/store'

export const transition = location.hash !== ''
    ? writable(location.hash.slice(1))
    : writable('in:custom:circle-swoop')