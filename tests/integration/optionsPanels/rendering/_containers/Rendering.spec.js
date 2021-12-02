import _ from 'lodash';

import React from 'react';
import {
	withStore,
	getState,
	resetStore,
	dispatch,
} from '../../../helpers/withStore';

import { render, cleanup, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Rendering from '../../../../../src/optionsPanels/rendering/_containers/Rendering';
import allWidgets from '../../../../../src/optionsPanels/rendering/allWidgets';

import * as optionsSelectors from '../../../../../src/db/options/selectors';
import * as optionsActions from '../../../../../src/db/options/actions';
import * as appActions from '../../../../../src/ui/layout/app/_state/actions';
import * as fmActions from '../../../../../src/fileManager/_state/actions';

afterEach(cleanup);

describe('"Rendering" option panel', () => {
	beforeEach(() => {
		resetStore();
	});

	describe('Option Groups', () => {
		test('Render all optionGroups', () => {
			const { getByText } = render(withStore(<Rendering />));

			const allLabels = _.chain(allWidgets.allWidgets)
				.pickBy((widget) => widget.type === 'optionsGroup')
				.map((widget) => widget.label)
				.value();

			getByText(allLabels[0]);
			getByText(allLabels[1]);
			getByText(allLabels[2]);
		});

		test('Layout group: a click on the group title should toggle widgets visibility', () => {
			dispatch(appActions.setEditorMode('play'));

			const { getByText, queryByText } = render(withStore(<Rendering />));

			const groupLabel = allWidgets.allWidgets.layout.label;
			const group = getByText(groupLabel);

			queryByText(
				allWidgets.allWidgets.layout.allGroupWidgets.columnsCount.label
			);
			queryByText(
				allWidgets.allWidgets.layout.allGroupWidgets
					.columnBreakOnParagraph.label
			);

			act(() => {
				fireEvent.click(group);
			});

			expect(
				queryByText(
					allWidgets.allWidgets.layout.allGroupWidgets.columnsCount
						.label
				)
			).toBeNull();
			expect(
				queryByText(
					allWidgets.allWidgets.layout.allGroupWidgets
						.columnBreakOnParagraph.label
				)
			).toBeNull();

			act(() => {
				fireEvent.click(group);
			});

			queryByText(
				allWidgets.allWidgets.layout.allGroupWidgets.columnsCount.label
			);
			queryByText(
				allWidgets.allWidgets.layout.allGroupWidgets
					.columnBreakOnParagraph.label
			);
		});
	});

	describe('Some widgets should be disabled depending on editor Mode', () => {
		test.skip('All widgets should be disabled if no file is selected', () => {});

		test('Edit mode', () => {
			const niClassName = '.sb-optionSelect-isNotInteractable';
			dispatch(fmActions.selectFile('myId'));
			dispatch(appActions.setEditorMode('edit'));

			const { getByText } = render(withStore(<Rendering />));

			const chartType = getByText(
				allWidgets.allWidgets.preferences.allGroupWidgets.chartType
					.label
			);
			const transposeValue = getByText(
				allWidgets.allWidgets.key.allGroupWidgets.transposeValue.label
			);

			expect(transposeValue.closest(niClassName)).toBeInstanceOf(Element);
			expect(chartType.closest(niClassName)).toBeInstanceOf(Element);
		});

		test('Play mode', () => {
			dispatch(fmActions.selectFile('myId'));
			dispatch(appActions.setEditorMode('play'));

			const { getByText } = render(withStore(<Rendering />));

			const columnBreakOnParagraph = getByText(
				allWidgets.allWidgets.layout.allGroupWidgets
					.columnBreakOnParagraph.label
			);

			expect(
				columnBreakOnParagraph.closest(
					'.sb-optionSelect-isNotInteractable'
				)
			).toBeInstanceOf(Element);
		});

		test('Print mode', () => {
			dispatch(fmActions.selectFile('myId'));
			dispatch(appActions.setEditorMode('print'));

			render(withStore(<Rendering />));

			// Nothing is disabled for now
		});

		test.skip('Export mode', () => {
			dispatch(fmActions.selectFile('myId'));
			dispatch(appActions.setEditorMode('export'));

			const { getByText } = render(withStore(<Rendering />));

			const documentSize = getByText(
				allWidgets.allWidgets.layout.allGroupWidgets.documentSize.label
			);
			const chordsColor = getByText(
				allWidgets.allWidgets.format.allGroupWidgets.chordsColor.label
			);

			console.log(documentSize);
			expect(
				chordsColor.closest('.sb-optionsGroup-isNotInteractable')
			).toBeInstanceOf(Element);
			expect(
				documentSize.closest('.sb-optionsGroup-isNotInteractable')
			).toBeInstanceOf(Element);
		});
	});

	describe('options widgets should be connected to store', () => {
		test.skip('style', async () => {
			dispatch(appActions.setEditorMode('play'));

			const { getByText } = render(withStore(<Rendering />));

			const styleWidget = getByText(allWidgets.allWidgets.style.label);

			act(() => {
				fireEvent.click(styleWidget);
			});

			const cmOption = getByText('ChordMark');
			const chordProOption = getByText('ChordPro');

			act(() => {
				fireEvent.click(cmOption);
			});
			expect(
				optionsSelectors.getOptionValue(
					getState(),
					'songFormatting',
					'style'
				)
			).toBe('chordmark');

			act(() => {
				fireEvent.click(chordProOption);
			});
			expect(
				optionsSelectors.getOptionValue(
					getState(),
					'songFormatting',
					'style'
				)
			).toBe('chordpro');

			act(() => {
				fireEvent.click(cmOption);
			});
			expect(
				optionsSelectors.getOptionValue(
					getState(),
					'songFormatting',
					'style'
				)
			).toBe('chordmark');
		});
	});

	describe('Options dependencies', () => {
		test('PreferredAccidentals should only be displayed if harmonizeAccidentals === true', () => {
			dispatch(fmActions.selectFile('myId'));
			dispatch(appActions.setEditorMode('play'));
			dispatch(
				optionsActions.setOptionValue(
					'songPreferences',
					'harmonizeAccidentals',
					true
				)
			);

			const { getByText, queryByText } = render(withStore(<Rendering />));

			const harmonizeAccidentals = getByText(
				allWidgets.allWidgets.key.allGroupWidgets.harmonizeAccidentals
					.label
			);
			expect(
				getByText(
					allWidgets.allWidgets.key.allGroupWidgets
						.preferredAccidentals.label
				)
			).toBeInTheDocument();

			act(() => {
				fireEvent.click(harmonizeAccidentals);
			});

			expect(
				queryByText(
					allWidgets.allWidgets.key.allGroupWidgets
						.preferredAccidentals.label
				)
			).toBeNull();

			act(() => {
				fireEvent.click(harmonizeAccidentals);
			});

			expect(
				getByText(
					allWidgets.allWidgets.key.allGroupWidgets
						.preferredAccidentals.label
				)
			).toBeInTheDocument();
		});
	});
});
