import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image, { StaticImageData } from "next/image";
import Section from "../components/Section";
import Title from "../components/Title";

import societalfuture from "../public/projects/societalfuture.png";
import vaccinesolutions from "../public/projects/vaccinesolutions.png";
import communityreports from "../public/projects/communityreports.png";
import queencitystops from "../public/projects/queencitystops.png";
import altsource from "../public/projects/altsource.png";
import mindful from "../public/projects/mindful.png";
import inclopedia from "../public/projects/inclopedia.png";
import queencityblooddonations from "../public/projects/queencityblooddonations.png";
import queencityhomelesshousing from "../public/projects/queencityhomelesshousing.png";
import fastfashion from "../public/projects/fastfashion.png";

// work in progress message
const Projects = () => {
  const projects: ProjectCardProps[] = [
    {
      title: "Societal Future",
      image: societalfuture,
      alt: "How would you like to save the world?",
      link: "https://hackathon-website.zacharyhoover.repl.co/",
      authors: [
        "Bhav Lamba",
        "Pradyun Menon",
        "Zachary Hoover",
        "Abhinav Karthikeyan",
      ],
      badge: {
        text: "Techincal Award Winner",
        color: "bg-red-500",
      },
      children: (
        <>
          Our website and tutorials will give easy one place access to students
          first learning the skills to innovate their own products to make an
          impact on the world. This prepares future generations to solve
          prevalent climate and societal issues. If more students take interest
          in robotics and STEM it will make a positive effect on humanity.
        </>
      ),
    },
    {
      title: "Vaccine Solutions",
      image: vaccinesolutions,
      alt: "Vaccine Solutions",
      link: "https://project.ayushpatel74.repl.co/",
      authors: [
        "Ayush Patel",
        "Aditya Karthikeyan",
        "Sathya Santhanam",
        "Ayush Naik",
      ],
      children: (
        <>
          A educational website and accompanying application that teaches people
          about vaccines and how they work. It also provides information about
          the benefits and risks of vaccines, and how to get vaccinated.
        </>
      ),
    },
    {
      title: "Community Reports",
      image: communityreports,
      alt: "Community Reports",
      link: "https://projectnamehere.eczbek.repl.co/index.html",
      authors: ["Patrick Oglesby", "Daniel Wang", "FILL NAME IN"],
      badge: {
        text: "2nd Place",
        color: "bg-blue-500",
      },
      children: (
        <>
          Our project consists of a website where community members can post and
          draw attention to issues and possible beautification projects within
          the community. Anyone can submit a request featuring a category,
          location, description, and multiple photos, and by visiting the site
          anyone can see the requests, act on them, and mark them resolved.
          Additionally, visitors to the site can filter the requests by category
          or text content so as to streamline their browsing and resolution.
        </>
      ),
    },
    {
      title: "Queen City Stops",
      image: queencitystops,
      alt: "Video Game of man walking around queen city",
      link: "https://zoaib.itch.io/queen-city-stops",
      authors: [
        "Zoaib Sihorwala",
        "Sheerabdhi Niranjan",
        "Prathyek Poojary",
        "Faiz Shamim",
      ],
      badge: {
        text: "1st Place",
        color: "bg-yellow-500",
      },
      children: (
        <>
          Queen City Stops is a fun adventure game which takes the player on a
          journey through the city of Charlotte to educate them about modern day
          challenges of society and their solutions.
        </>
      ),
    },
    {
      title: "AltSource",
      image: altsource,
      alt: "AltSource",
      link: "https://queencityhacks.dhanvimovva.repl.co/index.html/",
      authors: ["Dhanvi Movva", "Josh Adeleke"],
      children: (
        <>
          AltSource is a website to inform people about various energy sources,
          and helping people find alternative energy sources to fossil fuels, in
          order to combat climate change.
        </>
      ),
    },
    {
      title: "Mindful: Mental Health Support",
      image: mindful,
      alt: "Mindful: Mental Health Support",
      link: "https://qch-mental-health.plottingpenguin.repl.co/",
      authors: ["Sushanth Yarlagadda", "Daniel Wang", "Matthew George"],
      badge: {
        text: "Social Good Award Winner",
        color: "bg-green-500",
      },
      children: (
        <>
          Mindful is a website that provides mental health support to people by
          connecting them with mental health professionals of certain
          specializations.
        </>
      ),
    },
    {
      title: "Inclopedia",
      image: inclopedia,
      alt: "Inclopedia",
      link: "https://inclopedia.aneeshsuddala.repl.co/",
      authors: ["Aneesh Suddala", "Bhava Siddula", "Tanush Patil"],
      badge: {
        text: "Social Good Award Winner",
        color: "bg-green-500",
      },
      children: (
        <>
          Inclopedia is an encyclopedia for charlotte that teaches and
          informs/helps that incites change. This website spreads awareness
          about charlottes problems and what you can do to help .
        </>
      ),
    },
    {
      title: "Queen City Blood Donations",
      image: queencityblooddonations,
      alt: "Queen City Blood Donations",
      link: "https://blood-donation.sksk11.repl.co/",
      authors: [
        "Joshua Karickal",
        "Siddarth Monimaran",
        "Noak Karickal",
        "Varenya Katta",
      ],
      children: (
        <>
          Queen City Blood Donations is a website that will help get access to
          blood donations and availabilities of where it is needed. In the end
          this website goal is to help save lives and reduce the loss of people
          our nation has from blood loss.
        </>
      ),
    },
    {
      title: "Queen City Homeless Housing",
      image: queencityhomelesshousing,
      alt: "Queen City Homeless Housing",
      link: "https://mainproject.absurdturtle.repl.co/",
      authors: [
        "Nikhil Ambavaram",
        "Lalit Julapalli",
        "Neel Date",
        "Aditya Lakamsani",
      ],
      badge: {
        text: "3rd Place",
        color: "bg-purple-500",
      },
      children: (
        <>
          Queen City Homeless Housing is a website that allows homeless people
          to find roommates to share the rent for a house and also helps them
          find a job.
        </>
      ),
    },
    {
      title: "Fast Fashion",
      image: fastfashion,
      alt: "Fast Fashion",
      link: "https://concious-consumerism.sentient-pineapple.repl.co/index.html",
      authors: ["Shreeya Wadodkar", "Ananya Kollengreth", "Ruhi Tambe"],
      badge: {
        text: "Creativity Award Winner",
        color: "bg-pink-500",
      },
      children: (
        <>
          Fast Fashion is a website that helps people understand the impact of
          fast fashion on the environment and how they can help reduce it. This
          site educates consumers on Fast Fashion and gives resources to
          practice conscious consumerism.
        </>
      ),
    },
  ];

  return (
    <Section id="main">
      <Title text="Projects" />
      <div className="md:columns-2 lg:columns-3 xl:columns-4 mt-10">
        {projects.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </Section>
  );
};

interface ProjectCardProps {
  title: string;
  image: StaticImageData;
  alt: string;
  link: string;
  authors: string[];
  children: React.ReactNode;
  badge?: BadgeProps;
}

const ProjectCard = ({
  title,
  image,
  alt,
  link,
  authors,
  children,
  badge,
}: ProjectCardProps) => {
  return (
    <div className="flex flex-col break-inside-avoid-column group hover:scale-105 transition-all shadow-2xl mb-5">
      <a className="relative -mb-2" href={link}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-all text-center">
          Check out the <span className="text-cyan-500 underline">project</span>
          !
        </div>
        <Image
          src={image}
          alt={alt}
          className="rounded-t-2xl group-hover:brightness-50 transition-all"
        />
      </a>
      <div className="rounded-b-2xl bg-base p-5">
        <h3 className="text-xl font-special underline pb-2">{title}</h3>
        {badge && <Badge {...badge} />}
        <br />
        <br />
        {children}

        <br />
        <a className="text-cyan-500" href={link}>
          <span className="underline">Link</span>{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
        <br />
        <span className="text-gray-400 text-sm">
          {/* unicode join */}
          {authors
            .map((author) => "@" + author.replace(" ", "").toLowerCase())
            .join(" \u2022 ")}
        </span>
      </div>
    </div>
  );
};

interface BadgeProps {
  text: string;
  color: string;
}

const Badge = ({ text, color }: BadgeProps) => {
  return (
    <div
      className={
        "inline-block " +
        color +
        " rounded-full px-3 py-1 text-sm font-semibold text-white mr-2"
      }
    >
      {text}
    </div>
  );
};

export default Projects;
