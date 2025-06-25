import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faBitbucket,
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AboutPage = () => {
  return (
    <div className="flex justify-center">
      <div className="content max-w-lg">
        <article>
          <header
            className="bg-center bg-cover"
            style={{ backgroundImage: "url(/)" }}
          >
            <h2 id="inspiderweb" className="text-2xl font-bold mt-8 mb-2">
              {" "}
              About me
            </h2>
          </header>
          <section className="post-content">
            <div className="flex justify-center mb-6">
              <div className=" bigphotobox">
                <img
                  alt="Picture of me."
                  src="/assets/veer-pratap.jpeg"
                  className="rounded-full w-32 h-32"
                />
              </div>
            </div>

            {/* banner_title: About me */}
            <div className="mepage">
              <p className=" text-xl text-justify space-y-2 text-gray-900 sm:text-base; ">
                As a computer science graduate, <a href=""></a> I am incredibly
                passionate about immersing myself in the vast and exciting world
                of machine learning applications, decentralized applications
                (dApps), distributed systems, scalable applications, and
                operating system (OS) development. These fields ignite a
                profound enthusiasm within me as I strive to explore, learn, and
                innovate in these cutting-edge domains.{" "}
                <a href="" className=" text-lime-500">
                  {" "}
                </a>
                .
              </p>
              <p className="mt-8 text-xl text-justify space-y-2 text-gray-900 sm:text-base;">
                I have a strong love for coding and computers, which motivates
                me to create practical and innovative solutions that solve
                real-world problems. Mathematics is my true passion, driving me
                to tackle complex problems with enthusiasm and find elegant
                solutions. <a href=""></a>.
              </p>
              {/* <p> */}
              {/*   maths{' '} */}
              {/*   <a href="">open source projects</a>, learning RUST <a href=""></a>. */}
              {/* </p> */}
              <div className="falist flex justify-center mt-4">
                <ul className="flex space-x-4">
                  <li>
                    <a href="" title="Follow RSS feed">
                      <FontAwesomeIcon icon={faRss} className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a target="_blank" href="">
                      <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a href="" title="Follow on GitHub">
                      <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a href="" title="Follow on Bitbucket">
                      <FontAwesomeIcon icon={faBitbucket} className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a href="" title="Follow on Facebook">
                      <FontAwesomeIcon icon={faFacebook} className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a href="" title="Follow on LinkedIn">
                      <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a href="" title="Follow on Twitter">
                      <FontAwesomeIcon icon={faTwitter} className="w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
        {/* comments */}
      </div>
    </div>
  );
};

export default AboutPage;
