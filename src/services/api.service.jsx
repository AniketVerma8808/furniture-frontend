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
  return clientAxios.get(`/blogs`);
};

