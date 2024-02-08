import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainSlider from '../../components/Slider/MainSlider/MainSlider';
import Container from '../../components/Layouts/Container';

const HomePage = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <MainSlider />
      <div>
        <Container>
          <h3 className="py-3 text-4xl text-slate-900  font-extrabold">
            Popular Topics
          </h3>
          <p className="text-xl">
            Choose from over 210,000 online video courses with new additions
            published every month
          </p>
          <div>
            <div>
              <img src="" alt="" />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
