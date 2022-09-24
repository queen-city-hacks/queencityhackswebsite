import Footer from "./Footer";

const FAQSection = () => {
  return (
    <section className=" bg-lightModeBaseLight dark:bg-baseLight flex flex-col dark:text-white p-10 relative pb-20">
      <h2 className="text-3xl font-bold ">Frequently Asked Questions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        <FAQ question="What is Queen City Hacks?">
          Queen City Hacks is a 12-hour, in-person, high-school hackathon that
          celebrates the creativity and innovation of Charlotte’s high school
          students.
        </FAQ>
        <FAQ question="What is a hackathon?">
          A hackathon is a 24-hour, in-person, high-school hackathon that
          celebrates the creativity and innovation of Charlotte’s high school
          students.
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
          We will be giving away a variety of items at this event.
        </FAQ>
        <FAQ question="When is the event?">
          The dates are going to be between November and December of 2022.
        </FAQ>
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
    <div className="bg-lightModeBase dark:bg-base p-5 rounded-2xl shadow-2xl hover:scale-105 transition-all">
      <h2 className="text-2xl font-bold underline">{question}</h2>
      <p className="text-lg pt-3">{children}</p>
    </div>
  );
};
