import React from 'react';
import CategoryList from './CategoryList';

const CategoryLists = () => {
  return (
    <div className="flex gap-7 flex-nowrap overflow-y-scroll no-scrollbar">
      <CategoryList />
    </div>
  );
};

export default CategoryLists;
