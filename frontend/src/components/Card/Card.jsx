import Rating from '@mui/material/Rating';

const Card = ({ course }) => {
  return (
    <div className="w-60">
      <div className="w-60 h-56">
        <img
          className="w-full h-full object-cover "
          src={course.images}
          alt={course.title}
        />
      </div>
      <div className="py-3">
        <p className="text-base font-medium pt-2   text-slate-900 leading-tight">
          {course.title}
        </p>
        <p className="pt-2 font-medium text-sm ">{course.instructor.name}</p>
        <div className="flex pt-2 items-center gap-2">
          <span className="font-bold text-slate-900">
            {course.ratingsAverage}
          </span>
          <Rating
            name="read-only"
            value={course.ratingsAverage}
            precision={0.5}
            readOnly
            size="small"
          />
          <span>({course.ratingsQuantity})</span>
        </div>
        <p className="pt-2 font-bold text-slate-900">&#8377;{course.price} </p>
      </div>
    </div>
  );
};

export default Card;
