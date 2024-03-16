import { useEffect, useState } from 'react';
import useScreenSize from '../../customHooks/useScreenSize';
import CategoryList from './CategoryList';

const CategoryLists = ({ data, isLoading, onTopicClick }) => {
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
      <CategoryList
        onTopicClick={onTopicClick}
        isMobile={isMobile}
        data={data}
        isLoading={isLoading}
      />
    </div>
  );
};

export default CategoryLists;
