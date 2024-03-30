import { Typewriter } from "react-simple-typewriter";

export default function HomeHero() {
  return (
    <div className=" section bg-hero  w-full min-h-screen">
      <div className="flex gap-x-2 justify-center items-center h-screen">
        <div className="w-2/5 flex justify-end me-20">
          <div
            className={`rounded-3xl border-2 w-80 h-96 outline-white bg-developerImage bg-cover bg-no-repeat bg-inageBg`}
          ></div>
        </div>
        <div className="w-3/5 ms-20 text-white font-bold text-start">
          <p className="text-5xl leading-relaxed ">
            <span className="text-gold">Hi, </span>I'm Danushan Kanagasingam
          </p>
          <p className="text-4xl leading-relaxed">
            Software Engineer{" "}
            <span className="text-3xl text-lightBlue">
              <Typewriter
                words={[" Back-End (Springboot)", " Front-End (React)"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
