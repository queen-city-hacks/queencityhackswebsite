import notionInfo from "../lib/notionInfo";
import NotionPage from "../components/NotionPage";
import { GetStaticProps } from "next";
import { ExtendedRecordMap } from "notion-types";
import Footer from "../components/Footer";

export const getStaticProps: GetStaticProps = async (context) => {
  return notionInfo("d06912166f2749e4a99e232cfa0833e7");
};

export default function Team({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <div className="relative pb-10 md:pb-0">
      <NotionPage recordMap={recordMap} />
    </div>
  );
}
