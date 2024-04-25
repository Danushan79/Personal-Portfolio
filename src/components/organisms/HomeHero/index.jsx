import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons/faLinkedinIn";
import {
  faEnvelope,
  faExclamationTriangle,
  faMailReply,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typewriter } from "react-simple-typewriter";

export default function HomeHero() {
  return (
    <div className="bg-hero  w-full min-h-screen">
      <div className="flex flex-col md:flex-row justify-center items-center h-screen">
        <div className="w-full md:w-2/6 lg:w-1/3 xl:w-2/5 flex justify-center md:justify-end">
          <div
            className={`rounded-3xl  border-2 w-231 h-300 bg-bottom outline-white  bg-inageBg  bg-contain bg-developerImage  bg-no-repeat`}
          >
            <div className="absolute "></div>
          </div>
        </div>
        <div className="w-full p-4 md:w-4/6 lg:w-2/3 xl:w-3/5 lg:ms-12 xl:ms-20  md:ms-4 text-white font-bold text-start">
          <p className="text-4xl md:text-4xl  md:leading-relaxed flex flex-col md:flex-row text-center">
            <span className="text-gold pt-4">Hi, </span>
            <span className="pt-4 md:ps-4">Danushan Kanagasingam</span>
          </p>
          <p className="text-3xl h-36 xl:h-28 md:text-4xl md:p-0 flex flex-col xl:flex-row items-center leading-relaxed text-center">
            <span className="h-12">Software Engineer</span>
            <span className="text-3xl xl:ps-4  text-lightBlue">
              <Typewriter
                words={[" Back-End (Spring Boot) ", " Front-End (React)"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <div>
            <ul className="flex gap-12 text-gold justify-center mt-8 md:justify-start">
              <li>
                <a
                  href="https://www.linkedin.com/in/danushan-kanagasingam/"
                  target="_blank"
                >
                  <FontAwesomeIcon
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    icon={faLinkedinIn}
                  />
                </a>
              </li>
              <li>
                <a href="https://github.com/Danushan79" target="_blank">
                  <FontAwesomeIcon
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    icon={faGithub}
                  />
                </a>
              </li>
              <li>
                <a href="mailto:danushan750@gmail.com" target="_blank">
                  <FontAwesomeIcon
                    style={{
                      width: "30px",
                      height: "30px",
                    }}
                    icon={faEnvelope}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
