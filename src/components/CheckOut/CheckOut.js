import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {
    const checkout = useLoaderData()
    const {title,} = checkout
    return (
         <div>
             <h1 className='text-center text-5xl font-bold my-8' >{title}</h1>
         </div>
    );
};

export default CheckOut;