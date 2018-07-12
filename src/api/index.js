// 引用axios
import axios from 'axios'
const pageConfig = require('./config');
var qs = require('qs');
// 自定义判断元素类型JS
function toType(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}
// 参数过滤函数
function filterNull(o) {
    for (var key in o) {
        if (o[key] === null) {
            delete o[key]
        }
        if (toType(o[key]) === 'string') {
            o[key] = o[key].trim()
        } else if (toType(o[key]) === 'object') {
            o[key] = filterNull(o[key])
        } else if (toType(o[key]) === 'array') {
            o[key] = filterNull(o[key])
        }
    }
    return o
}
/*
  接口处理函数
  这个函数每个项目都是不一样的，我现在调整的是适用于
  https://cnodejs.org/api/v1 的接口，如果是其他接口
  需要根据接口的参数进行调整。参考说明文档地址：
  https://cnodejs.org/topic/5378720ed6e2d16149fa16bd
  主要是，不同的接口的成功标识和失败提示是不一致的。
  另外，不同的项目的处理方法也是不一致的，这里出错就是简单的alert
*/

function apiAxios(method, url, params, success, failure) {
    if (params) {
        params = filterNull(params)
    }
    axios({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? qs.stringify(params) : null,
        params: method === 'GET' || method === 'DELETE' ? qs.stringify(params) : null,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        responseType: 'json',
        baseURL: pageConfig.root,


    })
        // axios.post(url,params)
        .then(function (res) {
            if (res.data.status.toUpperCase() === 'OK') {
                if (success) {
                    success(res.data)
                }
            } else {
                if (failure) {
                    failure(res.data)
                } else {
                    console.log('error: ' + url + '--' + JSON.stringify(res.data))
                }
            }
        })
        .catch(function (err) {
            let res2 = { err: err, postUrl: url }
            if (err) {
                if (failure) {
                    let res = { msg: JSON.stringify(res2) };
                    failure(res)
                }
                console.log('api error, HTTP CODE: ' + url)
                console.log(err)
                // alert('网络繁忙，请稍后重试')
            }
        })
}

var apiAjax = {
    get: function (url, params, success, failure) {
        return apiAxios('GET', url, params, success, failure)
    },
    post: function (url, params, success, failure) {
        return apiAxios('POST', url, params, success, failure, )
    },
    put: function (url, params, success, failure) {
        return apiAxios('PUT', url, params, success, failure)
    },
    delete: function (url, params, success, failure) {
        return apiAxios('DELETE', url, params, success, failure)
    }
}

// 返回在vue模板中的调用接口
export default {
    install(Vue) {
        Vue.prototype.$http = apiAjax
        Vue.http = apiAjax
    },
    $http: apiAjax
}

export const $http = apiAjax
