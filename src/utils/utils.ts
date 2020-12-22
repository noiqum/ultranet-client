

export const setToken =(token:string)=>{
  return  localStorage.setItem('token',token)
}
export const getToken=()=>{
    return localStorage.getItem('token')
}

export const checkToken=(stateToken:string | null)=>{
    if(stateToken === null) {
      if(getToken() === null){
        return false
      }
      return true
    }
    return true
}