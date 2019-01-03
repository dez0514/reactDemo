import axios from 'axios'
import Qs from 'qs'
const baseApi = window.production ? '//m.cheyuu.com' : '//test.m.cheyuu.com';
var filter = {
  post: 'data',
  get: 'params'
};
const request = (url, options, baseUrl) => {
  return new Promise((resolve, reject) => {
    var innerUrl = '';
    var api = url
    if (baseUrl !== undefined) {
      innerUrl = baseUrl
    } else {
      innerUrl = baseApi
    }
    // Vue.$vux.loading.show({
    //   text: 'Loading'
    // })
    axios({
      url: innerUrl + api,
      method: options.method,
      [filter[options.method]]: options.data,
      header: {
        'Content-Type': 'application/json; charset=UTF-8'
      }
    }).then(({
        data
    }) => {
      console.log('data:', data) // code 要根据返回的data改
    //   Vue.$vux.loading.hide()
      resolve(data)
    }).catch(err => reject(err))
  })
}

const get = (url, options = {}, baseUrl) => {
  return request(url, {
    method: 'get',
    data: options
  }, baseUrl)
}

const post = (url, options, baseUrl) => {
  return request(url, {
    method: 'post',
    data: Qs.stringify(options)
  }, baseUrl)
}

export default {
  get,
  post
}
