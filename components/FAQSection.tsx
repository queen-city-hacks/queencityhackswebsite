const FAQSection = () => {
  return (
    <section className="bg-baseDark flex flex-col dark:text-white p-10 relative pb-20">
      <h2 className="text-3xl font-bold ">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        <FAQ question="What is Queen City Hacks?">
          Queen City Hacks is a two day, in-person, high-school hackathon that
          celebrates the creativity and innovation of Charlotte’s high school
          students.
        </FAQ>
        <FAQ question="What will we do?">
          We will use computer science and data science to create projects.
          There is no specific program or skill which we expect people to know
          beforehand.
        </FAQ>
        <FAQ question="How much does it cost to join?">
          This Hackathon is 100% free to join so all you have to do is sign up.
          Thanks to our sponsors we are able to host this event without any
          fees. We would greatly appreciate any Donations as it would improve
          the Hackathon greatly.
        </FAQ>
        <FAQ question="Who can participate?">
          Our primary patrons are mostly concentrated around the Greater
          Charlotte Area . The majority of our patrons we advocate consist from
          grades 9-12, however, if people grades 8 and under would like to
          participate then they may do so.
        </FAQ>
        <FAQ question="What are the prizes?">
          Prizes include Rasperry Picos, plaques, gift cards and much much more
          all thanks to our sponsors. <b />
          Check out the{" "}
          <a
            href="https://docs.google.com/document/d/1Gaai01o76XlidzoVstPyRxORyfzul2glYVEd41lC7A4/edit?usp=sharing"
            className="text-[#3B82F6] underline"
          >
            Rubric
          </a>{" "}
          to see what you can do to win!
        </FAQ>
        <FAQ question="When is the event?">November 19th-20th, 2022</FAQ>
      </div>
    </section>
  );
};
export default FAQSection;

interface FAQProps {
  question: string;
  children?: React.ReactNode;
}

const FAQ = ({ question, children }: FAQProps) => {
  return (
    <div className="bg-base p-5 rounded-2xl shadow-2xl hover:scale-105 transition-all">
      <h2 className="text-2xl font-bold underline">{question}</h2>
      <p className="text-lg pt-3">{children}</p>
    </div>
  );
};
