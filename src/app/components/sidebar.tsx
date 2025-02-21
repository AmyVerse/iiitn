"use client"; // Required for Next.js 13+ app directory
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Icons
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    home: false,
    about: false,
    services: false,
    contact: false,
  });

  const toggleMenu = (menu: keyof typeof openMenus) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          style={{ cursor: `url('/cursor.svg'), pointer` }}
        />
      )}

      {/* Sidebar */}
      <motion.div
        className="fixed right-0 top-0 z-50 h-screen w-[36vh] bg-[#472082] p-5 text-white shadow-lg sm:w-[43vh]"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "5%" : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-12 top-10 z-50 flex flex-col gap-1 p-2 text-white"
        >
          <div className="relative h-8 w-8">
            <div className="absolute left-0 top-0 h-0.5 w-full rotate-45 bg-white"></div>
            <div className="absolute left-0 top-0 h-0.5 w-full -rotate-45 bg-white"></div>
          </div>
        </button>
        <nav className="mt-24 px-10 font-[Poppins] text-xl font-normal">
          <ul className="">
            {(
              ["home", "about", "services", "contact"] as Array<
                keyof typeof openMenus
              >
            ).map((item, index, array) => (
              <li
                key={item}
                className={`border-t-2 ${
                  index === array.length - 1 ? "border-b-2" : ""
                } border-[#8440e4] py-2 transition-all duration-200 hover:bg-[#8440e4] hover:px-5`}
              >
                <button
                  onClick={() => toggleMenu(item)}
                  className="w-full text-left capitalize"
                >
                  {item}
                </button>
                {openMenus[item] && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-2 pl-5"
                  >
                    <li className="py-1">Submenu 1</li>
                    <li className="py-1">Submenu 2</li>
                  </motion.ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </motion.div>

      {/* Hamburger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="z-50 flex flex-col gap-1 p-2 text-white"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? (
          <X size={30} />
        ) : (
          <div className="flex flex-col gap-1.5">
            <div className="h-1 w-8 rounded-full bg-white"></div>{" "}
            {/* Small Left */}
            <div className="h-1 w-5 self-end rounded-full bg-white"></div>{" "}
            {/* Full Width */}
            <div className="h-1 w-8 rounded-full bg-white"></div>{" "}
            {/* Half Right */}
          </div>
        )}
      </motion.button>
    </div>
  );
}
