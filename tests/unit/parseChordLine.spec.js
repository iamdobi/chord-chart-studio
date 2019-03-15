import parseChordLine from '../../src/parseChordLine.js';
import getTimeSignature from '../../src/getTimeSignature';

import IncorrectBeatCountException from '../../src/exceptions/IncorrectBeatCountException';
import InvalidChordRepetitionException from '../../src/exceptions/InvalidChordRepetitionException';

describe('parseChordLine', () => {
	test('Module', () => {
		expect(parseChordLine).toBeInstanceOf(Function);
	});
});

const ts3_4 = getTimeSignature('3/4');
const ts4_4 = getTimeSignature('4/4');
const ts5_4 = getTimeSignature('5/4');
const ts3_8 = getTimeSignature('3/8');

describe.each([
	['1 bar / 1 chord / 4/4', 'Cm', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm', symbol: 'Cm', duration: 4, beat: 1 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 1
	}],

	['1 bar / 2 chords / 4/4', 'Cm.. F..', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm..', symbol: 'Cm', duration: 2, beat: 1 },
					{ string: 'F..', symbol: 'F', duration: 2, beat: 3 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 2
	}],

	['1 bar / 3 chords / 4/4', 'Cm.. F. G.', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm..', symbol: 'Cm', duration: 2, beat: 1 },
					{ string: 'F.', symbol: 'F', duration: 1, beat: 3 },
					{ string: 'G.', symbol: 'G', duration: 1, beat: 4 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 3
	}],

	['1 bar / 4 chords / 4/4', 'Cm. Em7. F. G.', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm.', symbol: 'Cm', duration: 1, beat: 1 },
					{ string: 'Em7.', symbol: 'Em7', duration: 1, beat: 2 },
					{ string: 'F.', symbol: 'F', duration: 1, beat: 3 },
					{ string: 'G.', symbol: 'G', duration: 1, beat: 4 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 4
	}],

	['2 bars / 2 chords / 4/4', 'C F', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'C', symbol: 'C', duration: 4, beat: 1 },
				],
				timeSignature: ts4_4,
			}, {
				allChords: [
					{ string: 'F', symbol: 'F', duration: 4, beat: 1 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 2
	}],

	['2 bars / 3 chords / 4/4', 'C F.. G..', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'C', symbol: 'C', duration: 4, beat: 1 },
				],
				timeSignature: ts4_4,
			}, {
				allChords: [
					{ string: 'F..', symbol: 'F', duration: 2, beat: 1 },
					{ string: 'G..', symbol: 'G', duration: 2, beat: 3 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 3
	}],

	['2 bars / 4 chords / 4/4', 'C... Em7. F. G...', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'C...', symbol: 'C', duration: 3, beat: 1 },
					{ string: 'Em7.', symbol: 'Em7', duration: 1, beat: 4 },
				],
				timeSignature: ts4_4,
			}, {
				allChords: [
					{ string: 'F.', symbol: 'F', duration: 1, beat: 1 },
					{ string: 'G...', symbol: 'G', duration: 3, beat: 2 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 4
	}],

	['3 bars / 4 chords / 4/4', 'C Em7. F... G', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'C', symbol: 'C', duration: 4, beat: 1 },
				],
				timeSignature: ts4_4,
			}, {
				allChords: [
					{ string: 'Em7.', symbol: 'Em7', duration: 1, beat: 1 },
					{ string: 'F...', symbol: 'F', duration: 3, beat: 2 },
				],
				timeSignature: ts4_4,
			}, {
				allChords: [
					{ string: 'G', symbol: 'G', duration: 4, beat: 1 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 4
	}],


	['1 bar / 1 chord / 3/4', 'C', ts3_4, {
		allBars: [
			{
				allChords: [
					{ string: 'C', symbol: 'C', duration: 3, beat: 1 },
				],
				timeSignature: ts3_4,
			}
		],
		chordCount: 1
	}],

	['1 bar / 2 chords / 3/4', 'Cm. F..', ts3_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm.', symbol: 'Cm', duration: 1, beat: 1 },
					{ string: 'F..', symbol: 'F', duration: 2, beat: 2 },
				],
				timeSignature: ts3_4,
			}
		],
		chordCount: 2
	}],

	['1 bar / 2 chords / 3/4', 'Cm.. F.', ts3_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm..', symbol: 'Cm', duration: 2, beat: 1 },
					{ string: 'F.', symbol: 'F', duration: 1, beat: 3 },
				],
				timeSignature: ts3_4,
			}
		],
		chordCount: 2
	}],

	['1 bar / 3 chords / 3/4', 'Cm. F. G.', ts3_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm.', symbol: 'Cm', duration: 1, beat: 1 },
					{ string: 'F.', symbol: 'F', duration: 1, beat: 2 },
					{ string: 'G.', symbol: 'G', duration: 1, beat: 3 },
				],
				timeSignature: ts3_4,
			}
		],
		chordCount: 3
	}],

	['3/8 bar', 'Cm F G.', ts3_8, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm', symbol: 'Cm', duration: 1, beat: 1 },
				],
				timeSignature: ts3_8,
			},
			{
				allChords: [
					{ string: 'F', symbol: 'F', duration: 1, beat: 1 },
				],
				timeSignature: ts3_8,
			},
			{
				allChords: [
					{ string: 'G.', symbol: 'G', duration: 1, beat: 1 },
				],
				timeSignature: ts3_8,
			}
		],
		chordCount: 3
	}],

	['trim end spaces', 'Cm ', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm', symbol: 'Cm', duration: 4, beat: 1 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 1
	}],

	['trim start spaces', ' Cm', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm', symbol: 'Cm', duration: 4, beat: 1 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 1
	}],

	['trim start and end spaces', '   Cm   ', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'Cm', symbol: 'Cm', duration: 4, beat: 1 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 1
	}],

	['handle multiple spaces between chords', 'C..     B..', ts4_4, {
		allBars: [
			{
				allChords: [
					{ string: 'C..', symbol: 'C', duration: 2, beat: 1 },
					{ string: 'B..', symbol: 'B', duration: 2, beat: 3 },
				],
				timeSignature: ts4_4,
			}
		],
		chordCount: 2
	}],

])('Should parses correctly %s: %s',
	(title, input, timeSignature, expected) => {
		test('is correctly parsed', () => {
			const options = { timeSignature };
			const parsed = parseChordLine(input, options);

			expect(parsed).toEqual(expected);
		});
	});


