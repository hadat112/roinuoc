import ApiClient from '@/configs/ApiClient';

const END_POINT = `${process.env.NEXT_PUBLIC_DEVELOPMENT_PUPPET}/auth`;

const api = new ApiClient(END_POINT).getInstance();

export const login = (params: { username: string; password: string }) => {
  return api.post('/login', params);
};

export const register = (params: { username: string; password: string; confirm: string }) => {
  return api.post('/register', params);
};
