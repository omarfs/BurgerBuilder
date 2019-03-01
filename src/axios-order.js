import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burgerbuilder-815c2.firebaseio.com/'
})

export default instance