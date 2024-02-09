import Rating from '@mui/material/Rating';

const Card = () => {
  return (
    <div className="w-60">
      <div className="w-60 h-56">
        <img
          className="w-full h-full object-cover "
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="py-3">
        <p className="text-base font-medium pt-2   text-slate-900 leading-tight">
          The Complete Python Bootcamp From Zero To Hero
        </p>
        <p className="pt-2 font-medium text-sm ">Jose Portilla</p>
        <div className="flex pt-2 items-center gap-2">
          <span className="font-bold text-slate-900">4.6</span>
          <Rating
            name="read-only"
            value={4.6}
            precision={0.5}
            readOnly
            size="small"
          />
          <span>(342898)</span>
        </div>
        <p className="pt-2 font-bold text-slate-900">&#8377;499 </p>
      </div>
    </div>
  );
};

export default Card;