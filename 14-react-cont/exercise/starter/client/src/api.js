import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:4000'
})

function searchGifs(searchText){
    return api.get(`/${searchText}`).then(result => {
        return result.data
    })
}

function getSearchResults(){
    return api.get('/').then(result => {
        return result.data
    })
}

function createSearch(searchText){
    return api.post('/', {searchText: searchText})
}

//exporting api is optional we would usually just export the functions
export {api, searchGifs, getSearchResults, createSearch}