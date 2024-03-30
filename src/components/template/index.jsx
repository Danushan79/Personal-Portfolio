import AboutUs from "../organisms/AboutUs";
import HomeHero from "../organisms/HomeHero";
import MyWorks from "../organisms/Projects";

export default function HomeTemplate() {
  return (
    <main className="font-montserrat">
      <div className="flex  w-full flex-col scroll-container">
        <HomeHero />
        <AboutUs />
        <MyWorks />
      </div>
    </main>
  );
}
