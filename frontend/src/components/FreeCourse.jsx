import React from "react";
import CourseCard from "./CourseCard.jsx";
import coursesData from "../data/coursesData.js";

const FreeCourses = () => {
  const freeCourses = coursesData.filter(
    (course) => course.price === 0 || course.category === "Free"
  );

  return (
    <div className="max-w-screen-2xl mx-auto md:px-20 px-7 py-10 pt-24">

      <h1 className="font-semibold text-2xl pb-2">Free Courses</h1>
      <p className="text-gray-600 mb-6">
        Explore our collection of free courses designed to help you get started
        with programming and development fundamentals.
      </p>

      
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-start gap-6">
        {freeCourses.map((course) => (
          <CourseCard
            key={course.id}
            title={course.name}
            description={course.description}
            thumbnail={course.image}
            price={course.price}
            category={course.category}
          />
        ))}
      </div>
    </div>
  );
};

export default FreeCourses;
