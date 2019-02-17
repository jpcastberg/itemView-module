import React from 'react';
import { shallow, mount, render } from 'enzyme';
import sampleData from '../database/sampleData.js';
import fetch from 'jest-fetch-mock';

import ItemView from '../client/components/itemView.jsx';
import ImageView from '../client/components/imageView.jsx';
import DetailsView from '../client/components/detailsView.jsx';

describe('ItemView', () => {
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

describe('ImageView', () => {
  const imageList = sampleData.options[0].images;
  const shallowImageView = shallow(<ImageView images={imageList} />);
  beforeAll(() => {
    shallowImageView.instance().componentDidUpdate({});
  })
  it('renders without throwing an error', () => {
    expect(shallowImageView).toHaveLength(1);
  });
  it('renders images based on a list of images passed in thru props', () => {
    expect(shallowImageView.find('.image-picker').children().length)
      .toBe(imageList.length);
  });
  it('automatically finds the default hero image in the props list, and sets it as the hero', () => {
    expect(shallowImageView.instance().state.heroImage.isDefault).toBe(true);
  });
  it('changes the hero image when a new hero image is chosen from the picker', () => {
    const initialHeroUrl = shallowImageView.instance().state.heroImage.url;
    shallowImageView.find('.image-picker').childAt(1).simulate('click');
    expect(shallowImageView.instance().state.heroImage.url).not.toBe(initialHeroUrl);
  });
});

describe('detailsView', () => {
  const shallowDetailsView = shallow(<DetailsView
    sku={sampleData.id}
    brand={sampleData.brand}
    reviews={sampleData.reviews}
    details={sampleData.details}
    color={sampleData.options[0].color}
    availability={sampleData.options[0].availability}
    optionId={sampleData.options[0].optionId}
    name={sampleData.name}
    onlineOnly={sampleData.onlineOnly}
    price={sampleData.price}
    options={sampleData.options}
    currentOption={sampleData.options[0]}
    selectedQty={1}
    selectedSize={null}
  />);
  it('dynamically generates a message stating if the item is in stock', () => {
    let availabilityOfCurrentOption = shallowDetailsView.instance()
      .props.currentOption.availability;
    expect(shallowDetailsView.instance().generateInStockMessage()).toBe('Currently in Stock');
    shallowDetailsView.instance()
      .props.currentOption.availability = { s: 0 };
    expect(shallowDetailsView.instance().generateInStockMessage()).toBe('Currently Out of Stock');
    shallowDetailsView.instance()
      .props.currentOption.availability = availabilityOfCurrentOption;
  });
});
