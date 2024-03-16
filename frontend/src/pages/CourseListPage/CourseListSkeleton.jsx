import Skeleton from '@mui/material/Skeleton';

const CourseListSkeleton = () => {
  return (
    <div className="w-full mb-5 flex gap-5">
      <div className="w-1/3">
        <Skeleton variant="rectangular" width={300} height={180} />
      </div>
      <div className="w-3/4">
        <Skeleton />
        <Skeleton width="60%" />
        <Skeleton />
        <Skeleton width="60%" />
      </div>
    </div>
  );
};

export default CourseListSkeleton;
