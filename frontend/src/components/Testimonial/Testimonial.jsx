import React from 'react';
import TestimonialItem from './TestimonialItem';

const Testimonial = () => {
  return (
    <div>
      <h1 className="pb-3 text-4xl text-center font-medium">Testimonials</h1>
      <div className="flex justify-center">
        <div className="w-28 h-1 mb-5 bg-black"></div>
      </div>
      <div className="py-4 px-20 flex justify-center gap-9">
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
      </div>
    </div>
  );
};

export default Testimonial;
