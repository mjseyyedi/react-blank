import {APIConfig} from 'configs';

import axios from 'axios'

async function request(key, params, data, group = 'main') {
  const APIGroup = APIConfig[group];
  const _req_item = APIGroup.endpoints.filter(item => item.key === key)[0]
  console.log(APIConfig, _req_item)

  const instance = axios.create({
    baseURL:  APIConfig[group].hostname,
    timeout: APIConfig.timeout,
    headers: _req_item.headers || APIConfig.headers,
    withCredentials: true,
    validateStatus: APIConfig.validateStatus
  });
  const response = instance.request({
    ..._req_item,
    params,
    data
  }).then(result => {
    if (result.status === 200){
      return result.data
    }
    console.log('=================== request error : ', result)
    return result.error
  })
    .catch(error => {
      console.log('+++++++++++++++++ request error :', error)
      return error
    })


  return await response

}


export default request
