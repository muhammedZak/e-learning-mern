import React from 'react';

const ChildSidenav = ({ open }) => {
  return (
    <>
      <div
        className={`${
          open ? 'w-72' : 'w-0'
        } h-full fixed z-20 top-0 left-0 bg-slate-100  overflow-x-hidden overflow-y-scroll`}
      >
        <div className="py-5">
          <ul>
            <li className="pl-5 py-2 pr-1 hover:bg-slate-200 cursor-pointer">
              <a className="font-medium" href="#">
                Login
              </a>
            </li>
            <li className="pl-5 py-2 pr-1 hover:bg-slate-200 cursor-pointer">
              <a className="font-medium" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <hr />
        <h5 className="pl-5 py-2 text-lg font-medium text-slate-600">
          Categories
        </h5>
        <div className="">
          {/* <ListItems items={items} onClick={handleNestedSidebar} /> */}
        </div>
        <hr />
        <div>
          <ul className="py-5">
            <li className="py-2 pl-5  hover:bg-slate-200">
              <a className="font-medium" href="#">
                Become a instructor
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ChildSidenav;
