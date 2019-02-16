import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sampleData from '../database/sampleData.js';
import fetch from 'jest-fetch-mock';

import ItemView from '../client/components/itemView.jsx';

describe('Itemview', () => {
  const shallowItemView = shallow(<ItemView />);
  beforeEach(() => {
    fetch.resetMocks();
    fetch.mockResponseOnce(JSON.stringify(sampleData));
  });
  beforeAll(() => {
    return shallowItemView.instance().componentDidMount();
  });
  it('renders without throwing an error', () => {
    expect(shallowItemView).toHaveLength(1);
  });
  it('has a div with an id name of item-view', () => {
    expect(shallowItemView.find('#item-view').length).toEqual(1);
  });
  it('retrives data from the server on mounting', () => {
    expect(shallowItemView.instance().state.currentItem.id).toBe('41385576');
  });
  it('retrieves a default item option, and sets it to state', () => {
    shallowItemView.instance().getDefaultItemOption(sampleData);
    expect(shallowItemView.instance().state.currentOption.optionId).toBe('000001');
  });
  it('handles user selection of item options', () => {
    shallowItemView.instance().handleSelectOption('color', 1);
    expect(shallowItemView.instance().state.currentOption.optionId).toBe('000002');
    shallowItemView.instance().handleSelectOption('size', 'xl');
    expect(shallowItemView.instance().state.selectedSize).toBe('xl');
    shallowItemView.instance().handleSelectOption('qty', 3);
    expect(shallowItemView.instance().state.selectedQty).toBe(3);
  });
  it('deselects a size when a color is selected that is not available in that size', () => {
    shallowItemView.instance().handleSelectOption('color', 1); // select option 000002
    shallowItemView.instance().handleSelectOption('size', 'l'); // option 000002 has 4 lgs in stock 
    shallowItemView.instance().handleSelectOption('color', 0); // option 000001 has 0 lgs in stock
    expect(shallowItemView.instance().state.selectedSize).toBe(null);
  });
});
