import { audit } from '../integration.js';

/* global cy */

audit([
	'/',
	'/about/', {
		'section#foo': 'body > div:nth-of-type(1) button',
		'section#bar': 'body > div:nth-of-type(2) button',
		'section#quux': 'body > div:nth-of-type(3) button',
		'section#dropbox': [
			'button[name="copy"][value="foo"]',
			'button[name="copy"][value="bar"]',
			'button[name="copy"][value="quux"]',
			function foo() {
				cy.intercept('**/foo.json').as('foo');
				cy.get('button[name="fetch"][value="foo"]').click();
				cy.wait('@foo');
			},
			function bar() {
				cy.intercept('**/bar.json').as('bar');
				cy.get('button[name="fetch"][value="bar"]').click();
				cy.wait('@bar');
			},
			function quux() {
				cy.intercept('**/quux.json').as('quux');
				cy.get('button[name="fetch"][value="quux"]').click();
				cy.wait('@quux');
			},
		],
		'body section#dropbox': {
			'button[name="fetch"][value="foo"]': '**/foo.json',
			'button[name="fetch"][value="bar"]': '**/bar.json',
			'button[name="fetch"][value="quux"]': '**/quux.json',
		},
	},
	'/contact/',
]);
