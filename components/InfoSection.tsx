import {
  faCalendar,
  faClock,
  faMapPin,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Section from "./Section";
import Title from "./Title";

const InfoSection = () => {
  return (
    <Section id="info">
      <Title text="More Info!" />
      {/* 3 flex boxes with icons and text and description */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 py-16">
        <InfoItem icon={faMapPin} color="bg-red-500">
          ImaginOn: The Joe & Joan Martin Center
          <br />
          <br />
          300 E 7th St, Charlotte, NC 28202
        </InfoItem>
        <InfoItem icon={faCalendar} color="bg-green-500">
          Queen City Hacks will be from October 28th to October 29th 2023!
        </InfoItem>

        <InfoItem icon={faClock} color="bg-purple-500">
          The event will be from 9:30 am to 4:30 pm on Saturday, and from 1 pm
          to 4:30 pm on Sunday, with over 10 hours of hacking!
        </InfoItem>
      </div>
    </Section>
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
