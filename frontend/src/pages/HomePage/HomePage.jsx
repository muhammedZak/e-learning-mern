import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainSlider from '../../components/Slider/MainSlider/MainSlider';
import Container from '../../components/Layouts/Container';
import CategorySlider from '../../components/Slider/CategorySlider/CategorySlider';

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
          {/* <CategorySlider /> */}
          <div className="py-5">
            <div className="flex gap-7 flex-nowrap overflow-y-scroll no-scrollbar">
              <div className="shrink-0	">
                <button className="text-lg text-slate-900 font-medium">
                  React
                </button>
              </div>
              <div className="shrink-0	">
                <button className="text-lg text-slate-900 font-medium">
                  Javascript
                </button>
              </div>
              <div className="shrink-0	">
                <button className="text-lg text-slate-900 font-medium">
                  Python
                </button>
              </div>
              <div className="shrink-0	">
                <button className="text-lg text-slate-900 font-medium">
                  Web Development
                </button>
              </div>
              <div className="shrink-0	">
                <button className="text-lg text-slate-900 font-medium">
                  Data Science
                </button>
              </div>
              <div className="shrink-0	">
                <button className="text-lg text-slate-900 font-medium">
                  Excel
                </button>
              </div>
              <div className="shrink-0	">
                <button className="text-lg text-slate-900 font-medium">
                  Amazon AWS
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default HomePage;
