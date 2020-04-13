import * as Yup from 'yup';

export default class StockSchema {
  constructor(id, image, name, price) {
    return {
      id: {
        name: 'id',
        value: id || '',
        type: 'hidden',
      },
      image: {
        label: 'Image',
        name: 'image',
        placeholder: 'Pick one image',
        fullWidth: true,
        endAdornment: false,
        disabled: false,
        value: image || '',
        type: 'avatar',
      },
      name: {
        label: 'Name',
        name: 'name',
        placeholder: '',
        fullWidth: true,
        endAdornment: false,
        disabled: false,
        value: name || '',
        type: 'text',
        schema: Yup.string().required('Name is required.'),
      },
      price: {
        label: 'Price',
        name: 'price',
        placeholder: '',
        fullWidth: true,
        endAdornment: false,
        disabled: false,
        value: price || 0,
        type: 'number',
        schema: Yup.number().required('Price is required.'),
      },
    };
  }
}
