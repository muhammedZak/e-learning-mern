import React, { useEffect, useState } from 'react';
import MainSlider from '../../components/Slider/MainSlider/MainSlider';
import Container from '../../components/Layouts/Container';
import CategoryLists from '../../components/CategoryLists/CategoryLists';
import CourseListContainer from '../../components/CourseListContainer/CourseListContainer';
import InstructorSection from '../../components/InstructorSection/InstructorSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import {
  usePopularTopicsQuery,
  useFetchCoursesQuery,
} from '../../store/apis/courseApi';

const HomePage = () => {
  const [topic, setTopic] = useState({});
  const { data, isLoading } = usePopularTopicsQuery();
  const { data: courseData, isLoading: courseLoading } =
    useFetchCoursesQuery(topic);

  useEffect(() => {
    if (data) {
      const { popularTopics } = data;
      setTopic({ topic: popularTopics[0].topic });
    }
  }, [data]);

  const onTopicClick = (query) => {
    setTopic(query);
  };

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
            <CategoryLists
              data={data}
              isLoading={isLoading}
              onTopicClick={onTopicClick}
            />
            {data && (
              <CourseListContainer
                courseData={courseData}
                courseLoading={courseLoading}
              />
            )}
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
