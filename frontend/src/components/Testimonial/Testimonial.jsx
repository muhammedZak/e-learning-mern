import TestimonialItem from './TestimonialItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextBtn, PreviousBtn } from '../Slider/MainSlider/MainSlider';

const Testimonial = () => {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 920,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PreviousBtn className="testimonial" />,
    nextArrow: <NextBtn className="testimonial" />,
  };

  return (
    <div>
      <h1 className="pb-3 text-4xl text-center font-medium">Testimonials</h1>
      <div className="flex justify-center">
        <div className="w-28 h-1 mb-5 bg-black"></div>
      </div>

      <div className="testimonial">
        <Slider {...settings}>
          <TestimonialItem />
          <TestimonialItem />
          <TestimonialItem />
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;