describe.each([

	['1 chord / 1 beat / 4/4',	  'Cm.',			'Cm.',		'Cm', 1, 1, ts4_4 ],
	['1 chord / 2 beats / 4/4',   'Cm..',			'Cm..',		'Cm', 2, 2, ts4_4 ],
	['1 chord / 3 beats / 4/4',   'Cm...',			'Cm...',	'Cm', 3, 3, ts4_4 ],
	['1 chord / 5 beats / 4/4',   'Cm.....',		'Cm.....',	'Cm', 5, 5, ts4_4 ],
	['1 chord / 6 beats / 4/4',   'Cm......',		'Cm......',	'Cm', 6, 6, ts4_4 ],
	['1 chord / 7 beats / 4/4',   'Cm.......',		'Cm.......','Cm', 7, 7, ts4_4 ],
	['2 chords / 3 beats / 4/4',  'Cm. D..',		'D..',		'D',  2, 3, ts4_4 ],
	['2 chords / 5 beats / 4/4',  'Cm... D..',		'D..',		'D',  2, 5, ts4_4 ],
	['2 chords / 6 beats / 4/4',  'Cm... D...',		'D...',		'D',  3, 6, ts4_4 ],
	['2 chords / 7 beats / 4/4',  'Cm... D',		'D',		'D',  4, 7, ts4_4 ],
	['3 chords / 3 beats / 4/4',  'C. D. E.',		'E.',		'E',  1, 3, ts4_4 ],
	['3 chords / 5 beats / 4/4',  'C. D.. E..',		'E..',		'E',  2, 5, ts4_4 ],

	['1 chords / 4 beats / 5/4',  'C....',			'C....',	'C',  4, 4, ts5_4 ],
	['2 chords / 4 beats / 5/4',  'C.. D..',		'D..',		'D',  2, 4, ts5_4 ],
	['3 chords / 6 beats / 5/4',  'C.. D.. E..',	'E..',		'E',  2, 6, ts5_4 ],
	['3 chords / 7 beats / 5/4',  'C.. D... E..',	'E..',		'E',  2, 2, ts5_4 ],
	['3 chords / 8 beats / 5/4',  'C... D... E..',	'D...',		'D',  3, 6, ts5_4 ],
	['3 chords / 9 beats / 5/4',  'C... D E.',		'D',		'D',  5, 8, ts5_4 ],

])('Throw on %s: %s', (title, input, string, symbol, duration, currentBeatCount, timeSignature) => {
	const throwingFn = () => { parseChordLine(input, { timeSignature }); };

	test('Throw InvalidChordRepetitionException', () => {
		expect(throwingFn).toThrow(IncorrectBeatCountException);
	});

	test('Add correct properties to exception', () => {
		try {
			throwingFn();
			expect(false).toBeTruthy();

		} catch (e) {
			expect(e.name).toBe('IncorrectBeatCountException');
			expect(e.string).toBe(string);
			expect(e.symbol).toBe(symbol);
			expect(e.duration).toBe(duration);
			expect(e.currentBeatCount).toBe(currentBeatCount);
			expect(e.beatCount).toBe(timeSignature.beatCount);
		}
	});
});


describe.each([

	['A. A...', 			'A...', 'A'],
	['A.. A..', 			'A..', 	'A'],
	['A... A.', 			'A.', 	'A'],
	['A... B. C.. C. F.', 	'C.', 	'C'],
	['A... B. F... F.', 	'F.', 	'F'],

])('Throw if repeated chord in a bar: %s', (input, string, symbol) => {
	const throwingFn = () => { parseChordLine(input); };

	test('Throw InvalidChordRepetitionException', () => {
		expect(throwingFn).toThrow(InvalidChordRepetitionException);
	});


	test('Add correct properties to exception', () => {
		try {
			throwingFn();
			expect(false).toBeTruthy();

		} catch (e) {
			expect(e.name).toBe('InvalidChordRepetitionException');
			expect(e.string).toBe(string);
			expect(e.symbol).toBe(symbol);
		}
	});

});