import React from 'react';
import './ReadyJoining.css'

const ReadyJoining = () => {
    return (
        <div className=''>
            <div className='flex justify-center items-center man text-white' >
                <div className='text-center' >
                <h1 className='text-5xl font-serif font-bold' >Ready to Joining?</h1>
                 <p className='my-5 text-lg' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et provident hic voluptatem obcaecati atque optio!</p>
                 <div className='my-5' >
                    <button className='btn btn-outline btn-warning mr-5' >As a Instructors</button>
                    <button className='btn btn-outline btn-warning' >As a Student</button>
                </div>
                </div>
                
            </div>
        </div>
    );
};

export default ReadyJoining;