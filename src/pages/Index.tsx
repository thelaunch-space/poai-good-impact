import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutPoai from "@/components/AboutPoai";
import Focus from "@/components/Focus";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import ChallengeChampions from "@/components/ChallengeChampions";
import ProblemStatements from "@/components/ProblemStatements";
import HowItWorks from "@/components/HowItWorks";
import VibeExpect from "@/components/VibeExpect";
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
      <AboutPoai />
      <Focus />
      <WhoThisIsFor />
      <ChallengeChampions />
      <ProblemStatements onRegisterClick={handleRegisterClick} />
      <HowItWorks />
      <VibeExpect />
      <Schedule />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
