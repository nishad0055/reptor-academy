import React from 'react';
import './CheckOut.css'

const CheckOut = () => {
    return (
         <div>
             <form action="">
             <div className="container">
             <div className="row">
                 <div className="col">
                    <h3 className="title">Billing Information</h3>
                    <div className="input-box">
                        <span>Full Name:</span>
                        <input type="text" placeholder='' />
                    </div>
                    <div className="input-box">
                        <span>Email:</span>
                        <input type="email" placeholder='' />
                    </div>
                    <div className="input-box">
                        <span>City:</span>
                        <input type="text" placeholder='' />
                    </div>
                 </div>
             </div>
         </div>
             </form>
         </div>
    );
};

export default CheckOut;