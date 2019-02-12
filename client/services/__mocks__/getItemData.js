const fakeData = {
  _id: '5c5cf2e6a0e1d903bd4c4d05',
  id: 714917,
  name: 'Patagonia Exclusive Zipper Tank Top',
  type: 'Top',
  price: 73,
  onlineOnly: false,
  options: [
    {
      _id: '5c5cf2e6a0e1d903bd4c4d0c',
      isDefault: true,
      color: {
        colorName: 'Blue',
        hexValue: '#105EB6',
      },
      images: [
        {
          _id: '5c5cf2e6a0e1d903bd4c4d10',
          url: 'https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/000002a.jpg',
          isDefault: true,
        },
        {
          _id: '5c5cf2e6a0e1d903bd4c4d0f',
          url: 'https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/000002b.jpg',
          isDefault: false,
        },
        {
          _id: '5c5cf2e6a0e1d903bd4c4d0e',
          url: 'https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/000002c.jpg',
          isDefault: false,
        },
        {
          _id: '5c5cf2e6a0e1d903bd4c4d0d',
          url: 'https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/000002d.jpg',
          isDefault: false,
        },
      ],
    },
    {
      _id: '5c5cf2e6a0e1d903bd4c4d09',
      isDefault: false,
      color: {
        colorName: 'Blue',
        hexValue: '#105EB6',
      },
      images: [
        {
          _id: '5c5cf2e6a0e1d903bd4c4d0b',
          url: 'https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/000002a.jpg',
          isDefault: true,
        },
        {
          _id: '5c5cf2e6a0e1d903bd4c4d0a',
          url: 'https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/000002b.jpg',
          isDefault: false,
        },
      ],
    },
    {
      _id: '5c5cf2e6a0e1d903bd4c4d06',
      isDefault: false,
      color: {
        colorName: 'Green',
        hexValue: '#429C0C',
      },
      images: [
        {
          _id: '5c5cf2e6a0e1d903bd4c4d08',
          url: 'https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/000002a.jpg',
          isDefault: true,
        },
        {
          _id: '5c5cf2e6a0e1d903bd4c4d07',
          url: 'https://s3-us-west-1.amazonaws.com/jjam-hrsf-111/images/000002b.jpg',
          isDefault: false,
        },
      ],
    },
  ],
  __v: 0,
};


export default async () => {
  await new Promise((resolve) => {
    resolve(fakeData);
  });
};
