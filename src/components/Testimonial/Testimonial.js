import React from 'react';
import img1 from '../../asset/images/people1.png'
import img2 from '../../asset/images/people2.png'
import img3 from '../../asset/images/people3.png'
import TestimonialCard from './TestimonialCard';

const Testimonial = () => {

    const testimonialData = [
        {
            id:1,
            name: 'John Smith',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, incidunt!',
            image: img1,
            location: 'California'
        },
        {
            id:2,
            name: 'Catherine Maria',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, incidunt!',
            image: img2,
            location: 'Dallas'
        },
        {
            id:3,
            name: 'Catherina',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, incidunt!',
            image: img3,
            location:'California'
        }
    ]

    return (
        <div className='my-16' >
          
          <div className='text-center' >
            <p className='font-bold' >Testimonial</p>
            <h2 className='text-5xl font-serif font-bold mb-16' >What are our student says</h2>
          </div>
          
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 container mx-auto' >
                 {
                    testimonialData.map(testimonial => <TestimonialCard
                    key={testimonial.id}
                    testimonial = {testimonial}
                    ></TestimonialCard>)
                 }
            </div>

        </div>
    );
};

export default Testimonial;