import axios from 'axios'

const http = axios.create({
  baseURL: 'https://social-network-react.herokuapp.com/'
})
export default http
