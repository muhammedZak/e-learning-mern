import React, { useEffect, useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useFetchAllCategoriesQuery } from '../../store/apis/categoryApi';
import { Link } from 'react-router-dom';

const NavbarDropdown = ({ show }) => {
  const [openDropRight, setOpenDropRight] = useState(false);
  const [subcategory, setSubcategory] = useState([]);

  useEffect(() => {
    setOpenDropRight(false);
  }, [show]);

  function findCategory(id) {
    return data.categories.find((category) => category._id === id);
  }

  const onListItemMouseEnter = (id) => {
    const category = findCategory(id);
    setSubcategory(category ? category.subcategories : []);
    setOpenDropRight(true);
  };

  const { data, isLoading } = useFetchAllCategoriesQuery();

  return (
    <div className={` ${show ? 'absolute' : 'hidden'} flex gap-1 z-50`}>
      <div className="w-64 bg-slate-100 mt-6">
        <ul>
          {isLoading
            ? Array(5).map((item) => (
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
              ))
            : data.categories.map((item) => (
                <Link
                  to={`/courses/${item.name}?category=${item._id}`}
                  key={item._id}
                  onMouseEnter={() => onListItemMouseEnter(item._id)}
                  className="pl-2 py-2 pr-1 text-sm hover:bg-slate-200 flex justify-between cursor-pointer"
                >
                  <span href="#">{item.name}</span>
                  <ChevronRightIcon fontSize="small" />
                </Link>
              ))}
        </ul>
      </div>
      {subcategory.length && (
        <div
          className={`w-64  bg-slate-100 mt-6 ${
            openDropRight ? 'block' : 'hidden'
          }`}
        >
          <ul>
            {isLoading
              ? Array(5).map((item) => (
                  <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                ))
              : subcategory &&
                subcategory.map((item) => (
                  <Link
                    to={`/courses/${item.name}?subcategory=${item._id}`}
                    key={item._id}
                    className="pl-2 py-2 pr-1 text-sm hover:bg-slate-200 flex justify-between cursor-pointer"
                  >
                    {item.name}
                  </Link>
                ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavbarDropdown;
