import BASE_URL from "../../utils/api"
import { useState } from 'react'
import axios from "axios"
import { Navigate } from "react-router-dom"
import withAuth from "../../utils/authUtils"


const Login = () => {
    
    const [values, setValues] = useState({username: '', password:''})
    const [redirect, setRedirect] = useState(false)
    const handleChange = e => {
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }
    const  handleSubmit = e => {
        e.preventDefault();
        const url = `${BASE_URL}accounts/login/`
        axios.post(url,{username:values.username, password:values.password})
        .then(res => {
            localStorage.setItem('authToken',`${res.data.token}`)
            setRedirect(true)
        })
        .catch(err => console.log(err))
    }
    if(withAuth()){
        return <Navigate to='/'/>
    }
    if(redirect){
        return () =><Navigate to='/'/>
    }
    return (
        <div className="" style={{backgroundColor : '#eee', height:'100vh'}}>
            <div className="col-md-8 col-sm-12 p-5 mx-auto">
                <div className="row mx-auto">
                    <div className="col-sm-12 col-md-6 mx-auto">
                        hey
                    </div>
                    <div className="col-sm-12 col-md-6 card p-3 text-center mx-auto">
                        <h1>Memories</h1>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="m-2">
                                    <input type='text' placeholder='Username Here' onChange={handleChange}
                                    className='form-control' name='username' value={values.username}/>
                                </div>
                                <div className="m-2">
                                    <input type='password' placeholder='Password Here' className='form-control'
                                    name='password' value={values.password} onChange={handleChange}/>
                                </div>
                                <div className="m-2">
                                    <input type='submit' value='Log In' className="btn btn-primary w-100"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Login