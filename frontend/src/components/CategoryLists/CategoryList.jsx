import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { NextBtn, PreviousBtn } from '../Slider/MainSlider/MainSlider';
import { Skeleton } from '@mui/material';

const OnMobile = ({ data, isLoading }) => {
  const settings = {
    className: 'slider variable-width',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    prevArrow: <PreviousBtn className="category" />,
    nextArrow: <NextBtn className="category" />,
  };
  return (
    <div className="category">
      <Slider {...settings} className="px-3 category-slider-mobile">
        {['React', 'Web Development', 'Javascript', 'Amazon AWS'].map(
          (item, index) => (
            <div key={index} className="mx-3 ">
              <button className="text-lg text-slate-900 font-medium">
                {item}
              </button>
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

const CategoryList = ({ isMobile, data, isLoading }) => {
  return (
    <>
      {isMobile ? (
        <OnMobile data={data} isLoading={isLoading} />
      ) : isLoading ? (
        Array(5).map((_, index) => {
          <Skeleton key={index} />;
        })
      ) : (
        ['React', 'Web Development', 'Javascript', 'Amazon AWS'].map(
          (item, index) => (
            <div key={index} className="shrink-0	">
              <button className="text-lg text-slate-900 font-medium">
                {item}
              </button>
            </div>
          )
        )
      )}
    </>
  );
};

export default CategoryList;
