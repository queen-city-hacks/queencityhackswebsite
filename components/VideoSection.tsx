import Title from "./Title";
import thumbnail from "../public/thumbnail.png";
import Image from "next/image";

const VideoSection = () => {
  return (
    <section
      className="bg-baseDark flex flex-col dark:text-white p-10 relative pb-20"
      id="images"
    >
      <Title text="Watch the Video" />
      <div className="p-10">
        <Image src={thumbnail} alt="Thumbnail" />
      </div>
    </section>
  );
};

export default VideoSection;
