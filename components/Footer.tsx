import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  faDiscord,
  faGithub,
  faInstagram,
  IconDefinition as BrandIconDefinition,
  IconLookup,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-base">
      <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
          <Link href="/" className="">
            <div className="flex items-center">
              <Image src="/logo.png" alt="logo" width={140} height={90} />
              <span className="self-center text-2xl font-semibold font-special whitespace-nowrap hidden lg:block dark:text-white">
                queen_city_hacks
              </span>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Support Us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://www.queencityhacks.com/donate"
                  className="hover:underline"
                >
                  Donate
                </a>
              </li>
              <li>
                <a
                  href="https://www.queencityhacks.com/prospectus.pdf"
                  className="hover:underline"
                >
                  Sponsorship Prospectus
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Follow us
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="https://github.com/queen-city-hacks"
                  className="hover:underline "
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href="https://www.queencityhacks.com/discord"
                  className="hover:underline"
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              More info
            </h2>
            <ul className="text-gray-600 dark:text-gray-400">
              <li className="mb-4">
                <a
                  href="mailto:contact@queencityhacks.com"
                  className="hover:underline"
                >
                  Email us
                </a>
              </li>
              <li>
                <a
                  href="https://bank.hackclub.com/queencityhacks"
                  className="hover:underline"
                >
                  Finances
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <a href="https://www.queencityhacks.com" className="hover:underline">
            Queen City Hacks™
          </a>
          .
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <SocialIcon
            name="Email"
            icon={faEnvelope}
            url="mailto:ayush@queencityhacks"
          />
          <SocialIcon
            name="Instagram"
            icon={faInstagram}
            url="https://www.instagram.com/p/CkZSVSXuSPw/?utm_source=ig_web_copy_link"
          />
          <SocialIcon
            name="Github"
            icon={faGithub}
            url="https://github.com/queen-city-hacks"
          />
          <SocialIcon
            name="Discord"
            icon={faDiscord}
            url="https://www.queencityhacks.com/discord"
          />
        </div>
      </div>
    </footer>
  );
};

interface SocialIconProps {
  name: string;
  url: string;
  icon: IconLookup | BrandIconDefinition;
}

const SocialIcon = ({ name, url, icon }: SocialIconProps) => {
  return (
    <a
      href={url}
      className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
    >
      <FontAwesomeIcon icon={icon} />
      <span className="sr-only">{name}</span>
    </a>
  );
};

export default Footer;
