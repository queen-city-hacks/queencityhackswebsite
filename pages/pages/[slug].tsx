import { serialize } from "next-mdx-remote/serialize";
import fs from "fs";
import path from "path";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Navbar from "../../components/Navbar";
import useLocalStorage from "../../lib/useLocalStorage";
import Footer from "../../components/Footer";
import Head from "next/head";

interface ParamProps {
  params: { slug: string };
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("mdx-pages"));
  const paths = files.map((file) => ({
    params: { slug: file.replace(".mdx", "") },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: ParamProps) {
  const { slug } = params;
  // get file contect from the folder mdx-pages
  const file = fs.readFileSync(path.join(`mdx-pages/${slug}.mdx`), "utf8");
  // get the mdx content
  const mdxSource = await serialize(file, { parseFrontmatter: true });
  // return the props
  return {
    props: {
      mdxSource,
    },
  };
}

interface MDXPageProps {
  mdxSource: MDXRemoteSerializeResult;
}

const MDXPage = ({ mdxSource }: MDXPageProps) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", "dark");

  const frontmatter = mdxSource.frontmatter;
  let title = "queen_city_hacks";

  if (frontmatter) {
    if (frontmatter.title) {
      title = frontmatter.title + " | queen_city_hacks";
    }
  }

  return (
    <div className={darkMode}>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="relative">
        <div className="min-h-screen flex flex-col">
          <Navbar setDarkMode={setDarkMode} />
          <div className="dark:bg-baseLight bg-lightModeBaseLight flex-grow pb-20">
            <div className="prose dark:prose-invert container mx-auto py-10">
              <MDXRemote {...mdxSource} />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default MDXPage;
