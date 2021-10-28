import Axios from 'axios'

const API = Axios.create({
  baseURL: 'https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list'
})

export default API
