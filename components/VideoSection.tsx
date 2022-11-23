import Title from "./Title";
import thumbnail from "../public/thumbnail.png";
import Image from "next/image";
import Section from "./Section";

const VideoSection = () => {
  return (
    <Section id="images">
      <Title text="Watch the Video" />
      <div className="p-10 text-center">
        <iframe
          src="https://www.youtube-nocookie.com/embed/JKKYeJi_SA0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full aspect-video"
          allowFullScreen
        ></iframe>
      </div>
    </Section>
  );
};

export default VideoSection;
