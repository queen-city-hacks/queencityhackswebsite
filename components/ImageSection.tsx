import Image, { StaticImageData } from "next/image";
import Title from "./Title";
import pranavteaching from "../public/eventmedia/pranavteaching.png";
import group from "../public/eventmedia/group.jpg";
import eatingdonut from "../public/eventmedia/eatingdonut.png";
import incycle from "../public/eventmedia/incycle.png";
import mental from "../public/eventmedia/mental.png";
import wideangle1 from "../public/eventmedia/wideangle1.png";
import Section from "./Section";

const ImageSection = () => {
  return (
    <Section id="images">
      <Title text="Media Gallery" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 justify-items-stretch">
        <div className="md:row-span-2 md:col-span-2">
          <MediaItem image={pranavteaching} alt="Pranav teaching" />
        </div>
        <div className="row-span-1 col-span-1 h-64">
          <MediaItem image={group} alt="Group" />
        </div>
        <div className="row-span-1 col-span-1 h-64">
          <MediaItem image={eatingdonut} alt="Eating donut" />
        </div>
        <div className="row-span-1 col-span-1 h-64">
          <MediaItem image={incycle} alt="Incycle" />
        </div>
        <div className="row-span-1 md:col-span-2 h-64">
          <MediaItem image={wideangle1} alt="Wide angle" />
        </div>
      </div>
    </Section>
  );
};

interface MediaItemProps {
  image: StaticImageData;
  alt: string;
}

const MediaItem = ({ image, alt }: MediaItemProps) => {
  return (
    <div className="relative h-full transition-all group">
      <a href="/gallery">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all text-center">
          Check out the{" "}
          <span className="text-cyan-500 underline">full gallery</span>!
        </div>
        <Image
          src={image}
          alt={alt}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl h-auto group-hover:brightness-50 transition-all"
        />
      </a>
    </div>
  );
};

export default ImageSection;
