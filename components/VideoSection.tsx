import Title from "./Title";
import thumbnail from "../public/thumbnail.png";
import Image from "next/image";
import Section from "./Section";

const VideoSection = () => {
  return (
    <Section id="images">
      <Title text="Watch the Video" />
      <div className="p-10 text-center">
        <Image src={thumbnail} alt="Thumbnail" />
      </div>
    </Section>
  );
};

export default VideoSection;
