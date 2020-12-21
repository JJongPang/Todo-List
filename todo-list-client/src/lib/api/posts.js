import client from './client';
import qs from 'qs';

export const writePost = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

export const readPost = (id) => client.get(`/api/posts/${id}`);

export const listPosts = ({ username, tag }) => {
  const queryString = qs.stringify({
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};
