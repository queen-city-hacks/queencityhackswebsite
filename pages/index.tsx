import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <section className="h-screen bg-base text-white flex flex-col text-center">
        {/* navbar */}
        <div className="flex justify-between items-center h-16 p-10 py-16">
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
        </div>
        <div className="lg:h-1/5 h-1/6" />
        <div className="">
          <h1 className="font-special break-words text-xl hidden lg:block lg:text-6xl">
            queen_city_hacks
          </h1>
          <h1 className="font-special break-words lg:hidden text-6xl">
            queen city hacks
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
          <FAQ
            question="What is Queen City Hacks?"
            answer="Queen City Hacks is a 12-hour, in-person, high-school hackathon that
        celebrates the creativity and innovation of Charlotte’s high school
        students."
          />
          <FAQ
            question="What is a hackathon?"
            answer="A hackathon is a 24-hour, in-person, high-school hackathon that
        celebrates the creativity and innovation of Charlotte’s high school
        students."
          />
          <FAQ
            question="What are children?"
            answer="Children are the future of the city. We are a community of
        children, and we are here to help them succeed in their future."
          />
          <FAQ
            question="What are the rules?"
            answer="The rules are simple. We encourage everyone to come to the
        hackathon and participate in the hackathon. We will have a lot of
        fun, and we hope you will join us!"
          />
          <FAQ
            question="What are the prizes?"
            answer="The prizes are going to be $100, $200, $300, $400, $500, $600,
        $700, $800, $900, $1000, $1100, $1200, $1300, $1400, $1500, $1600, $1700,
        $1800, $1900, $2000, $2100, $2200, $2300, $2400, $2500, $2600, $2700, $2800,
        $2900, $3000, $3100, $3200, $3300, $3400, $3500, $3600, $3700, $3800, $3900,
        $4000, $4100, $4200, $4300, $4400, $4500, $4600, $4700, $4800, $4900, $5000!"
          />
          <FAQ
            question="What are the dates?"
            answer="The dates are going to be September 1st - September 3rd, 2020."
          />
        </div>
      </section>
    </>
  );
};

export default Home;

interface FAQProps {
  question: string;
  answer: string;
}

const FAQ = ({ question, answer }: FAQProps) => {
  return (
    <div className="bg-base p-5 rounded-2xl shadow-2xl">
      <h2 className="text-2xl font-bold underline">{question}</h2>
      <p className="text-lg pt-3">{answer}</p>
    </div>
  );
};
