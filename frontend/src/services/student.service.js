import httpClient from '../http-common.js'

function getAll(){
    return httpClient.get('/students/all');
}

function add(data){
    return httpClient.post('/students/add', data)
}

function save(data){
    return httpClient.put('/students/edit', data)
}

function remove(id){
    return httpClient.delete(`/students/delete/${id}`)
}

export default {getAll, add, save, remove};