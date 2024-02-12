import { useEffect, useState } from 'react';
import useScreenSize from '../../customHooks/useScreenSize';
import CategoryList from './CategoryList';

const CategoryLists = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { width: screenWidth } = useScreenSize();

  useEffect(() => {
    setIsMobile(screenWidth < 768);
  }, [screenWidth]);
  return (
    <div
      className={
        !isMobile
          ? 'flex gap-7 flex-nowrap overflow-y-scroll no-scrollbar'
          : undefined
      }
    >
      <CategoryList isMobile={isMobile} />
    </div>
  );
};

export default CategoryLists;
