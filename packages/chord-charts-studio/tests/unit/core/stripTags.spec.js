import stripTags from '../../../src/core/stripTags';

describe('stripTags', () => {
	test('Module', () => {
		expect(stripTags).toBeInstanceOf(Function);
	});
});

describe.each([
	[undefined, ''],
	['', ''],
	['plain text', 'plain text'],
	['<div><p>Content</p></div>', 'Content'],
	[
		'<div><p>This text is <strong>bold</strong> and also <strong><em>italic</em></strong></p></div>',
		'This text is bold and also italic',
	],
])('Should strip tags out of %s', (input, output) => {
	test('Correctly strips html tags', () => {
		expect(stripTags(input)).toEqual(output);
	});
});
