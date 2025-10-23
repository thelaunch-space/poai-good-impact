import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Focus from "@/components/Focus";
import ProblemStatements from "@/components/ProblemStatements";
import HowItWorks from "@/components/HowItWorks";
import ChallengeChampions from "@/components/ChallengeChampions";
import AboutPoai from "@/components/AboutPoai";
import Schedule from "@/components/Schedule";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  const handleRegisterClick = () => {
    document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navbar onRegisterClick={handleRegisterClick} />
      <Hero onRegisterClick={handleRegisterClick} />
      <About />
      <Focus />
      <ProblemStatements onRegisterClick={handleRegisterClick} />
      <HowItWorks />
      <ChallengeChampions />
      <AboutPoai />
      <Schedule />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
