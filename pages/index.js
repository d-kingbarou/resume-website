import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import imgdp from "../public/img.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";
import web1 from "../public/hoobank.png";
import web2 from "../public/react-shop.png";
import web3 from "../public/gericht.png";
import web4 from "../public/react-calculator.png";
import web5 from "../public/react-quiz.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Darren's Website</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://static-00.iconduck.com/assets.00/netlify-icon-511x512-idkvcd89.png"
        />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section>
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-2xl font-burtons dark:text-white">
              Darren's Website
            </h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/16DXnVm4xgOIQDSHMr6ic6aeTh-N-vgSM/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Darren Lim
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
              Aspiring web developer.
            </h3>
            <p className="text-medium py-5 leading-8 text-gray-800 dark:text-white">
              Highly motivated, self-studied web developer seeking to launch a
              career in building web applications and services. Familiar with
              development and deployment process for web-based technologies.
            </p>
          </div>
          <div className="text-7xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white md:text-7xl max-w-lg mx-auto">
            <a
              href="https://www.linkedin.com/in/darrenlim-/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="cursor-pointer" />
            </a>
            <a
              href="https://github.com/d-kingbarou"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="cursor-pointer" />
            </a>
          </div>
          <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 justify-center flex overflow-hidden">
            <Image src={imgdp} />
          </div>
        </section>

        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1">Experience</h3>
            <p className="text-md py-2 leading-8 text-grey-800">
              As a self-taught web developer, I've honed my skills through
              personal projects. My portfolio reflects my passion for coding and
              showcases a range of innovative projects, from responsive websites
              to dynamic web applications. I thrive on challenges, continually
              seeking opportunities to grow and contribute my expertise to
              collaborative ventures. Clean code, attention to detail, and a
              user-centric approach define my work, and I'm excited to make a
              meaningful impact as a web developer.
            </p>
            <p className="text-md py-2 leading-8 text-grey-800">
              My experience in development includes (but not limited to)
              technologies such as
              <span className=" text-teal-600 ml-1 mr-1">
                ReactJS, NextJS, Typescript, Javascript, HTML/CSS, SQL, C,
                Python
              </span>
              &amp; <span className=" text-teal-600"> Flask </span>.
            </p>
          </div>

          <div className="lg:flex gap-10 mt-7 dark:text-white">
            <div className="flex-1 min-w-0 text-center shadow-lg p-10 rounded-xl dark:bg-teal-900">
              <div className="flex justify-center">
                <Image src={code} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">Code</h3>
              <p className="py-2">
                My coding journey began with the renowned Harvard CS50 course,
                where I delved into the fascinating world of computer science
                and programming. Along the way, I honed my skills in ReactJS
                through online courses and hands-on practice, gaining a deep
                understanding of front-end development. Eager to apply my
                knowledge, I embarked on several passion projects that allowed
                me to explore various technologies and problem-solving
                techniques.
              </p>
              <h4 className="py-4 text-teal-600 dark:text-teal-400">
                Programming technologies
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">ReactJS</p>
              <p className="text-gray-800 py-1 dark:text-white">Typescript</p>
              <p className="text-gray-800 py-1 dark:text-white">Javascript</p>
            </div>

            <div className="flex-1 min-w-0 text-center shadow-lg p-10 rounded-xl dark:bg-teal-900 ">
              <div className="flex justify-center">
                <Image src={consulting} width={100} height={100} />
              </div>
              <h3 className="text-lg font-medium pt-8 pb-2">
                Business & Consulting
              </h3>
              <p className="py-2">
                As a former agency tech recruiter, I excelled in identifying top
                tech talent, negotiating offers, and delivering successful
                placements. With a strong tech background and a passion for
                people, I thrive in connecting the right candidates with the
                right roles, contributing to individual and organizational
                growth.
              </p>
              <h4 className="mt-5 py-4 text-teal-600 dark:text-teal-400">
                Previous experience
              </h4>
              <p className="text-gray-800 py-1 dark:text-white">Negotiation</p>
              <p className="text-gray-800 py-1 dark:text-white">Networking</p>
              <p className="text-gray-800 py-1 dark:text-white">Sales</p>
            </div>
          </div>
        </section>

        <section>
          <div className="dark:text-white">
            <h3 className="text-3xl py-1 mt-7">Personal Projects</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
