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
    const {signIn , googleSignIn , githubSignIn} = useContext(AuthContext)
    const provider = new GoogleAuthProvider()
    const Gitprovider = new GithubAuthProvider();
     
    const handleSubmit = (event) =>{
       
         event.preventDefault();
         const form = event.target;
         const email = form.email.value;
         const password = form.password.value;
         console.log(email, password)

         signIn(email, password)
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
        <div className='sign-up-form lg:w-[30%] mx-auto bg-base-100 shadow-lg p-3 md:my-10 my-2' >
            <h2 className= 'md:text-4xl text-center my-3 font-bold text-2xl' >Log in Here</h2>
            <hr className='mt-1' />
            <form onSubmit={handleSubmit} >
                
                <label className='block md:text-xl my-2'  htmlFor="">Your Email Address</label> 
                <input className='shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500 focus:ring-1 focus:ring-sky-500' name='email' type="email" placeholder='Enter Your Email'  required/> <br />
                <label  className='block md:text-xl my-2' htmlFor="">Your Password</label>
                <input className='shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-2' name='password' type="password" placeholder='Enter your Password' required />
                <button className='bg-blue-600 w-full p-2 my-2 rounded-lg text-white text-xl font-bold' >Log in</button>
                < hr className='mt-4' />
                <p className='or'> OR </p> 
                <p className='text-red-500' >{error}</p>

            </form>
            <div className='flex items-center justify-center'>
                      <button onClick={handleGoogleSignIn} className='btn-social'><FaGoogle></FaGoogle></button>
                      <button  onClick={handleGithub} className='btn-social'><FaGithub></FaGithub>   </button>
                      <button className='btn-social'> <FaFacebook></FaFacebook> </button>
                    </div>
                    <p className='text-lg my-2' > Are you new User Please? <Link className='text-red-500' to='/register'>Sign Up</Link> </p>
            
        </div>
    );
};

export default Login;