import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';


const Register = () => {
    const { createUser} = useContext (AuthContext)
    const handleSignup =event =>{
        
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email= form.email.value;
        const password = form.password.value;
        console.log(name , email, password)
        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        .catch(()=>{})
    }
    return (
        <div className='my-5 h-[800px] flex justify-center items-center' >
            <div className='lg:w-1/3 border border-black p-5 ' >
                <h2 className='text-4xl font-serif text-center' >Sign Up</h2>
            <form  onSubmit={handleSignup} >
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">What is your name?</span>
                    </label>
                    <input type="text" name='name' placeholder="" className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">What is your email?</span>
                    </label>
                    <input type="text" name='email' placeholder="" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">What is your password?</span>
                    </label>
                    <input type="password" name='password' placeholder="" className="input input-bordered w-full " />
                </div>
                <input className='btn btn-success w-full my-3'  type="submit" value="Sign Up" />
            </form>
            </div>
        </div>
    );
};

export default Register;