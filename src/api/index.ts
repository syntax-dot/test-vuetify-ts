import axios from 'axios'

const baseURL = 'https://...'

export const backend = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=utf8'
  }
})

// if the request needs a token and we are lazy, use this to automatically insert the token

// backend.interceptors.request.use(function (request) {
//   const { token } = useStore()

//   if (token)
//     request.headers.Authorization = `Token ${
//       token ?? localStorage.getItem('token')
//     }`

//   return request
// })

// export function getUsers() {
//   backend.get(...)
// }
