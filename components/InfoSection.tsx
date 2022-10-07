import {
  faCalendar,
  faCalendarAlt,
  faClock,
  faClockFour,
  faClockRotateLeft,
  faMap,
  faUserClock,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoSection = () => {
  return (
    <section className=" bg-lightModeBaseLight dark:bg-baseLight flex flex-col dark:text-white p-10 relative pb-20">
      <h2 className="text-3xl font-bold ">More Info!</h2>
      {/* 3 flex boxes with icons and text and description */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        <InfoItem icon={faCalendarAlt} title="The Date!">
          The date for the event is <strong>November 17th, 2022</strong>. Add
          the event on your calendar here!
        </InfoItem>
        <InfoItem icon={faMap} title="The Location!">
          The event will be held at the Univerity of North Carolina at
          Charlotte!
          <br /> 9201 University City Blvd, Charlotte, NC 28223
        </InfoItem>
        <InfoItem icon={faUserClock} title="The Time!">
          The event will be from 8 AM to 8 PM.
          <br />
          It will be a awesome 12 hour event!
        </InfoItem>
      </div>
    </section>
  );
};

interface InfoItemProps {
  icon: IconDefinition;
  title: string;
  children?: React.ReactNode;
}

const InfoItem = ({ icon, title, children }: InfoItemProps) => {
  // a column with an icon, title, and description
  return (
    <div className="flex flex-col border-4 border-black dark:border-white rounded-lg p-5 hvr-sweep-to-right hover:scale-105 transition-all">
      <div className="flex justify-center items-center">
        <FontAwesomeIcon icon={icon} className="text-7xl" />
      </div>
      <h2 className="text-3xl font-bold text-center pt-3">{title}</h2>
      <p className="text-lg pt-3 text-center">{children}</p>
    </div>
  );
};

export default InfoSection;
