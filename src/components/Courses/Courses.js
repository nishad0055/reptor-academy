import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Courses = () => {
    return (
        <div className='md:grid grid-cols-12 container mx-auto gap-3 ' >
            <div className='col-span-2'>
               <Sidebar></Sidebar>
            </div>
            <div className='col-span-10'>
               <h2>hello data ami coming</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates iure consequuntur sapiente mollitia vero? Pariatur maiores tenetur temporibus dolorem. Quis excepturi amet sed nam aperiam doloribus ipsam repellendus magnam blanditiis atque! Eligendi beatae obcaecati architecto fugit, tempora eius molestiae non nemo eveniet dolorem. Dolorem, facilis quis fugit commodi dolorum molestias quia id impedit sequi, illum reiciendis libero ipsum aliquam illo eos, aperiam eius debitis dignissimos blanditiis sapiente natus. Impedit dicta culpa magni modi sint. Commodi asperiores voluptates quae qui magni necessitatibus aliquid sunt blanditiis dolore reiciendis non quibusdam eligendi eaque, dicta quisquam? Ipsam consequuntur atque esse exercitationem et enim distinctio.</p>
            </div>
            
        </div>
    );
};

export default Courses;