import { Routes, Route } from "react-router-dom";
import Index from './components/index'
import Login from './components/auth/Login'


const  App = () => {
    
    return (
        <Routes>
            <Route path='/' element={<Index />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    )
}

export default App;