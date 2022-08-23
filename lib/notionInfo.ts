import { NotionAPI } from "notion-client";

export default async function notionInfo(page: string) {
  const notion = new NotionAPI();
  const recordMap = await notion.getPage(page);

  return {
    props: {
      recordMap,
    },
  };
}
