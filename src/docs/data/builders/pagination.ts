import type { APISchema, KeyboardSchema } from '$docs/types';

const builder: APISchema = {
	title: 'CreatePaginationArgs',
	description: 'The configuration object passed to the `createPagination` builder function.',
	props: [
		{
			label: 'count',
			type: 'number',
		},
		{
			label: 'perPage',
			type: 'number',
			default: '1',
		},
		{
			label: 'siblingCount',
			type: 'number',
			default: '1',
		},
		{
			label: 'page',
			type: 'number',
			default: '1',
		},
	],
};

const keyboard: KeyboardSchema = [
	{
		key: 'Space',
		behavior: 'When focused on a `pageTrigger` or `nextButton`, moves to that page.',
	},
	{
		key: 'Enter',
		behavior: 'When focused on a `pageTrigger` or `nextButton`, moves to that page.',
	},
	{
		key: 'Tab',
		behavior: 'Moves focus to the next focusable element.',
	},
	{
		key: 'Shift + Tab',
		behavior: 'Moves focus to the previous focusable element',
	},
	{
		key: 'ArrowRight',
		behavior: 'Moves focus to the next focusable `pageTrigger` or `nextButton`.',
	},
	{
		key: 'ArrowLeft',
		behavior: 'Moves focus to the previous focusable `pageTrigger` or `prevButton`',
	},
	{
		key: 'Home',
		behavior: 'Moves focus to the first focusable `pageTrigger` or `prevButton`.',
	},
	{
		key: 'End',
		behavior: 'Moves focus to the first focusable `pageTrigger` or `prevButton`.',
	},
];

const root: APISchema = {
	title: 'Root',
	description: 'The root element of the pagination component.',
	dataAttributes: [
		{
			label: 'data-scope',
			value: '`pagination`',
		},
	],
};

const pageTrigger: APISchema = {
	title: 'Page Trigger',
	description: 'A button that triggers a page change.',
	dataAttributes: [
		{
			label: 'data-melt-part',
			value: '`page-trigger`',
		},
		{
			label: 'data-selected',
			value: 'Present when the page is selected.',
		},
	],
};

const prevButton: APISchema = {
	title: 'Previous Button',
	description: 'A button that moves to the previous page.',
	dataAttributes: [
		{
			label: 'data-melt-part',
			value: '`page-prev-button`',
		},
	],
};

const nextButton: APISchema = {
	title: 'Next Button',
	description: 'A button that moves to the next page.',
	dataAttributes: [
		{
			label: 'data-melt-part',
			value: '`page-next-button`',
		},
	],
};

const schemas = {
	builder,
	keyboard,
	root,
	pageTrigger,
	prevButton,
	nextButton,
};

const features = [
	'Full keyboard navigation support',
	'Supports a custom number of pages',
	'Display range of visible pages',
	'Supports a custom number of visible pages',
	'Supports a custom number of sibling pages',
];

export const paginationData = {
	schemas,
	features,
};
