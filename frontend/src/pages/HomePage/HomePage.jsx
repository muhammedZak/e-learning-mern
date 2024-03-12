import React from 'react';
import MainSlider from '../../components/Slider/MainSlider/MainSlider';
import Container from '../../components/Layouts/Container';
import CategoryLists from '../../components/CategoryLists/CategoryLists';
import CourseListContainer from '../../components/CourseListContainer/CourseListContainer';
import InstructorSection from '../../components/InstructorSection/InstructorSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import { usePopularTopicsQuery } from '../../store/apis/courseApi';

const HomePage = () => {
  const { data, isLoading } = usePopularTopicsQuery();

  return (
    <>
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

          <div className="py-5">
            <CategoryLists data={data} isLoading={isLoading} />
            <CourseListContainer />
          </div>
        </Container>
      </div>
      <div>
        <Container>
          <InstructorSection />
        </Container>
      </div>
      <div className="pt-4 pb-10">
        <Container>
          <Testimonial />
        </Container>
      </div>
    </>
  );
};

export default HomePage;
