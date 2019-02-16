import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ItemView from '../client/components/itemView.jsx';

describe('Itemview', () => {
  it('render without throwing an error', () => {
    const component = shallow(<ItemView />);
    expect(component).toHaveLength(1);
  });
});
