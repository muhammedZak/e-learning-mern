import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useFetchCoursesQuery } from '../../store/apis/courseApi';
import FilterListOutlinedIcon from '@mui/icons-material/FilterListOutlined';
import Pagination from '@mui/material/Pagination';
import RatingsFilter from '../../components/Filteres/RatingsFilter';
import useScreenSize from '../../customHooks/useScreenSize';
import CourseListCard from '../../components/Card/CourseListCard';
import CourseListSkeleton from './CourseListSkeleton';
import './CourseList.css';
import DurationFilter from '../../components/Filteres/DurationFilter';
import TopicFilter from '../../components/Filteres/TopicFilter';
import PriceFilter from '../../components/Filteres/PriceFilter';

const CourseList = () => {
  const [queryParams, setQueryParams] = useState({});
  const [paramsTitle, setParamsTitle] = useState('');
  const [sortBy, setSortBy] = useState('-ratingsQuantity');
  const [showfilter, setShowFilters] = useState(true);
  const [ratingsValue, setRatingsValue] = useState('');
  const [page, setPage] = useState(1);

  const { width } = useScreenSize();

  useEffect(() => {
    if (width <= 1024) {
      setShowFilters(false);
    }
  }, [width]);

  const { search } = useLocation();
  const { category } = useParams();

  useEffect(() => {
    setRatingsValue('');
    const params = new URLSearchParams(search);
    const newQueryParams = { sort: sortBy };

    for (const [key, value] of params) {
      newQueryParams[key] = value;
    }

    setParamsTitle(category);
    setQueryParams(newQueryParams);
  }, [search, category]);

  const { data: courseData, isLoading: courseLoading } =
    useFetchCoursesQuery(queryParams);

  const handleSelectChange = (e) => {
    setSortBy(e.target.value);
    const sort = { sort: e.target.value };
    setQueryParams({ ...queryParams, ...sort });
  };

  const handleShowFilters = () => {
    setShowFilters(!showfilter);
  };

  const handleRatingsClick = (rating) => {
    setPage(1);
    setRatingsValue(rating);
    const ratingsAverage = { 'ratingsAverage[gte]': rating };
    setQueryParams({ ...queryParams, ...ratingsAverage });
  };

  const handlePaginationChange = (event, value) => {
    setPage(value);
    const pagination = { page: value };
    setQueryParams({ ...queryParams, ...pagination });
  };

  return (
    <div>
      <div className="px-8 py-10">
        <div className="mb-5">
          <h3 className="font-bold text-2xl tracking-wider">
            All {paramsTitle} Courses
          </h3>
        </div>
        <div className="flex justify-between items-end">
          <div className="flex gap-5">
            <div
              onClick={handleShowFilters}
              className="p-3 border border-black flex items-center hover:bg-slate-400 cursor-pointer"
            >
              <FilterListOutlinedIcon /> filter
            </div>
            <div className="w-52 border border-black cursor-pointer">
              <div className="ps-2 py-2 pr-3">
                <label className="block" htmlFor="sortby">
                  Sort by
                </label>
                <select
                  className="outline-none w-full text-lg cursor-pointer"
                  value={sortBy}
                  name="sortby"
                  id="sortby"
                  onChange={handleSelectChange}
                >
                  <option value="-ratingsQuantity">Most Popular</option>
                  <option value="-ratingsAverage">Highest Rated</option>
                  <option value="-createdAt">Newest</option>
                </select>
              </div>
            </div>
          </div>
          <div className="font-semibold text-lg text-slate-500">
            {courseData?.count} results
          </div>
        </div>
        <div className="mt-8 lg:flex gap-6">
          <div className={`${showfilter ? 'block' : 'hidden'} w-1/4`}>
            <hr />
            <RatingsFilter
              onRadioClick={handleRatingsClick}
              ratingsValue={ratingsValue}
            />
            <hr />
            <DurationFilter />
            <hr />
            <TopicFilter />
            <hr />
            <PriceFilter />
            <hr />
          </div>
          <div className="w-3/4">
            {(courseLoading
              ? Array.from(new Array(5))
              : courseData.courses
            ).map((course, index) =>
              course ? (
                <CourseListCard key={course._id} course={course} />
              ) : (
                <CourseListSkeleton key={index} />
              )
            )}
          </div>
        </div>
        <div className="mt-8 flex items-center justify-center">
          <Pagination
            count={courseData?.pages}
            color="primary"
            page={page}
            onChange={handlePaginationChange}
            className="custom-pagination p-3 bg-none"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseList;
