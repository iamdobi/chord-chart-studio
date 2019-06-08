import _ from 'lodash';

import React from 'react';
import { withStore, getState, resetStore, dispatch } from '../../../helpers/withStore';

import { render, cleanup, fireEvent, act } from '@testing-library/react';
import 'jest-dom/extend-expect';

import Rendering from '../../../../../src/optionsPanels/rendering/_containers/Rendering';
import allWidgets from '../../../../../src/optionsPanels/rendering/allWidgets';

import * as optionsSelectors from '../../../../../src/db/options/selectors';
import * as optionsActions from '../../../../../src/db/options/actions';
import * as appActions from '../../../../../src/ui/layout/app/_state/actions';

afterEach(cleanup);

describe('"Rendering" option panel', () => {
	beforeEach(() => {
		resetStore();
	});

	describe('Option Groups', () => {
		test('Render all optionGroups', () => {
			const { getByText } = render(withStore(
				<Rendering />
			));

			const allLabels = _
				.chain(allWidgets.allWidgets)
				.pickBy(widget => widget.type === 'optionsGroup')
				.map(widget => widget.label)
				.value();

			getByText(allLabels[0]);
			// getByText(allLabels[1]); // helpers is disabled for now
			getByText(allLabels[2]);
			getByText(allLabels[3]);
		});

		test('Layout group: a click on the group title should toggle widgets visibility', () => {
			dispatch(appActions.setEditorMode('play'));

			const { getByText, queryByText } = render(withStore(
				<Rendering />
			));

			const groupLabel = allWidgets.allWidgets.layout.label;
			const group = getByText(groupLabel);

			queryByText(allWidgets.allWidgets.layout.allGroupWidgets.documentSize.label);
			queryByText(allWidgets.allWidgets.layout.allGroupWidgets.columnsCount.label);
			queryByText(allWidgets.allWidgets.layout.allGroupWidgets.columnBreakOnParagraph.label);

			act(() => {
				fireEvent.click(group);
			});

			expect(queryByText(allWidgets.allWidgets.layout.allGroupWidgets.documentSize.label)).toBeNull();
			expect(queryByText(allWidgets.allWidgets.layout.allGroupWidgets.columnsCount.label)).toBeNull();
			expect(queryByText(allWidgets.allWidgets.layout.allGroupWidgets.columnBreakOnParagraph.label)).toBeNull();

			act(() => {
				fireEvent.click(group);
			});

			queryByText(allWidgets.allWidgets.layout.allGroupWidgets.documentSize.label);
			queryByText(allWidgets.allWidgets.layout.allGroupWidgets.columnsCount.label);
			queryByText(allWidgets.allWidgets.layout.allGroupWidgets.columnBreakOnParagraph.label);
		});
	});


	describe('Some widgets should be disabled depending on editor Mode', () => {
		test('Edit mode', () => {
			dispatch(appActions.setEditorMode('edit'));

			const { getByText } = render(withStore(
				<Rendering />
			));

			const style = getByText(allWidgets.allWidgets.style.label);
			//const alignBars = getByText(allWidgets.allWidgets.alignBars.label);
			//const helpers = getByText(allWidgets.allWidgets.helpers.label);
			const layout = getByText(allWidgets.allWidgets.layout.label);

			expect(style.closest('.sb-optionSelect-isNotInteractable')).toBeInstanceOf(Element);
			//expect(helpers.closest('.sb-optionsGroup-isNotInteractable')).toBeInstanceOf(Element);
			expect(layout.closest('.sb-optionsGroup-isNotInteractable')).toBeInstanceOf(Element);
		});

		test('Play mode', () => {
			dispatch(appActions.setEditorMode('play'));
			dispatch(appActions.setEditorMode('play'));

			const { getByText } = render(withStore(
				<Rendering />
			));

			const documentSize = getByText(allWidgets.allWidgets.layout.allGroupWidgets.documentSize.label);

			expect(documentSize.closest('.sb-optionSelect-isNotInteractable')).toBeInstanceOf(Element);
		});

		test('Print mode', () => {
			dispatch(appActions.setEditorMode('print'));

			render(withStore(
				<Rendering />
			));

			// Nothing is disabled for now
		});

		test('Export mode', () => {
			dispatch(appActions.setEditorMode('export'));

			const { getByText } = render(withStore(
				<Rendering />
			));

			const layout = getByText(allWidgets.allWidgets.layout.label);
			const format = getByText(allWidgets.allWidgets.format.label);

			expect(layout.closest('.sb-optionsGroup-isNotInteractable')).toBeInstanceOf(Element);
			expect(format.closest('.sb-optionsGroup-isNotInteractable')).toBeInstanceOf(Element);
		});
	});


	describe('options widgets should be connected to store', () => {
		test.skip('style', async () => {
			dispatch(appActions.setEditorMode('play'));

			const { getByText } = render(withStore(
				<Rendering />
			));

			const styleWidget = getByText(allWidgets.allWidgets.style.label);

			act(() => {
				fireEvent.click(styleWidget);
			});

			const cmOption = getByText('ChordMark');
			const chordProOption = getByText('ChordPro');

			act(() => {
				fireEvent.click(cmOption);
			});
			expect(optionsSelectors.getOptionValue(getState(), 'rendering', 'style')).toBe('chordmark');

			act(() => {
				fireEvent.click(chordProOption);
			});
			expect(optionsSelectors.getOptionValue(getState(), 'rendering', 'style')).toBe('chordpro');

			act(() => {
				fireEvent.click(cmOption);
			});
			expect(optionsSelectors.getOptionValue(getState(), 'rendering', 'style')).toBe('chordmark');
		});
	});


	describe('Options dependencies', () => {
		test.skip('alignBars should be interactable depending on style value', () => {
			dispatch(appActions.setEditorMode('play'));

			const { getByText } = render(withStore(
				<Rendering />
			));

			const styleWidget = getByText(allWidgets.allWidgets.style.label);
			const alignBarWidget = getByText(allWidgets.allWidgets.alignBars.label);

			act(() => {
				fireEvent.click(styleWidget);
			});

			const cmOption = getByText('ChordMark');
			const chordProOption = getByText('ChordPro');

			act(() => {
				fireEvent.click(cmOption);
			});
			expect(alignBarWidget.closest('.sb-optionToggle-isNotInteractable')).toBeNull();

			act(() => {
				fireEvent.click(chordProOption);
			});
			expect(alignBarWidget.closest('.sb-optionToggle-isNotInteractable')).toBeInstanceOf(Element);

			act(() => {
				fireEvent.click(cmOption);
			});
			expect(alignBarWidget.closest('.sb-optionToggle-isNotInteractable')).toBeNull();
		});

		test.skip('Instrument should only be displayed if showChords === true', () => {
			dispatch(appActions.setEditorMode('play'));
			dispatch(optionsActions.setOptionValue('rendering', 'showChords', true));

			const { getByText, queryByText } = render(withStore(
				<Rendering />
			));

			const helpers = getByText(allWidgets.allWidgets.helpers.label);

			act(() => {
				fireEvent.click(helpers);
			});

			const showChords = getByText(allWidgets.allWidgets.helpers.allGroupWidgets.showChords.label);
			getByText(allWidgets.allWidgets.helpers.allGroupWidgets.instrument.label);

			act(() => {
				fireEvent.click(showChords);
			});

			expect(queryByText(allWidgets.allWidgets.helpers.allGroupWidgets.instrument.label)).toBeNull();

			act(() => {
				fireEvent.click(showChords);
			});

			getByText(allWidgets.allWidgets.helpers.allGroupWidgets.instrument.label);
		});

		test('fontSize / printFontSize should be displayed depending on editor mode', () => {
			dispatch(appActions.setEditorMode('edit'));

			const { getByText, queryByText } = render(withStore(
				<Rendering />
			));

			const layout = getByText(allWidgets.allWidgets.format.label);

			act(() => {
				fireEvent.click(layout);
			});

			getByText(allWidgets.allWidgets.format.allGroupWidgets.fontSize.label);
			expect(queryByText(allWidgets.allWidgets.format.allGroupWidgets.printFontSize.label)).toBeNull();

			act(() => {
				dispatch(appActions.setEditorMode('play'));
			});

			getByText(allWidgets.allWidgets.format.allGroupWidgets.fontSize.label);
			expect(queryByText(allWidgets.allWidgets.format.allGroupWidgets.printFontSize.label)).toBeNull();

			act(() => {
				dispatch(appActions.setEditorMode('print'));
			});

			expect(queryByText(allWidgets.allWidgets.format.allGroupWidgets.fontSize.label)).toBeNull();
			getByText(allWidgets.allWidgets.format.allGroupWidgets.printFontSize.label);

			act(() => {
				dispatch(appActions.setEditorMode('export'));
			});

			getByText(allWidgets.allWidgets.format.allGroupWidgets.fontSize.label);
			expect(queryByText(allWidgets.allWidgets.format.allGroupWidgets.printFontSize.label)).toBeNull();
		});

		test('PreferredAccidentals should only be displayed if harmonizeAccidentals === true', () => {
			dispatch(appActions.setEditorMode('play'));
			dispatch(optionsActions.setOptionValue('rendering', 'harmonizeAccidentals', true));

			const { getByText, queryByText } = render(withStore(
				<Rendering />
			));

			const harmonizeAccidentals = getByText(allWidgets.allWidgets.chords.allGroupWidgets.harmonizeAccidentals.label);
			getByText(allWidgets.allWidgets.chords.allGroupWidgets.preferredAccidentals.label);

			act(() => {
				fireEvent.click(harmonizeAccidentals);
			});

			expect(queryByText(allWidgets.allWidgets.chords.allGroupWidgets.preferredAccidentals.label)).toBeNull();

			act(() => {
				fireEvent.click(harmonizeAccidentals);
			});

			getByText(allWidgets.allWidgets.chords.allGroupWidgets.preferredAccidentals.label);
		});
	});
});
