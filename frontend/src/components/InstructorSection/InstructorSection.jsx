const InstructorSection = () => {
  return (
    <div className="md:flex md:gap-3">
      <div className="md:w-1/2">
        <img
          src="https://s.udemycdn.com/home/non-student-cta/instructor-mobile-v3.jpg"
          alt=""
        />
      </div>
      <div className="md:w-1/2 py-3 flex items-center justify-center flex-col flex-nowrap">
        <h1 className="py-1 text-4xl text-center font-medium shrink-0">
          Become an instructor
        </h1>
        <p className="py-1 text-lg text-center font-medium tracking-wide">
          Instructors from around the world teach millions of learners on Udemy.
          We provide the tools and skills to teach what you love.
        </p>
        <button className="mt-5 py-3 px-4 text-lg tracking-wide w-full md:w-auto bg-slate-950 bg-opacity-100 text-white hover:bg-opacity-75">
          Start teaching today
        </button>
      </div>
    </div>
  );
};

export default InstructorSection;
