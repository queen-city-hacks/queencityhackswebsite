import {
  faBars,
  faCircleXmark,
  faMoon,
  faSun,
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

  return (
    <>
      <div className="flex justify-between items-center h-16 p-10 py-16 bg-lightModeBase dark:bg-base dark:text-white">
        <div className="cursor-pointer">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={140} height={90} />
          </Link>
        </div>
        <div className="items-center hidden lg:block">
          <Link href="/">
            <a className="dark:text-white hover:dark:text-white-500 ml-10">
              Home
            </a>
          </Link>
          <Link href="/team">
            <a className="dark:text-white hover:dark:text-white-500 ml-10">
              Meet The Team
            </a>
          </Link>
          <Link href="">
            <a
              className="dark:text-white hover:dark:text-white-500 ml-10"
              onClick={() => {
                alert("work in progress 🤫");
              }}
            >
              Register
            </a>
          </Link>
        </div>
        <div className="flex gap-5" id="important">
          <FontAwesomeIcon
            icon={faSun}
            className="hidden dark:block cursor-pointer hover:scale-110 transition hover:text-yellow-300"
            size="2x"
            onClick={() => setDarkMode("light")}
          />
          <FontAwesomeIcon
            icon={faMoon}
            className="block dark:hidden cursor-pointer hover:scale-110 transition hover:text-blue-600"
            size="2x"
            onClick={() => setDarkMode("dark")}
          />

          <FontAwesomeIcon
            icon={faBars}
            className="lg:hidden cursor-pointer hover:scale-110 transition"
            size="2x"
            onClick={() => setDropdownOpen(true)}
          />
        </div>
      </div>
      {dropdownOpen && (
        <div
          className={
            "py-5 lg:hidden bg-lightModeBaseLight dark:bg-baseLight absolute w-screen top-0 "
          }
        >
          <div className="relative flex flex-col">
            <div className="flex absolute right-10 top-2">
              <FontAwesomeIcon
                icon={faCircleXmark}
                size="lg"
                onClick={() => setDropdownOpen(false)}
                className="dark:text-white hover:text-gray-400 hover:dark:text-gray-300 cursor-pointer"
              />
            </div>
            <Link href="/">
              <a className="dark:text-white hover:text-gray-600 hover:dark:text-gray-300 py-2">
                Home
              </a>
            </Link>
            <Link href="/team">
              <a className="dark:text-white hover:text-gray-600 hover:dark:text-gray-300 py-2">
                Meet The Team
              </a>
            </Link>
            <Link href="">
              <a
                className="dark:text-white hover:text-gray-600 hover:dark:text-gray-300 py-2"
                onClick={() => {
                  alert("work in progress 🤫");
                }}
              >
                Register
              </a>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
