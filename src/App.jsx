import React from "react";
import Header from "./components/Header/Header";
import Courses from "./components/Courses";
import Footer from "./components/Footer/Footer";
import FAQ from "./components/FAQ";
import Review from "./components/Review";
import AiCoach from "./components/AiCoach";

const App = () => {
  return (
    <div className="maxContainer">
      <Header />
      <AiCoach />
      <Courses />
      <FAQ />
      <Review />
      <Footer />
    </div>
  );
};

export default App;
