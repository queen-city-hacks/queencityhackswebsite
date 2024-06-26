import ayush from "../public/team/ayushpolaroid.png";
import pranav from "../public/team/pranavpolaroid.png";
import aditya from "../public/team/adityapolaroid.png";
import lalit from "../public/team/lalitpolaroid.png";
import Image, { StaticImageData } from "next/image";
import Title from "./Title";
import Section from "./Section";

const TeamSection = () => {
  return (
    <Section id="team">
      <Title text="Meet the Team" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-10">
        <div className="rotate-2 md:translate-x-16 md:translate-y-7 md:rotate-6 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-110 transition-all">
          <TeamMember name="Aditya Mehta" image={aditya}>
            Organizer and developer
          </TeamMember>
        </div>
        <div className="hover:scale-110 transition-all z-10">
          <TeamMember name="Ayush Paul" image={ayush}>
            Director, developer and designer.
          </TeamMember>
        </div>

        <div className="-rotate-2 md:-rotate-12 md:-translate-x-8 md:translate-y-4 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-110 transition-all">
          <TeamMember name="Pranav Mucharla" image={pranav}>
            Organizer and logistical lead
          </TeamMember>
        </div>
        <div className="rotate-2 md:-translate-x-16 md:translate-y-7 md:rotate-6 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-110 transition-all">
          <TeamMember name="Lalit Julapalli" image={lalit}>
            Organizer and future director
          </TeamMember>
        </div>
      </div>
    </Section>
  );
};

interface TeamMemberProps {
  name: string;
  image: StaticImageData;
  children: React.ReactNode;
}

const TeamMember = ({ name, image, children }: TeamMemberProps) => {
  return (
    <div className="bg-white p-5 text-black z-10 shadow-lg">
      <Image src={image} alt={name} />

      <h3 className="text-3xl font-bold pt-5">{name}</h3>
      <p className="text-xl text-gray-600">{children}</p>
    </div>
  );
};

export default TeamSection;
