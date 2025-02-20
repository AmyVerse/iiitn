"use client"; // Required for Next.js 13+ app directory
import { motion } from "framer-motion";
import { X } from "lucide-react"; // Icons
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

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
        className="fixed right-0 top-0 z-50 h-screen w-[43vh] bg-gray-900 p-5 text-white shadow-lg"
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "5%" : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 15 }}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-5 top-5 text-white"
        ></button>
        <nav className="mt-36">
          <ul className="space-y-4">
            <li className="transition hover:text-orange-500">Home</li>
            <li className="transition hover:text-orange-500">About</li>
            <li className="transition hover:text-orange-500">Services</li>
            <li className="transition hover:text-orange-500">Contact</li>
          </ul>
        </nav>
      </motion.div>

      {/* Hamburger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="right-5 top-6 z-50 flex flex-col gap-1 p-2 text-white shadow-md"
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
      >
        {isOpen ? (
          <X size={28} />
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
