import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Typed from "react-typed";
import "react-typed/dist/animatedCursor.css";

const Home: NextPage = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <>
      <section
        className="h-screen text-white flex flex-col text-center bg-[url('/dimgamers.jpg')] bg-center bg-cover backdrop-brightness-50"
        id="header"
      >
        {/* navbar */}
        <div className="flex justify-between items-center h-16 p-10 py-16 bg-base">
          <div className="flex items-center">
            <Image
              src="/logo.png"
              alt="logo"
              width={140}
              height={90}
              className="mr-2"
            />
          </div>
          <div className="flex items-center hidden lg:block">
            <Link href="/team">
              <a className="text-white hover:text-white-500">Meet The Team</a>
            </Link>
            <Link href="/register">
              <a className="text-white hover:text-white-500 ml-10">Register</a>
            </Link>
            <Link href="/">
              <a className="text-white hover:text-white-500 ml-10">Home</a>
            </Link>
          </div>
          <FontAwesomeIcon
            icon={faBars}
            className="lg:hidden"
            size="2x"
            onClick={() => setDropdownOpen(true)}
          />
        </div>
        {/* mobile navbar */}
        {dropdownOpen && (
          <div
            className={"py-5 lg:hidden bg-baseLight absolute w-screen top-0 "}
          >
            <div className="relative flex flex-col">
              <div className="flex absolute right-10 top-2">
                <FontAwesomeIcon
                  icon={faCircleXmark}
                  size="lg"
                  onClick={() => setDropdownOpen(false)}
                  className="text-white hover:text-gray-400"
                />
              </div>
              <Link href="/team">
                <a className="text-white hover:text-white-500 py-2 hover:bg-gray-600">
                  Meet The Team
                </a>
              </Link>
              <Link href="/register">
                <a className="text-white hover:text-white-500 py-2">Register</a>
              </Link>
              <Link href="/">
                <a className="text-white hover:text-white-500 py-2">Home</a>
              </Link>
            </div>
          </div>
        )}

        <div className="lg:h-1/5 h-1/6" />
        <div className="">
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
      <section className=" bg-baseLight flex flex-col text-white p-10">
        <h2 className="text-3xl font-bold ">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          <FAQ question="What is Queen City Hacks?">
            Queen City Hacks is a 12-hour, in-person, high-school hackathon that
            celebrates the creativity and innovation of Charlotte’s high school
            students.
          </FAQ>
          <FAQ question="What is a hackathon?">
            A hackathon is a 24-hour, in-person, high-school hackathon that
            celebrates the creativity and innovation of Charlotte’s high school
            students.
          </FAQ>
          <FAQ question="How much does it cost to join?">
            This Hackathon is 100% free to join so all you have to do is sign
            up. Thanks to our sponsors we are able to host this event without
            any fees. We would greatly appreciate any Donations as it would
            improve the Hackathon greatly.
          </FAQ>
          <FAQ question="Who can participate?">
            Our primary patrons are mostly concentrated around the Greater
            Charlotte Area . The majority of our patrons we advocate consist
            from grades 9-12, however, if people grades 8 and under would like
            to participate then they may do so.
          </FAQ>
          <FAQ question="What are the prizes?">
            We will be giving away a variety of items at this event.
          </FAQ>
          <FAQ question="When is the event?">
            The dates are going to be between November and December of 2022.
          </FAQ>
        </div>
      </section>
    </>
  );
};

export default Home;

interface FAQProps {
  question: string;
  children?: React.ReactNode;
}

const FAQ = ({ question, children }: FAQProps) => {
  return (
    <div className="bg-base p-5 rounded-2xl shadow-2xl hover:scale-105 transition-all">
      <h2 className="text-2xl font-bold underline">{question}</h2>
      <p className="text-lg pt-3">{children}</p>
    </div>
  );
};
