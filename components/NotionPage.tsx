import { NotionRenderer } from "react-notion-x";
import Link from "next/link";
import Image from "next/image";
import { Collection } from "react-notion-x/build/third-party/collection";
import "react-notion-x/src/styles.css";
import { ExtendedRecordMap } from "notion-types";

interface Props {
  recordMap: ExtendedRecordMap;
}

export default function NotionPage({ recordMap }: Props) {
  return (
    <>
      <div className="fixed right-5 top-3 z-[250]">
        <Link href="/">
          <a className="px-5 py-1 bg-gray-800 rounded-lg text-white hover:bg-gray-700">
            Home
          </a>
        </Link>
      </div>
      <NotionRenderer
        recordMap={recordMap}
        components={{
          Collection,
          nextImage: Image,
        }}
        fullPage={true}
        previewImages={true}
      />
    </>
  );
}
