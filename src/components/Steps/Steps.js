import React from "react";
import choose from '../../asset/images/choose.jpg'
import { AiOutlineAudit, AiOutlineCheckSquare, AiOutlineUsergroupAdd } from 'react-icons/ai'

const Steps = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        <img
          src= {choose}
          className="lg:w-1/2 rounded-lg shadow-2xl" alt=""
        />
        <div className="lg:w-1/2">
          <p className="pt-10 text-[#FF630E] font-bold" >Why Choose Us</p>
          <h1 className="text-5xl font-bold font-serif">We Are Providing The Best Quality Online Courses</h1>
           <p p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus saepe tempore ipsam mollitia. Modi, sunt ad. Voluptatum id aspernatur numquam!</p>
           <div className="flex items-center gap-4 mt-10" >

             <div>
               <AiOutlineCheckSquare size={60}  color='#FF630E'/>
              </div> 
                <div>
                <h2 className="text-2xl font-bold font-serif mb-2" >High Qaulity Courses</h2>
                <p  className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa iste doloremque sed aspernatur adipisci expedita fugiat quibusdam ipsum cum.</p>
                </div>
           </div>
           <div className="flex items-center gap-4 mt-10" >

             <div>
              <AiOutlineUsergroupAdd size={60} color='#FF630E' />
              </div> 
                <div>
                <h2 className="text-2xl font-bold font-serif mb-2" >Expert Teachers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa iste doloremque sed aspernatur adipisci expedita fugiat quibusdam ipsum cum.</p>
                </div>
           </div>
           <div className="flex items-center gap-4 mt-10" >

             <div>
               <AiOutlineAudit size={60} color='#FF630E' />
              </div> 
                <div>
                <h2 className="text-2xl font-bold font-serif mb-2" >Life Time Access</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque culpa iste doloremque sed aspernatur adipisci expedita fugiat quibusdam ipsum cum.</p>
                </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
