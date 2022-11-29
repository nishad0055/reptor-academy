import React from 'react';
import { FaBusinessTime, FaCamera, FaCode, FaDatabase, FaGraduationCap, FaLanguage, FaLaptopCode, FaRegFileCode } from 'react-icons/fa'
import OverviewCard from './OverviewCard';

const Overview = () => {

  const categoriesDate = [
    { id:1,
      icon: <FaLaptopCode size={60}/>,
      name:'Web Design'
    },
    {
      id: 2,
      icon: <FaCode size={60}/>,
      name:'Programming'
    },
    {
      id: 3,
      icon: <FaRegFileCode size={60}/>,
      name:'Software Development'
    },
    {
      id:4,
      icon: <FaGraduationCap size={60}/>,
      name:'Professional Skills'
    },
    {
      id:5,
      icon: <FaLanguage size={60}/>,
      name:'Language Course'
    },
    {
      id:6,
      icon: <FaDatabase size={60}/>,
      name:'Database Development'
    },
    {
      id:7,
      icon: <FaBusinessTime size={60}/>,
      name:'Business'
    },
    {
      id: 8,
      icon: <FaCamera size={60}/>,
      name:'Photography'
    }
  ]

  return (
    <div className='my-20 bg-base-200 lg:p-12' >
         <div className='text-center'>
            <p className='text-[#FC7A0E]' >CATEGORIES</p>
            <h2 className='text-5xl font-bold font-serif' >Popular Categories</h2>
         </div>
         <div className='grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto mt-12 '>
           {
            categoriesDate.map(cat=> <OverviewCard 
              key={cat.id}
              cat={cat}
            ></OverviewCard>)
           }
         </div>
    </div>
  );
};

export default Overview;