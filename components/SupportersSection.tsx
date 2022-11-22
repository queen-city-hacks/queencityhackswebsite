import Title from "./Title";
import hackclubandfirst from "../public/supporters/hackclubandfirst.png";
import mlh from "../public/supporters/mlh.png";
import uncc from "../public/supporters/uncc.png";
import krispy from "../public/supporters/krispy.png";
import cmlibrary from "../public/supporters/cmslibrary.png";
import vercel from "../public/supporters/vercel.png";

import Image, { StaticImageData } from "next/image";
import Section from "./Section";

const SupportersSection = () => {
  return (
    <>
      <MonetarySupporters />
      <InKindSupporters />
    </>
  );
};

const MonetarySupporters = () => {
  return (
    <Section id="monetary supporters">
      <Title text="Monetary Supporters" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <SupporterImage
          image={hackclubandfirst}
          alt="Hack Club and First"
          link="https://bank.hackclub.com/hackathon-grant-fund"
        />
        <SupporterImage
          image={mlh}
          alt="Major League Hacking"
          link="https://mlh.io"
        />
        <SupporterImage
          image={uncc}
          alt="UNC Charlotte School of Data Science"
          link="https://datascience.charlotte.edu/"
        />
      </div>
    </Section>
  );
};

const InKindSupporters = () => {
  return (
    <Section id="in-kind supporters">
      <Title text="In-Kind Supporters" />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-10">
        <SupporterImage
          image={krispy}
          alt="Krispy Kreme"
          link="https://krispykreme.com"
        />
        <SupporterImage
          image={cmlibrary}
          alt="CM Library"
          link="https://cmlibrary.org"
        />
        <SupporterImage image={vercel} alt="Vercel" link="https://vercel.com" />
      </div>
    </Section>
  );
};

interface SupporterImageProps {
  image: StaticImageData;
  alt: string;
  link: string;
}

const SupporterImage = ({ image, alt, link }: SupporterImageProps) => {
  return (
    <div className="relative text-center hover:rotate-[360deg] transition-all duration-1000">
      <a href={link}>
        <Image src={image} alt={alt} />
      </a>
    </div>
  );
};

export default SupportersSection;
