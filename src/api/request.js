import axios from "axios"


axios.defaults.baseURL = "http://123.207.32.32:8000/api/wh";
axios.defaults.timeout = 30000;
axios.interceptors.response.use(resp=>resp.data)



const get = function (url, params={}) {
  return axios.get(url, {params})
};



export const requests = {
  get
};
