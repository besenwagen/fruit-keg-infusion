import { wcag } from '../vendor/cy-axe.js';

export const audit = wcag('2.1 AA', {
	'application/javascript': [
		'https://www.google-analytics.com/**',
		'https://www.youtube*.com/**',
	],
});
