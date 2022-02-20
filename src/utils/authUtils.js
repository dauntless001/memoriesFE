import { Navigate } from "react-router-dom";



const withAuth = () => {
    const isLoggedIn = localStorage.getItem('authToken') 
    return isLoggedIn
    //  return isLoggedIn? <Navigate to='/login'/>
    
}

export default withAuth;