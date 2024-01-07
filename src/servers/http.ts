import axios from 'axios'

const http = axios.create({
  baseURL: 'http://128.199.204.61:8000/',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default http
