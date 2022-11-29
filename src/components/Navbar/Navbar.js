import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { FaBars, FaUser } from 'react-icons/fa'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Navbar = () => {
 
  const {user, logOut} = useContext(AuthContext)

  const handlelogOut = () =>{
    logOut()
    .then(()=>{

    })
    .catch(e=> console.error(e))
  }


  return (
    <div>
      <div className="navbar bg-gray-900">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
             <FaBars size={30} color='white' />
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              
              <li><Link to='/' >Home</Link></li>
              <li><Link to='/courses' >Courses</Link></li>
              <li><Link to='/blog' >Blog</Link></li>
              
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl font-serif text-white">Reptro Academy</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 font-serif text-white">
            <li><Link to='/' >Home</Link></li>
            <li><Link to='/courses' >Courses</Link></li>
            <li><Link to='/blog' >Blog</Link></li>
            
            {
            user?.uid ? 
            <>
            <li> <Link>{user?.photoURL ? <Tippy content={user?.displayName} ><img className='w-10 h-10 avatar'  src= {user?.photoURL} alt="" /></Tippy> : <FaUser ></FaUser > }</Link>  
            <button className='text-white' onClick={handlelogOut}  >Logout</button></li>
            </>
            :
            <>
             <li>
              <Link
                to='/login'
               
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to= '/register'
               
              >
                Sign up
              </Link>
            </li>
            </>
           } 
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;



 