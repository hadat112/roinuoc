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
  return api.post('/overview/posts/create', params);
};

export const createComment = (params: { content: string; post_id: string }) => {
  return api.post('/overview/comment', params);
};

export const createQuestion = (params: {
  category: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}) => {
  return api.post('/question/create', params);
};

export const updatePost = (params: any) => {
  return api.post('/overview/posts/update', params);
};

export const deletePost = (params: { id: string }) => {
  return api.delete('/overview/posts/delete', { params });
};

export const getPlays = () => {
  return api.get('/plays');
};
export const createPlay = (formData: any) => {
  return api.post('/plays/create', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export const deletePlay = (params: { id: string }) => {
  return api.delete('/plays', { params });
};

export const deleteQuestion = (params: { id: string }) => {
  return api.delete('/question/delete', { params });
};

export const updateQuestion = (params: any) => {
  return api.post('/question/update', params);
};

export const getQuestions = () => {
  return api.get('/questions');
};

export const getUserInfo = () => {
  return api.get('/user-info');
};
