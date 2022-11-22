import Title from "./Title";

interface SectionProps {
  children?: React.ReactNode;
  id: string;
}

const Section = ({ children, id }: SectionProps) => {
  return (
    <section
      className="bg-baseDark flex flex-col dark:text-white p-10 relative pb-20"
      id={id}
    >
      {children}
    </section>
  );
};

export default Section;
