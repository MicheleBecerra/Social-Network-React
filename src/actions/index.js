import http from 'http'

// Se crea una acción para traer a los usuarios.

export const getUsers =() => {
  return ( dispatch, getState ) => {
// Todo se hace un request con axios
console.log("Se llamo a la acción getUsers")

  }
}
