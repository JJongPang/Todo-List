import client from './client';

export const categoryWrite = ({ title, color }) =>
  client.post('/api/category', { title, color });
