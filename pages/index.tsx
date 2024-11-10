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
import TeamSection from "../components/TeamSection";
import SupportersSection from "../components/SupportersSection";
import ImageSection from "../components/ImageSection";
import VideoSection from "../components/VideoSection";

/* eslint-disable @next/next/no-img-element */

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>
          Queen City Hacks - Charlotte&apos;s annual high school hackathon!
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
      </Head>
      <section
        className="min-h-[80vh] bg-baseDark flex flex-col lg:flex-row text-center p-10 gap-5"
        id="header"
      >
        <div className="bg-[url('/dimgamers.png')] bg-center bg-cover lg:bg-fixed rounded-xl flex-1 flex flex-col align-middle justify-center p-4">
          <h1 className="text-5xl font-bold font-special text-white">Queen</h1>
          <h1 className="text-5xl font-bold font-special text-white">City</h1>
          <h1 className="text-5xl font-bold font-special text-white">Hacks</h1>
          <h1 className="text-5xl font-bold font-special text-[#FFD700] leading-relaxed tex">
            2023
          </h1>
        </div>
        <div className=" text-white rounded-xl flex-1 flex flex-col gap-5 align-middle justify-center p-10">
          <h2 className="lg:text-4xl font-bold font-special text-white">
            Charlotte&apos;s largest high school hackathon is back for another
            year!
          </h2>
          <h3 className="lg:text-2xl font-bold text-white">
            Register today to stay updated!
          </h3>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfuUYL6k0qEIGFyUU8r1dQoP_VzLxvCw7kEs53FHfApO3BRrg/viewform"
            className="bg-[#FFD700] rounded-xl font-special p-5 lg:text-3xl text-xl text-black hover:bg-[#FFDF00] transition-all hover:scale-105"
          >
            Register Now <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </div>
      </section>
      <InfoSection />
      <TeamSection />
      <FAQSection />
      <VideoSection />
      <ImageSection />
      <SupportersSection />
    </div>
  );
};

export default Home;
