import Rating from '@mui/material/Rating';

const CourseListCard = ({ course }) => {
  return (
    <div className="mb-5 flex gap-6">
      <div className="w-96 h-48">
        <img
          className="object-cover w-full h-full"
          src={course.images}
          alt={course.title}
        />
      </div>
      <div className="w-full">
        <h4 className="text-xl font-bold   text-slate-900 leading-tight opacity-85">
          {course.title}
        </h4>
        <p className="text-sm font-normal   text-slate-900 leading-tight opacity-85">
          {course.description}
        </p>
        <p className="font-light text-black">{course.instructor.name}</p>
        <div className="flex gap-2 items-center">
          <Rating
            name="read-only"
            value={course.ratingsAverage}
            precision={0.5}
            readOnly
            size="small"
          />
          ({course.ratingsQuantity})
        </div>

        <div className="text-slate-500">
          {course.duration} total hours - 155 lectures - {course.difficulty}
        </div>
        <div className="font-bold text-slate-900">&#8377;{course.price}</div>
      </div>
    </div>
  );
};

export default CourseListCard;
