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

const Home: NextPage = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "dark");
  return (
    <div>
      <Head>
        <title>Home | queen_city_hacks</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      <section
        className="h-screen dark:text-white flex flex-col text-center bg-[url('/dimgamers.jpg')] bg-center bg-cover bg-fixed"
        id="header"
      >
        <Navbar setDarkMode={setDarkMode} />

        <div className="lg:h-1/5 h-1/6" />
        <div className="text-white">
          <h1 className="font-special break-words text-xl hidden lg:block lg:text-6xl">
            <Typed strings={["queen_city_hacks"]} typeSpeed={80} />
          </h1>
          <h1 className="font-special break-words lg:hidden text-6xl">
            <Typed
              strings={["queen city hacks"]}
              typeSpeed={100}
              showCursor={false}
            />
          </h1>
          <h2 className="lg:text-4xl text-2xl pt-10 font-bold w-1/2 mx-auto">
            Charlotte’s biggest 12-hour, in-person, high-school hackathon!
          </h2>
          <h3 className="font-light pt-1 lg:pt-3 lg:text-2xl">
            More info coming soon!
          </h3>
        </div>

        <div className="flex-grow"></div>
      </section>
      <FAQSection />
    </div>
  );
};

export default Home;
