import { useState } from "react";
import useLocalStorage from "../lib/useLocalStorage";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  const [darkMode, setDarkMode] = useState("dark");
  return (
    <div className={darkMode}>
      <div className="relative">
        <Navbar setDarkMode={setDarkMode} />
        {children}
        <Footer />
      </div>
    </div>
  );
}
