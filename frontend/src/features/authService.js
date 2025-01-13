import axios from 'axios'
const apiLink = ''
const register =async (userData)=>{
    const response = await axios.post(apiLink,userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(userData))
    }
    return response.data
}
const authService = {register}
export default authService