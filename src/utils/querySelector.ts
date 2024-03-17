/**
 * Selects a unique HTML elements that matches
 * the CSS selector inside the given context.
 * 
 * @params {string} selector
 * @params {Document|Element} [context]
 */
export const $ = (selector: string, context = document) => context.querySelector(selector) as HTMLAreaElement;

/**
 * Selects all HTML elements that matches
 * the CSS selector inside the given context.
 * 
 * @params {string} selector
 * @params {Document|Element} [context]
 */
export const $$ = (selector: string, context = document) => Array.from(context.querySelectorAll(selector)) as HTMLAreaElement[];