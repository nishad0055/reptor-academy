import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {FaFacebook, FaGoogle, FaGithub} from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const [error, setError] = useState('')
    const {userSignIn , googleSignIn , githubSignIn} = useContext(AuthContext)
    const provider = new GoogleAuthProvider()
    const Gitprovider = new GithubAuthProvider();
     
    const handleSubmit = (event) =>{
       
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         console.log(email, password)

         userSignIn(email, password)
         .then(result => {
            const user = result.user;
            console.log(user)
            setError('');
            form.reset()
            navigate(from ,{replace:true})
            
         })
         .catch(error => {
            console.error(error)
            setError(error.message)
         })

    }
    const handleGoogleSignIn = () =>{
        googleSignIn(provider)
        .then(result => {
            const user = result.user;
            console.log(user)
            navigate(from, {replace:true})
        })
        .catch(e => {
            console.error(e)
        })  
    }
    const handleGithub = () =>{
         githubSignIn(Gitprovider)
         .then(()=>{
            navigate(from, {replace:true})

         })
         .catch(error=> console.error(error))
    }
      
    return (
        <div className=' h-[600px] flex justify-center items-center bg-base-100  p-3 md:my-10 my-2' >
           <div className='w-1/3 border border-black p-7 ' >
           <h2 className= 'md:text-4xl font-serif text-center my-3 font-bold text-2xl' >Login</h2>
            <hr className='mt-1' />
            <form onSubmit={handleSubmit} >
                
                <label className='block md:text-xl my-2 font-serif'  htmlFor="">Your Email Address</label> 
                <input className='shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500 focus:ring-1 focus:ring-sky-500' name='email' type="email" placeholder='Enter Your Email'  required/> <br />
                <label  className='block md:text-xl my-2 font-serif' htmlFor="">Your Password</label>
                <input className='shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-2' name='password' type="password" placeholder='Enter your Password' required />
                <button className='bg-blue-600 w-full p-2 my-2 rounded-lg text-white text-xl font-bold' >Log in</button>
                < hr className='mt-4' />
                <p className='text-red-500' >{error}</p>

            </form>
            <p className='text-lg my-2 font-serif ' > Are you new User Please? <Link className='text-red-500' to='/register'>Sign Up</Link> </p>
            <div className='flex items-center justify-evenly'>
                      <button onClick={handleGoogleSignIn} className='btn-social'><FaGoogle size={30} ></FaGoogle></button>
                      <button  onClick={handleGithub} className='btn-social'><FaGithub size={30} ></FaGithub>   </button>
                      <button className='btn-social'> <FaFacebook size={30} ></FaFacebook> </button>
                    </div>
           </div>
            
        </div>
    );
};

export default Login;