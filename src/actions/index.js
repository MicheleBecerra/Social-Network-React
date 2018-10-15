import http from 'http'

const startGetUsers = () => { return {type: 'START_GET_USERS', ready: false} }
const completeGetUsers = (data) => { return { type: 'COMPLETE_GET_USERS', data } }
const errorGetUsers = (error) => { return { type: 'ERROR_GET_USERS', error } }
// Se crea una acción para traer a los usuarios.

export const getUsers = () => {
  return (dispatch, getState) => {
    dispatch(startGetUsers())
    // Todo se hace un request con axios
    http.get('users/')
      .then((response) => {
        if (response.data)
        dispatch(completeGetUsers(response.data))    
      })
      .catch((error) => {
        dispatch(errorGetUsers(error))
      })

      
    // console.log('Se llamo a la acción getUsers')
  }
}
