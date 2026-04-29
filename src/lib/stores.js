import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const initial = browser ? localStorage.getItem('theme') || 'light' : 'light';
	const { subscribe, set } = writable(initial);

	return {
		subscribe,
		set: (value) => {
			if (browser) localStorage.setItem('theme', value);
			set(value);
		}
	};
}

export const theme = createThemeStore();