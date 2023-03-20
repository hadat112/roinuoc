import ApiClient from '@/configs/ApiClient';

const END_POINT = `${process.env.NEXT_PUBLIC}/api`;

const api = new ApiClient(END_POINT).getInstance();

export default api;
