import Hero from "../components/home/Hero";
import AboutPreview from "../components/home/AboutPreview";
import SkillsOrbit from "../components/home/SkillsOrbit";
import FeaturedProjects from "../components/home/FeaturedProjects";
import Services from "../components/home/Services";
import Workflow from "../components/home/workflow/Workflow";
import ValueBanner from "../components/home/ValueBanner";
import Contact from "../components/home/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutPreview />
      <SkillsOrbit />
      <FeaturedProjects />
      <Services />
      <Workflow />
      <ValueBanner />
      <Contact />
    </>
  );
};

export default Home;
