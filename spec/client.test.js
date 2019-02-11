import React from 'react';
import { shallow, mount, render } from 'enzyme';

import ImageView from '../client/components/imageView.jsx';

describe('ImageView', () => {
  it('should actually test something', () => {
    const component = shallow(<ImageView />);
    expect(component).toHaveLength(1);
  });
});
