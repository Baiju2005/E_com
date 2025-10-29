import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PaidCourses from "../components/PaidCourses";

const CourseRoute = () => {
  return (
    <>
      <Navbar />
      <PaidCourses />
      <Footer />
    </>
  );
};

export default CourseRoute;
