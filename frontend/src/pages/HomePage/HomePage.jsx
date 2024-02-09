import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import MainSlider from '../../components/Slider/MainSlider/MainSlider';
import Container from '../../components/Layouts/Container';
import CategorySlider from '../../components/Slider/CategorySlider/CategorySlider';
import CategoryLists from '../../components/CategoryLists/CategoryLists';
import CourseListContainer from '../../components/CourseListContainer/CourseListContainer';
import InstructorSection from '../../components/InstructorSection/InstructorSection';
import Testimonial from '../../components/Testimonial/Testimonial';

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
            <CategoryLists />
            <CourseListContainer />
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <InstructorSection />
        </Container>
      </div>
      <div>
        <Container>
          <Testimonial />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
