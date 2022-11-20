import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faBars,
  faCircleXmark,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";
import Navbar from "../components/Navbar";
import FAQSection from "../components/FAQSection";
import useLocalStorage from "../lib/useLocalStorage";
import InfoSection from "../components/InfoSection";

/* eslint-disable @next/next/no-img-element */

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Queen City Hacks - Charlotte&apos;s largest high school hackathon!
        </title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Home | Queen City Hacks: a Charlotte high school hackathon"
          key="title"
        />
        <meta
          property="og:description"
          content="Queen City Hacks is a hackathon for high school students in the Charlotte area. We are a student-run organization that aims to provide a fun and educational experience for students in the CLT area interested in technology."
        />
        <meta
          name="description"
          content="Queen City Hacks is a hackathon for high school students in the Charlotte area. We are a student-run organization that aims to provide a fun and educational experience for students in the CLT area interested in technology."
        />
        <meta
          property="og:image"
          content="https://www.queencityhacks.com/ogimage.png"
        />
        <meta property="og:url" content="https://queencityhacks.com" />
        <script type="application/ld+json">
          {`{
            "@context": "http://schema.org/",
            "@type": "Event",
            "name": "Queen City Hacks",
            "description": "Queen City Hacks is a hackathon for high school students in the Charlotte area. We are a student-run organization that aims to provide a fun and educational experience for students in the CLT area interested in technology.",
            "image": "https://www.queencityhacks.com/ogimage.png",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "eventStatus": "https://schema.org/EventScheduled",
            "startDate": "2022-11-19T09:30:00.000-05:00",
            "endDate": "2022-11-20T16:30:00.000-05:00",
            "location": [
              {
                "@type": "Place",
                "name": "Allegra Westbrooks Regional Library",
                "address": {
                  "streetAddress": "2412 Beatties Ford Road",
                  "addressLocality": "Charlotte",
                  "addressRegion": "NC",
                  "postalCode": "28216",
                  "addressCountry": "United States"
                }
              }
            ],
            "organizer": {
              "@type": "Person",
              "name": "Ayush Paul",
              "url": ""
            }
          }`}
        </script>
        <script
          defer
          data-domain="queencityhacks.com"
          src="https://plausible.io/js/plausible.js"
        ></script>
      </Head>

      <section
        className="h-[80vh] dark:text-white flex flex-col text-center bg-[url('/dimgamers.jpg')] bg-center bg-cover bg-fixed"
        id="header"
      >
        <div className="lg:h-1/5 h-1/6" />
        <div className="text-white">
          <h1 className="font-special break-words text-xl hidden lg:block lg:text-6xl">
            <Typed strings={["queen_city_hacks"]} typeSpeed={80} />
            <span className="hidden">queen city hacks</span>
          </h1>
          <h1 className="font-special break-words lg:hidden text-6xl">
            <Typed
              strings={["queen city hacks"]}
              typeSpeed={100}
              showCursor={false}
            />
            <span className="hidden">queen city hacks</span>
          </h1>
          <h2 className="lg:text-4xl text-2xl pt-10 font-bold w-1/2 mx-auto">
            Charlotte’s 2-day in-person high-school hackathon!
          </h2>
          <h3 className="font-light pt-1 lg:pt-3 lg:text-2xl">
            <a
              className="text-cyan-400 hover:text-white font-bold transition-all duration-300 hover:bg-cyan-400 rounded-md px-2"
              href="/register"
            >
              Registrations
              {/* arrow icon */}
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="ml-2"
              />
            </a>{" "}
            now open!
          </h3>
        </div>

        <div className="flex-grow"></div>
      </section>
      <InfoSection />
      <FAQSection />

      <section className="bg-lightModeBaseLight dark:bg-baseLight flex flex-col dark:text-white p-10 relative pb-20 mt-px-20">
        <div
          className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-8 
      font-bold text-transparent text-center text-3xl animate-pulse "
        >
          <h2
            className="bg-gradient-to-r hover:scale-125
        from-[#3B82F6] to-[#F1FFFF] bg-clip-text"
          >
            Over $1000 in Funding!
          </h2>
          <h2
            className="bg-gradient-to-r hover:scale-125
        from-[#F5C77E] to-[#C61A09] bg-clip-text"
          >
            Charlotte&apos;s Largest High School Hackathon!
          </h2>
        </div>

        <h2 className="text-3xl font-bold ">Sponsors and Supporters</h2>
        {/* 2 flex boxes with pictures */}
        <div className="grid grid-cols-1 lg:grid-cols-2 py-10 gap-8">
          <div className="hover:bg-slate-300 dark:hover:bg-black transition-all duration-1000 flex-grow hover:scale-105">
            <img src="/krispy.png" height="100%" width="100%" />
          </div>

          <div className="hidden dark:block hover:bg-black transition-all duration-1000 flex-grow hover:scale-105">
            <img src="/githubdark.png" height="100%" width="100%" />
          </div>
          <div className="dark:hidden hover:bg-slate-300 transition-all duration-1000 flex-grow hover:scale-105">
            <img src="/githublight.png" height="100%" width="100%" />
          </div>
          {/* 2 flex boxes with pictures */}
          <div className="hover:bg-slate-300 dark:hover:bg-black transition-all duration-1000 flex-grow hover:scale-105">
            <img src="/cmslibrary.png" height="100%" width="100%" />
          </div>

          <div className="dark:hidden  hover:bg-slate-300 transition-all duration-1000 flex-grow hover:scale-105">
            <img
              src="/lightuncc.png"
              className="mx-auto"
              height="60%"
              width="60%"
            />
          </div>

          <div className="hidden dark:block hover:bg-black transition-all duration-1000 flex-grow hover:scale-105">
            <img src="/darkuncc.png" height="100%" width="100%" />
          </div>

          <div className="dark:hidden">
            <img
              src="/lightmlh.png"
              className="mx-auto hover:bg-slate-300 transition-all duration-1000 flex-grow hover:scale-105"
              height="100%"
              width="100%"
            />
          </div>

          <div className="hidden dark:block hover:bg-black transition-all duration-1000 flex-grow hover:scale-105">
            <img src="/darkmlh.png" height="100%" width="100%" />
          </div>
          <div className="hover:bg-slate-300 dark:hover:bg-black transition-all duration-1000 flex-grow hover:scale-105">
            <img src="/firstrobotics.png" height="100%" width="100%" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
