import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:py-2 md:px-6 dark:bg-base absolute bottom-5 left-5 right-5">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link href="/">
          <a className="hover:underline">queen_city_hacks™</a>
        </Link>
        {/* TODO: license  */}
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a href="https://vercel.com?utm_source=queen-city-hacks&utm_campaign=oss">
            <Image
              src="/powered_by_vercel.svg"
              alt="logo"
              width={212}
              height={44}
            />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
