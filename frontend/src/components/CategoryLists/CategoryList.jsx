import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { NextBtn, PreviousBtn } from '../Slider/MainSlider/MainSlider';

const OnMobile = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn className="category" />,
    nextArrow: <NextBtn className="category" />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="category">
      <Slider {...settings} className="px-3">
        {['React', 'Web Development', 'Javascript', 'Amazon AWS'].map(
          (item, index) => (
            <div key={index} className="">
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

const CategoryList = ({ isMobile }) => {
  return (
    <>
      {isMobile ? (
        <OnMobile />
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
