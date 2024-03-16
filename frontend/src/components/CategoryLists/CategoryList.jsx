import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { NextBtn, PreviousBtn } from '../Slider/MainSlider/MainSlider';
import { Skeleton } from '@mui/material';

const OnMobile = ({ data, isLoading, onTopicClick }) => {
  const settings = {
    className: 'slider variable-width',
    infinite: false,
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
        {(isLoading ? Array.from(new Array(5)) : data.popularTopics).map(
          (item, index) =>
            item ? (
              <div key={index} className="mx-3 ">
                <button
                  onClick={() => onTopicClick({ topic: item.topic })}
                  className="text-lg text-slate-900 font-medium"
                >
                  {item.topic}
                </button>
              </div>
            ) : (
              <Skeleton
                key={index}
                variant="rectangular"
                width={150}
                height={30}
              />
            )
        )}
      </Slider>
    </div>
  );
};

const CategoryList = ({ isMobile, data, isLoading, onTopicClick }) => {
  return isMobile ? (
    <OnMobile data={data} isLoading={isLoading} onTopicClick={onTopicClick} />
  ) : (
    (isLoading ? Array.from(new Array(5)) : data.popularTopics).map(
      (item, index) =>
        item ? (
          <div key={index} className="shrink-0">
            <button
              onClick={() => onTopicClick({ topic: item.topic })}
              className="text-lg text-slate-900 font-medium"
            >
              {item.topic}
            </button>
          </div>
        ) : (
          <Skeleton key={index} variant="rectangular" width={210} height={30} />
        )
    )
  );
};

export default CategoryList;
