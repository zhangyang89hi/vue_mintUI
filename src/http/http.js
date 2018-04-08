import axios from 'axios'

// axios.defaults.baseURL = '';
// axios.defaults.timeout = 5000;
// axios.defaults.headers.

axios.interceptors.request.use(function (config) {
        console.log('axios interceptors request');
        return config;
    },function (error) {
        return Promise.reject(error);
    });

axios.interceptors.response.use(function (response) {
        console.log('axios interceptors response');
        return response;
    },function (error) {
        if(error.response){

        }
        return Promise.reject(error);
    });

function http_get(http_url){
    axios({
        url: http_url,
        method: 'get',
        headers:{}
    }).then(function (response) {  
        if(response.data){}
        else{}
    });
}

function http_post(http_url) {  
    axios({
        url: http_url,
        method: 'post',
        headers:{},
        data: {}
    }).then(function (response) {  
        if(response.data){}
        else{}
    })
}

export default axios;