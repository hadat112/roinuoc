import api from './index';

export const getPost = () => {
  return api.get('/overview/posts');
};

export const getPostDetail = (params) => {
  return api.get('/post-detail', { params });
};

export const createPost = (params: { title: string; content: string }) => {
  return api.post('/overview/posts', params);
};

export const createComment = (params: { content: string; post_id: string }) => {
  return api.post('/overview/comment', params);
};

export const deletePost = (params: { id: string }) => {
  return api.delete('/overview/posts', { params });
};
