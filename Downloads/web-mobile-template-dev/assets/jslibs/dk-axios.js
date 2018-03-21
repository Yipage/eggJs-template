/**
 * Created by IvanCai on 2017/4/19.
 */
import axios from 'axios'
import utils from './dk-utils'
import {apiDomain} from '../../configs/enviroment'

const dkAxios = axios.create({
  baseURL: apiDomain,
  headers: {
    'X-Access-Token': utils.getCookie('access_token')
  },
  timeout: 20000,
})
dkAxios.interceptors.response.use(function (response) {
  console.log(response, "http response")
  return response;
}, function (error) {
  let {status, data} = error.response
  switch (status) {
    case 401:
      break
    case 409:
    // case 500:
    //   break;
    default:
      return Promise.reject(error.response);
  }
});
export default dkAxios
