import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Skeleton } from '@mui/material';
import { NextBtn, PreviousBtn } from '../Slider/MainSlider/MainSlider';
import Card from '../Card/Card';

const CourseListContainer = ({ courseData, courseLoading }) => {
  const settings = {
    // className: 'slider variable-width',
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    // variableWidth: true,
    prevArrow: <PreviousBtn className="courseList" />,
    nextArrow: <NextBtn className="courseList" />,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="courseList  pt-5">
      <Slider {...settings} className="px-6">
        {(courseLoading ? Array.from(new Array(5)) : courseData.courses).map(
          (course, index) =>
            course ? (
              <div key={course._id}>
                <Card course={course} />
              </div>
            ) : (
              <>
                <div key={index}>
                  <Skeleton variant="rectangular" width={210} height={118} />
                </div>
                <div>
                  <Skeleton />
                </div>
                <div>
                  <Skeleton width="60%" />
                </div>
              </>
            )
        )}
      </Slider>
    </div>
  );
};

export default CourseListContainer;
