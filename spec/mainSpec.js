import jsdom from 'jsdom';

import {
	createElementAttribute,
	createElement,
	createHeaderEl,
	createSectionEl,
	createMainEl,
	createFooterEl,
} from '../js/util.js';

const { JSDOM } = jsdom;

describe('DOM', () => {
	beforeEach(() => {
		const { document } = new JSDOM(
			`<!DOCTYPE html><html><body></body></html>`
		).window;
		global.document = document;
	});

	it("should be able to create element via 'createElement' function", () => {
		const headingOneEl = createElement('h1', 'title', 'Lorem ipsum');
		document.body.appendChild(headingOneEl);

		const isHeadingOneElElExist = !!document.querySelector('.title');
		expect(isHeadingOneElElExist).not.toBeNull();
	});

	it("should be able to return element attribute data via 'createElementAttribute' function", () => {
		const widthData = createElementAttribute('width', 640);

		const expectedWidthData = {
			name: 'width',
			value: 640,
		};

		expect(widthData).toEqual(expectedWidthData);
	});

	it("should be able to create header element via 'createHeaderEl' function", () => {
		const headerEl = createHeaderEl();
		document.body.appendChild(headerEl);

		const isHeaderElExist = !!document.querySelector('header');
		expect(isHeaderElExist).not.toBeNull();
	});

	it("should be able to create section element via 'createSectionEl' function", () => {
		const sectionEl = createSectionEl();
		document.body.appendChild(sectionEl);

		const isSectionElExist = !!document.querySelector('.section');
		expect(isSectionElExist).not.toBeNull();
	});

	it("should be able to create main element via 'createMainEl' function", () => {
		const mainEl = createMainEl();
		document.body.appendChild(mainEl);

		const isMainElExist = !!document.querySelector('main');
		expect(isMainElExist).not.toBeNull();
	});

	it("should be able to create footer element via 'createFooterEl' function", () => {
		const footerEl = createFooterEl();
		document.body.appendChild(footerEl);

		const isFooterElExist = !!document.querySelector('footer');
		expect(isFooterElExist).not.toBeNull();
	});
});
