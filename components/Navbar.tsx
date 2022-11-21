import {
  faBars,
  faCircleXmark,
  faMoon,
  faSun,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  setDarkMode: (mode: "light" | "dark") => void;
}

const Navbar = ({ setDarkMode }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navbarLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Meet the Team",
      href: "/#team",
    },
    {
      name: "Projects",
      href: "/projects",
    },
  ];

  return (
    <>
      <div className="flex-col flex bg-lightModeBase dark:bg-base dark:text-white">
        <div className="flex justify-between items-center h-16 p-10 py-16">
          <div className="cursor-pointer">
            <Link href="/">
              <Image src="/logo.png" alt="logo" width={140} height={90} />
            </Link>
          </div>
          <div className="items-center block">
            {navbarLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <a className="text-white hover:text-white-500 ml-10 hover:font-bold hidden lg:inline">
                  {link.name}
                </a>
              </Link>
            ))}
            {dropdownOpen ? (
              <FontAwesomeIcon
                icon={faXmark}
                className="lg:hidden cursor-pointer hover:scale-110 transition"
                size="2x"
                onClick={() => setDropdownOpen(false)}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="lg:hidden cursor-pointer hover:scale-110 transition"
                size="2x"
                onClick={() => setDropdownOpen(true)}
              />
            )}
          </div>
        </div>
        {dropdownOpen && (
          <div className="flex flex-col pb-5 lg:hidden">
            {navbarLinks.map((link) => (
              <Link href={link.href} key={link.name}>
                <a className="text-gray-300  px-5 py-2 hover:bg-baseDark hover:text-white mb-2 mx-2 rounded-lg">
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
