import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { FaUser } from 'react-icons/fa'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {user, logOut} = useContext(AuthContext)

  const handlelogOut = () =>{
    logOut()
    .then(()=>{

    })
    .catch(e=> console.error(e))
  }

    
    return (
        <div className='bg-black w-full' >
          <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 bg-transparen">
        <div className="relative flex items-center justify-between">
          <Link
            to="/"
    
            className="inline-flex items-center"
          >
            <span className="ml-2 text-xl font-bold tracking-wide uppercase text-white">
              UpGrade
            </span>
          </Link>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <Link
                to='/'
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
               Home
              </Link>
            </li>
            <li>
              <Link
                to= '/courses'
                aria-label="Our product"
                title="Our product"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
               Courses
              </Link>
            </li>
            <li>
              <Link
                to = '/blog'
                aria-label="Product pricing"
                title="Product pricing"
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to ='/about'
                className="font-medium tracking-wide text-white transition-colors duration-200 hover:text-deep-purple-accent-400"
              >
                About us
              </Link>
            </li>
          </ul>
          <ul className="flex items-center hidden space-x-8 lg:flex">

           {
            user?.uid ? 
            <>
            <p>{user?.photoURL ? <Tippy content={user?.displayName} ><img className='h-[40px] rounded-full' src= {user?.photoURL} alt="" /></Tippy> : <FaUser></FaUser> }</p>
            <button className='text-white' onClick={handlelogOut}  >Logout</button>
            </>
            :
            <>
             <li>
              <Link
                to='/login'
                className="inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-orange-500 transition duration-200" 
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to= '/register'
                className="inline-flex items-center justify-center h-9 px-6 font-medium tracking-wide text-white transition duration-200 rounded-2xl bg-yellow-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Sign up
              </Link>
            </li>
            </>
           }
          
            
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-10 left-0 w-full">
                <div className="p-5 bg-base-200  border rounded shadow-sm transition-all">
                  <div className="flex items-center justify-between mb-4">
               
                    <div>
                      <button
  
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="text-2xl w-5 text-black" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          to="/"
                          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/courses"
                          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Courses
                        </Link>
                      </li>
                      <li>
                        <Link
                          to ='/blog'
                          
                          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                         Blog
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about"
                         
                          className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </Link>
                      </li>
                      {
            user?.uid ? 
            <>
            <p>{user?.photoURL ? <img className='h-[40px] rounded-full' src= {user?.photoURL} alt="" /> : <FaUser></FaUser> }</p>
            <button onClick={handlelogOut} >Logout</button>
            </>
            :
            <>
             <li>
              <Link
                to='/login'
                className="inline-flex items-center justify-center h-12 px-4 font-medium tracking-wide text-orange-500 transition duration-200" 
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to= '/register'
                className="inline-flex items-center justify-center h-9 px-6 font-medium tracking-wide text-white transition duration-200 rounded-2xl bg-yellow-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Sign up
              </Link>
            </li>
            </>
           }
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
        </div>
    );
};

export default Navbar;