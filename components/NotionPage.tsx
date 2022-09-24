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
