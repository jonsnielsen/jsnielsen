import type { Action } from 'svelte/action';

type InViewOptions = IntersectionObserverInit;

/**
 * Dispatches a `hasbeeninview` event the first time the element intersects
 * the viewport, then disconnects — mirrors the old `useHasBeenInView` hook's
 * one-shot reveal semantics.
 */
export const inView: Action<
	HTMLElement,
	InViewOptions | undefined,
	{ onhasbeeninview: () => void }
> = (node, options = { threshold: 0 }) => {
	const observer = new IntersectionObserver(([entry]) => {
		if (entry.isIntersecting) {
			node.dispatchEvent(new CustomEvent('hasbeeninview'));
			observer.disconnect();
		}
	}, options);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
};
