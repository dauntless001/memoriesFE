import withAuth from '../utils/authUtils'
import { Navigate } from 'react-router-dom'
import Layout from './partials/Layout'
import { useEffect, useState } from 'react'
import axios from 'axios'
import BASE_URL from '../utils/api'

const  Index = () =>{
    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const url = `${BASE_URL}posts/`
    useEffect(() =>{
        axios.get(url)
        .then(res => {
            setPosts(res.data)
            setIsLoading(true)
        })
        .catch(err => console.log(err))
    }, [])

    if(!withAuth()){
        return <Navigate to='/login'/>
    }
    

    return (
        <Layout>
            <div className='container my-5'>
            <div className='row'>
                <div className='col-md-2'>
                    Hey
                </div>
                <div className='col-md-6'>
                    <div className='card bg-white'>
                        <div className='d-flex p-3 justify-content-between'>
                            <div className='d-flex'>
                                <img src='https://guardian.ng/wp-content/uploads/2018/12/Wizkid.jpg'
                                width='40px' height='40px' className='rounded-circle' alt=''/>
                                <div className='pt-2 mx-3'>
                                    <h6>dauntless</h6>
                                </div>
                            </div>
                            <i class="bi bi-three-dots"></i>
                        </div>
                        <div>
                            <img src='https://guardian.ng/wp-content/uploads/2018/12/Wizkid.jpg'
                            className='img-fluid' alt=''/>
                        </div>
                        
                        <div className='p-3'>
                            <div className='d-flex  fs-4 justify-content-between'>
                                <div className='d-flex justify-content-between w-25'>
                                    <i class="bi bi-heart"></i>
                                    <i class="bi bi-chat"></i>
                                    <i class="bi bi-send"></i>
                                </div>
                                <i class="bi bi-bookmark"></i>
                            </div>
                            <p className='fw-bold my-2'>435,789 likes</p>
                            <p className=' my-2'>
                                <b>dauntless</b> Late Friday night @imattdesigns toast 🥂🍻 ... <span className='text-muted'>more</span>
                            </p>
                            <p className='text-muted my-2'>View all 2000 comments</p>
                            <div className='d-flex justify-content-between'>
                                <p className=' my-2'>
                                    <b>imattdesigns</b> 🥂🍻
                                </p>
                                <i class="bi bi-heart small"></i>
                            </div>
                            <p className='text-uppercase' style={{fontSize:'11px'}}>4 hours ago</p>
                        </div>
                        <div className='border-top px-3 py-2'>
                            <div className='d-flex'>
                                <input type='text' className='form-control border-0 shadow-none' placeholder='Add a comment...'
                                />
                                <button className='btn shadow-none text-primary' disabled>Post</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>
                    Wawu
                </div>

            </div>
            </div>
        </Layout>
    )

}

export default Index;