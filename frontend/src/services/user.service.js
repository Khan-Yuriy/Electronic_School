import httpClient from '../http-common.js'

function getAll(){
    return httpClient.get('/auth/users');
}

function add(data){
    return httpClient.post('/auth/register', data)
}

export default {getAll, add};