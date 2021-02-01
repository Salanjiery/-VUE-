import axios from 'axios';

// import store from './store';

const instance = axios.create({
  baseURL: 'http://192.168.3.4:5008/',
});

// 请求拦截

instance.interceptors.request.use((config) => ({
  ...config,
  params: {
    ...config.params,
    // appkey: store.state.user.appkey,
  },
}), (error) => Promise.reject(error));

// 响应拦截

instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    return Promise.reject(response.data.msg);
  }
  return response.data.data;
}, (error) => Promise.reject(error));

export default instance;
