import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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
          content="https://queencityhacks.com/ogimage.png"
        />
        <meta property="og:url" content="https://queencityhacks.com" />
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
            Registrations now open!
          </h3>
        </div>

        <div className="flex-grow"></div>
      </section>
      <InfoSection />
      <FAQSection />
    </div>
  );
};

export default Home;
