import {
  faCalendar,
  faClock,
  faMapPin,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "./Title";

const InfoSection = () => {
  return (
    <section className="bg-baseDark flex flex-col dark:text-white p-10 relative pb-20">
      <Title text="More Info!" />
      {/* 3 flex boxes with icons and text and description */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-16">
        <InfoItem icon={faMapPin} color="bg-red-500">
          Allegra Westbrooks Regional
          <br />
          <br />
          2412 Beatties Ford Road Charlotte, NC 28216
        </InfoItem>
        <InfoItem icon={faCalendar} color="bg-green-500">
          This event took place over November 19th to the 20th, spanning the
          weekend before Thanksgiving!
        </InfoItem>

        <InfoItem icon={faClock} color="bg-purple-500">
          This was from 9:30 am to 4:30 pm on Saturday, and from 1 pm to 4:30 pm
          on Sunday, with over 10 hours of hacking.
        </InfoItem>
      </div>
    </section>
  );
};

interface InfoItemProps {
  icon: IconDefinition;
  color: string;
  children?: React.ReactNode;
}

const InfoItem = ({ icon, color, children }: InfoItemProps) => {
  // a column with an icon, title, and description
  return (
    <div className="flex flex-col bg-base rounded-2xl hvr-sweep-to-right hover:scale-105 transition-all mt-16">
      <div className="flex justify-center items-center absolute  w-full -translate-y-16 ">
        <FontAwesomeIcon
          icon={icon}
          className={
            "text-8xl mx-auto rounded-full p-10 h-16 w-16 text-black " + color
          }
        />
      </div>
      <p className="text-2xl pt-3 mt-20 p-5 text-center">{children}</p>
    </div>
  );
};

export default InfoSection;
