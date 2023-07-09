import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <section className="my-10 post-content project max-w-2xl mx-auto">
        <Link
          href="https://github.com/Veercodeprog?tab=repositories"
          className="octocat hover:text-green-600"
        >
          <div className="flex flex-col items-center">
            <FontAwesomeIcon icon={faSquareGithub} className="w-1/3 h-1/3" />
            <div className="text-lg mt-3">
              View all of my projects on GitHub!
            </div>
          </div>
        </Link>
        <div className="flex flex-col items-center">
          <h2 id="inspiderweb" className="text-2xl font-bold mt-8 mb-4">
            {" "}
            Movies Review App using IBM Cloud NLU, Cloudant &amp; CI/CD Pipeline
          </h2>
          <div className="project-meta text-gray-500 text-sm mb-4">
            <div className="context font-bold">
              Analyze and modify Cloudant and toolchains for CI/CD
            </div>
          </div>
          <div className="badges mb-4">
            <Link href="" className="fa fa-github" />
          </div>
          <div className="project-description text-justify">
            <p>
              <Link href="" className="text-green-600 font-bold">
                IBM Cloud Project: NLU, Cloudant &amp; CI/CD Pipeline
              </Link>{" "}
              This project involves creating instances of the Cloudant and
              Natural Language Understanding (NLU) services on IBM Cloud. It
              also includes setting up a CI/CD pipeline using a toolchain and
              delivery pipeline. The pipeline is configured to use a GitHub
              repository, with a build stage that uses input from a forked
              repository, and a deploy stage. The final step is to deploy the
              Node JS application from the Git repository to CE using IBM Cloud
              Code Engine CLI in the lab environment. Environment variables for
              the Cloudant service and NLU are collected and used in the Node
              application. Once deployed, the web application can be accessed
              using the deployment URL.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h2 id="inspiderweb" className="text-2xl font-bold mt-8 mb-4">
            {" "}
            Chill Code Connect
          </h2>
          <div className="project-meta text-gray-500 text-sm mb-4">
            <div className="context font-bold">
              The Ultimate Group Video Call for Collaborative Coding
            </div>
          </div>
          <div className="badges mb-4">
            <Link href="" className="fa fa-github" />
          </div>
          <div className="project-description text-justify">
            <p>
              <Link href="" className="text-green-600 font-bold">
                Chill Code Connect: The Ultimate Group Video Call for
                Collaborative Coding
              </Link>{" "}
              Chill Code Connect is a cutting-edge platform designed for
              developers and coding enthusiasts to engage in seamless group
              video calls while tackling programming challenges together. This
              innovative application, developed using WebRTC and Agora TRTM in
              JavaScript, empowers users to connect, collaborate, and conquer
              coding problems like never before. At the heart of Chill Code
              Connect lies a robust channel-based communication system, allowing
              users to effortlessly join a shared coding space with their peers.
              Whether you're part of a study group, a coding club, or simply
              seeking a virtual coding session with like-minded individuals,
              Chill Code Connect provides an immersive environment that fosters
              collaboration and knowledge sharing.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 id="inspiderweb" className="text-2xl font-bold mt-8 mb-4">
            {" "}
            Meme Generator
          </h2>
          <div className="project-meta text-gray-500 text-sm mb-4">
            <div className="context font-bold">
              MemeGenie: React Meme Generator App!
            </div>
          </div>
          <div className="badges mb-4">
            <Link href="" className="fa fa-github" />
          </div>
          <div className="project-description text-justify">
            <p>
              <Link href="" className="text-green-600 font-bold">
                {" "}
                React Meme Generator App!
              </Link>{" "}
              MemeGenie is a fun and user-friendly meme generator app built
              using the power of React. With MemeGenie, you can effortlessly
              create hilarious and shareable memes in just a few clicks. Unleash
              your creativity, tickle your funny bone, and become a meme master
              with this simple yet powerful app. The interface of MemeGenie is
              sleek and intuitive, allowing users of all skill levels to jump
              right in and start crafting their own memes. The app offers a vast
              collection of popular meme templates that cover a wide range of
              themes and emotions. From classic reaction memes to trending pop
              culture references, you'll find the perfect template to bring your
              ideas to life.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 id="inspiderweb" className="text-2xl font-bold mt-8 mb-4">
              {" "}
              Project Reviews App{" "}
            </h2>
            <div className="project-meta text-gray-500 text-sm mb-4">
              <div className="context font-bold">
                dynamic web application built with Next.js, utilizing Strapi as
                the backend and Firebase Authentication
              </div>
            </div>
            <div className="badges mb-4">
              <Link href="" className="fa fa-github" />
            </div>
            <div className="project-description text-justify">
              <p>
                <Link href="" className="text-green-600 font-bold">
                  Project Reviews App:{" "}
                </Link>{" "}
                Within the app, users have the freedom to add their own reviews
                and recommendations for different programming tools. They can
                rate and provide insightful feedback, helping other users make
                informed decisions when choosing the right tools for their
                projects. The Project Reviews App empowers the programming
                community to connect, collaborate, and share their expertise,
                creating a valuable resource for individuals seeking reliable
                and unbiased opinions on technical programming tools.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h2 id="inspiderweb" className="text-2xl font-bold mt-8 mb-4">
              {" "}
              Raksa
            </h2>
            <div className="project-meta text-gray-500 text-sm mb-4">
              <div className="context font-bold">
                Next.js application designed exclusively for the astrology
                community, providing a platform for astrologers and enthusiasts
                to connect and share their insights through video calls and chat
                functionalities
              </div>
            </div>
            <div className="badges mb-4">
              <Link href="" className="fa fa-github" />
            </div>
            <div className="project-description text-justify">
              <p>
                <Link href="" className="text-green-600 font-bold">
                  Project Reviews App:{" "}
                </Link>{" "}
              Using Agora RTC (Real-Time Communication) technology, Raksa enables astrologers to establish high-quality video calls with their clients. This facilitates a personal and interactive consultation experience, bridging the gap between astrologers and those seeking their expertise. Users can engage in real-time conversations, ask questions, and receive valuable guidance from trusted astrologers, all from the comfort of their own devices.

In addition to video calls, Raksa incorporates Agora Chat, allowing users to communicate via text messages. This feature fosters a sense of community, enabling astrologers and enthusiasts to connect, share knowledge, and discuss various astrological topics in dedicated chat rooms. Users can exchange ideas, ask for recommendations, and form connections with like-minded individuals who share a passion for astrology
                                .             </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
