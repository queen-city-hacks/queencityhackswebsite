import notionInfo from "../lib/notionInfo";
import NotionPage from "../components/NotionPage";
import { GetStaticProps } from "next";
import { ExtendedRecordMap } from "notion-types";
import Footer from "../components/Footer";

export const getStaticProps: GetStaticProps = async (context) => {
  return notionInfo("60d43be67ba64d5e9c602c2337aa85f0");
};

export default function Team({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <div className="relative pb-10 md:pb-0">
      <NotionPage recordMap={recordMap} />
      <Footer />
    </div>
  );
}
