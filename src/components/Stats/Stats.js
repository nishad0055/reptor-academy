import React from 'react';

const Stats = () => {
    return (
        <div>
             <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div class="md:grid grid-cols-3 row-gap-8">
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">15K</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
          Student Joined
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">10K</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Active Student
          </p>
        </div>
        <div class="text-center md:border-r">
          <h6 class="text-4xl font-bold lg:text-5xl xl:text-6xl">100+</h6>
          <p class="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Experienced Mentor
          </p>
        </div>
        
      </div>
    </div>
        </div>
    );
};

export default Stats;