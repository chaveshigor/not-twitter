import axios from 'axios';

const api = axios.create({
    baseURL: 'https://not-twitter-backend.herokuapp.com/'
})

export default api