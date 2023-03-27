import api from './index';

export const getPost = (params: { type: string; title?: string; id?: string }) => {
  return api.get('/overview/posts', { params });
};

export const searchPost = (params: { text: string }) => {
  return api.get('/overview/search', { params });
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

export const getPlays = () => {
  return api.get('/plays');
};
export const createPlay = (formData: any) => {
  return api.post('/plays', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deletePlay = (params: { id: string }) => {
  return api.delete('/plays', { params });
};
