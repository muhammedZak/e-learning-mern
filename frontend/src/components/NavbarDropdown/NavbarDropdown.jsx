import React from 'react';
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

const NavbarDropdown = ({ show }) => {
  return (
    <div className={` ${show ? 'absolute' : 'hidden'} `}>
      <div className="mt-2"></div>
      <div className="w-60 bg-slate-100">
        <ListItems items={items} />
      </div>
    </div>
  );
};

export default NavbarDropdown;
