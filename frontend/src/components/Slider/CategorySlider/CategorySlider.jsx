import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import './CategorySlider.css';

const CategorySlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <p>Web Development</p>
        </div>
        <div>
          <p>Web Development</p>
        </div>
        <div>
          <p>Web Development</p>
        </div>
        <div>
          <p>Web Development</p>
        </div>
        <div>
          <p>Web Development</p>
        </div>
        <div>
          <p>Web Development</p>
        </div>
        <div>
          <p>Web Development</p>
        </div>
      </Slider>
    </div>
  );
};

export default CategorySlider;
