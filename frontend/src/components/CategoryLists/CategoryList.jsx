import React from 'react';

const CategoryList = () => {
  return (
    <>
      {['React', 'Web Development', 'Javascript', 'Amazon AWS'].map((item) => (
        <div className="shrink-0	">
          <button className="text-lg text-slate-900 font-medium">{item}</button>
        </div>
      ))}
    </>
  );
};

export default CategoryList;
