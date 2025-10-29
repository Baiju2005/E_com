import React from "react";
import CourseCard from "./CourseCard.jsx";
import { Link } from "react-router-dom";
import coursesData from "../data/coursesData.js";

const PaidCourses = () => {
  // Filter only paid courses
  const paidCourses = coursesData.filter(
    (course) => course.price > 0 || course.category === "Paid"
  );

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-6">
      
      <div className="mt-28 text-center mb-16">
        <h1 className="text-2xl font-semibold md:text-4xl">Our Paid Courses</h1>
        <p className="mt-8 text-gray-600">
          Explore our premium courses designed to help you master coding skills
          with hands-on projects and expert guidance.
        </p>
      </div>

      
      <div className="mb-10 flex justify-center">
        <Link
          to="/"
          className="px-6 py-2 bg-gray-900 text-white rounded-md hover:opacity-90 transition"
        >
          Back to Home
        </Link>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
        {paidCourses.map((course) => (
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

export default PaidCourses;
