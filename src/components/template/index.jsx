import { useRef, useState } from "react";
import AboutUs from "../organisms/AboutUs";
import HomeHero from "../organisms/HomeHero";
import MyWorks from "../organisms/Projects";
import { Element, scroller } from "react-scroll";

export default function HomeTemplate() {
  const [states, setStates] = useState({
    hero: true,
    aboutMe: false,
    projects: false,
  });
  const heroRef = useRef();
  const aboutMeRef = useRef();
  const projectsRef = useRef();

  window.onscroll = function () {
    if (
      states.hero === false &&
      window.scrollY.valueOf() < heroRef.current?.clientHeight / 2
    ) {
      setStates({
        hero: true,
        aboutMe: false,
        projects: false,
      });
    } else if (
      states.aboutMe === false &&
      window.scrollY.valueOf() >= heroRef.current?.clientHeight / 2 &&
      window.scrollY.valueOf() <
        heroRef.current?.clientHeight + aboutMeRef.current?.clientHeight / 2
    ) {
      setStates({
        hero: false,
        aboutMe: true,
        projects: false,
      });
    } else if (
      states.projects === false &&
      window.scrollY.valueOf() >=
        heroRef.current?.clientHeight + aboutMeRef.current?.clientHeight / 2
    ) {
      setStates({
        hero: false,
        aboutMe: false,
        projects: true,
      });
    }
  };

  if (states.hero) {
    scroller.scrollTo("hero", {
      duration: 700,
      smooth: true,
      delay: 0,
    });
  } else if (states.aboutMe) {
    scroller.scrollTo("aboutme", {
      duration: 700,
      smooth: true,
      delay: 0,
    });
  } else if (states.projects) {
    scroller.scrollTo("project", {
      duration: 700,
      smooth: true,
      delay: 0,
    });
  }
  return (
    <main className="font-montserrat">
      <div className="flex  w-full flex-col scroll-container">
        <div ref={heroRef}>
          <Element name="hero" id="ContainerElementID">
            <HomeHero />
          </Element>
        </div>
        <div id="about-us" ref={aboutMeRef}>
          <Element name="aboutme" id="ContainerElementID">
            <AboutUs />
          </Element>
        </div>
        <div id="woks" ref={projectsRef}>
          <Element name="project">
            <MyWorks />
          </Element>
        </div>
      </div>
    </main>
  );
}
