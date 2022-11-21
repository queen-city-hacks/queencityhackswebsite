import ayush from "../public/team/ayushpolaroid.png";
import pranav from "../public/team/pranavpolaroid.png";
import aditya from "../public/team/adityapolaroid.png";
import Image, { StaticImageData } from "next/image";

const TeamSection = () => {
  return (
    <section className="bg-baseDark flex flex-col dark:text-white p-10 relative pb-20">
      <h2 className="text-3xl font-bold text-center font-special">
        Meet the Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
        <div className="translate-x-16 translate-y-7 rotate-6 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-110 transition-all">
          <TeamMember name="Aditya Mehta" image={aditya}>
            Organizer and developer
          </TeamMember>
        </div>
        <div className="hover:scale-110 transition-all z-10">
          <TeamMember name="Ayush Paul" image={ayush}>
            Lead organizer, developer and designer.
          </TeamMember>
        </div>

        <div className="-rotate-12 -translate-x-16 translate-y-4 hover:rotate-0 hover:translate-x-0 hover:translate-y-0 hover:scale-110 transition-all">
          <TeamMember name="Pranav Mucharla" image={pranav}>
            Organizer and logistical lead
          </TeamMember>
        </div>
      </div>
    </section>
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
