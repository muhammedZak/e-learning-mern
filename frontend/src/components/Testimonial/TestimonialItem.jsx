import React from 'react';

const TestimonialItem = () => {
  return (
    <div className="">
      <div className="flex justify-center -mb-8  ">
        <div className="w-20 p-1 bg-white rounded-full">
          <img
            className="w-full object-cover rounded-full"
            src="https://s.udemycdn.com/home/ub-case-studies/Ian_Stevens.png"
            alt=""
          />
        </div>
      </div>
      <div className="py-7 px-10 flex items-center flex-col bg-slate-100">
        <div className="py-3 text-center ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
            soluta excepturi facere eaque id, numquam, delectus dolores
            asperiores error repellat expedita sunt quos voluptates. Ipsum, vel
            possimus. Obcaecati, corporis! Quae.
          </p>
        </div>
        <div>
          <p>
            John Doe <span>CEO at Google</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
