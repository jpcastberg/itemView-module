import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sampleData from '../database/sampleData.js';
import fetch from 'jest-fetch-mock';

import ItemView from '../client/components/itemView.jsx';

describe('Itemview', () => {
  const shallowItemView = shallow(<ItemView />);
  // beforeEach(() => {
  //   fetch.resetMocks();
  //   fetch.mockResponseOnce(JSON.stringify(sampleData));
  // });
  it('renders without throwing an error', () => {
    expect(shallowItemView).toHaveLength(1);
  });
  it('has a div with an id name of item-view', () => {
    expect(shallowItemView.find('#item-view').length).toEqual(1);
  });
  it('retrieves a default item option, and sets it to state', () => {
    shallowItemView.instance().getDefaultItemOption(sampleData);
    expect(shallowItemView.instance().state.currentOption.optionId).toBe('000001');
  });
});
