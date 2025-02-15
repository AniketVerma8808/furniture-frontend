import clientAxios from './interceptor'

// Login User API
export const LoginService = (data) => {
  return clientAxios.post('/users/auth/login', data)
}

export const RegisterService = (data) => {
  return clientAxios.post('/users/auth/register', data)
}

// Login User API
export const getBannerService = async() => {
  return await clientAxios.get('/banner')
}

// all Blogs data API
export const GetBlogsService = () => {
  return apiClient.get(`/blogs`);
};

// all Style data API
export const GetBlogByIdService = (blogId) => {
  return apiClient.get(`/blogs/${blogId}`);
};