declare module '*.md' {
  import type { SvelteComponentTyped } from 'svelte';
  export default class MdsvexComponent extends SvelteComponentTyped<{}> {}
}

declare module '*.svx' {
  import type { SvelteComponentTyped } from 'svelte';
  export default class MdsvexComponent extends SvelteComponentTyped<{}> {}
}
