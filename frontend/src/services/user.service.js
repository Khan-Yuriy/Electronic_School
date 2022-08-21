import httpClient from '../http-common.js'

function getAll(){
    return httpClient.get('/auth/users');
}

export default {getAll};