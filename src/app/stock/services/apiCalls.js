import axios from 'axios';
import { delay } from 'redux-saga/effects';
import { v4 } from 'uuid';

const isProd = process.env.NODE_ENV === 'production';

const handleImage = (path, image) =>
  new Promise((resolve) => resolve(localStorage.setItem(path, image)));

const getAll = () => (isProd ? axios.get('/stock') : { data: [] });

function* save(data) {
  if (isProd) return yield axios.post('/stock', data);

  yield delay(1000);

  if (!data) throw new Error('Dados invalidos');

  const id = v4();
  const imagePath = `stock_${id}`;

  yield handleImage(imagePath, data.image);

  return { data: { ...data, id, image: imagePath } };
}

function* update(data) {
  if (isProd) return yield axios.put('/stock', data);

  yield delay(1000);

  if (!data) throw new Error('Dados invalidos');

  const imagePath = `stock_${data.id}`;

  yield handleImage(imagePath, data.image);

  return { data: { ...data, image: imagePath } };
}

export { getAll, save, update };
