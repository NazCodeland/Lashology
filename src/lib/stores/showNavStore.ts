import { type Writable, writable } from "svelte/store";


export const showNavStore: Writable<boolean> = writable(false)


showNavStore.subscribe(() => console.log("clicked"))