import fetch from '../utils/fetch'
import {
    // baseApi,
    baseUrl
} from '../utils/geturl'
const token = '0786d3272d174bbec03badef54190e8570264841'

export function getToken(data = {}) {
    return fetch({
        baseURL: baseUrl,
        url: '/v1/authentication/grant',
        method: 'post',
        data: data
    })
}
export function goodlist(data = {}) {
    return fetch({
        baseURL: baseUrl,
        url: '/v1/shop/goodslist?access_token=' + token,
        method: 'get',
        params: data
    })
}