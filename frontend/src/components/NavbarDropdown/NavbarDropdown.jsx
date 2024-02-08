import React, { useEffect, useState } from 'react';
import ListItems from '../ListItems/ListItems';

const items = [
  { id: 0, icon: true, text: 'Development' },
  { id: 1, icon: true, text: 'Bussiness' },
  { id: 2, icon: true, text: 'Finance & Accounting' },
  { id: 3, icon: true, text: 'IT & Software' },
  { id: 4, icon: true, text: 'Office Productivity' },
  { id: 5, icon: true, text: 'Design' },
  { id: 6, icon: true, text: 'Marketing' },
  { id: 7, icon: true, text: 'Lifestyle' },
];

const content = [
  { id: 0, text: 'Web Development' },
  { id: 1, text: 'Mobile Development' },
  { id: 2, text: 'Data Science' },
  { id: 3, text: 'Database Design & Development' },
  { id: 4, text: 'Game Development' },
  { id: 5, text: 'Software Testing' },
  { id: 6, text: 'Programming Languages' },
  { id: 7, text: 'No-Code Development' },
];

const NavbarDropdown = ({ show }) => {
  const [openDropRight, setOpenDropRight] = useState(false);

  useEffect(() => {
    setOpenDropRight(false);
  }, [show]);

  const onListItemMouseEnter = () => {
    setOpenDropRight(true);
  };

  return (
    <div className={` ${show ? 'absolute' : 'hidden'} flex gap-1 z-50`}>
      <div className="w-72 bg-slate-100 mt-8">
        <ListItems items={items} onMouseEnter={onListItemMouseEnter} />
      </div>
      <div
        className={`w-72  bg-slate-100 mt-8 ${
          openDropRight ? 'block' : 'hidden'
        }`}
      >
        <ListItems items={content} isLink={1} />
      </div>
    </div>
  );
};

export default NavbarDropdown;
