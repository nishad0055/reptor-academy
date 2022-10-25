import React, { useContext } from 'react';
import './Register.css'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser} = useContext(AuthContext)
    const handleSubmit =(event) => {
       event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(name, email, password)
       createUser(email, password)
       .then(result => {
        const user = result.user;
        console.log(user)
        form.reset()
       })
       .catch(error => console.log(error))
    }
    return (
        <div className='sign-up-form lg:w-[30%] mx-auto bg-base-100 shadow-lg p-3 md:my-10 my-2' >
            <h2 className= 'md:text-4xl text-center my-3 font-bold text-2xl' >Sign Up Here</h2>
            <hr className='mt-1' />
            <form onSubmit={handleSubmit} >
                <label className='block md:text-xl my-2' htmlFor="">Your Name</label>
                <input className='shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500 focus:ring-1 focus:ring-sky-500' name='name' type="text" placeholder='Enter Your Name' /> 
                <label className='block md:text-xl my-2'  htmlFor="">Your Email Address</label> 
                <input className='shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500 focus:ring-1 focus:ring-sky-500' name='email' type="email" placeholder='Enter Your Email'  required/> <br />
                <label  className='block md:text-2xl my-2' htmlFor="">Your Password</label>
                <input className='shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-sky-500 focus:ring-1 focus:ring-sky-500 mb-2' name='password' type="password" placeholder='Enter your Password' required />
                <button className='bg-blue-600 w-full p-2 my-2 rounded-lg text-white text-xl font-bold' >Sign Up</button>
                < hr className='mt-4' />
                <p className='or'> OR </p>
                    <div className='flex items-center justify-center'>
                      <button className='btn-social'><FaGoogle></FaGoogle></button>
                      <button className='btn-social'><FaGithub></FaGithub>   </button>
                      <button className='btn-social'> <FaFacebook></FaFacebook> </button>
                    </div>
                    <p className='text-lg my-2' >Already have an Account ? <Link className='text-red-500' to='/login'>Sign in</Link> </p>
            </form>
            
        </div>
    );
};

export default Register;