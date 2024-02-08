import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';
import './MainSlider.css';

export const PreviousBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowBackIosIcon />
    </div>
  );
};

export const NextBtn = ({ className, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <ArrowForwardIosIcon />
    </div>
  );
};

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="h-96">
          <img
            className="w-full h-full object-cover"
            src="https://www.shutterstock.com/shutterstock/photos/1399290638/display_1500/stock-vector-student-character-study-at-computer-can-use-for-web-banner-infographics-hero-images-flat-1399290638.jpg"
            alt=""
          />
        </div>
        <div className="h-96">
          <img
            className="w-full h-full object-cover"
            src="https://www.shutterstock.com/shutterstock/photos/1483003643/display_1500/stock-photo-online-education-concept-with-text-place-can-use-for-web-banner-infographics-hero-images-flat-1483003643.jpg"
            alt=""
          />
        </div>
        <div className="h-96">
          <img
            className="w-full h-full object-cover"
            src="https://www.shutterstock.com/shutterstock/photos/2126771606/display_1500/stock-vector-bachelor-of-information-technology-isometric-d-vector-concept-for-banner-website-illustration-2126771606.jpg"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
