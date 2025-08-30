import { useState, useEffect, useRef } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { useData } from "../Context/DataProvider";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [dimensions, setDimensions] = useState({ x: 0, y: 0, size: 0 });

  useEffect(() => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const maxRadius = Math.sqrt(
        Math.pow(Math.max(rect.x, window.innerWidth - rect.x), 2) +
          Math.pow(Math.max(rect.y, window.innerHeight - rect.y), 2)
      );
      setDimensions({
        x: rect.x + rect.width / 2,
        y: rect.y + rect.height / 2,
        size: maxRadius * 2,
      });
    }
  }, []);
  const { active, setActive } = useData();
  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[60] p-2 rounded-full bg-[rgba(31,32,35,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] transition-all duration-300 hover:scale-110"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <LuX className="text-2xl text-[#2ecc71]" />
        ) : (
          <LuMenu className="text-2xl text-[#2ecc71]" />
        )}
      </button>

      {/* Circular expanding background */}
      <div
        className={`fixed z-50 bg-[rgba(31,32,35,0.95)] backdrop-blur-xl transition-transform duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-full`}
        style={{
          width: dimensions.size,
          height: dimensions.size,
          top: dimensions.y - dimensions.size / 2,
          left: dimensions.x - dimensions.size / 2,
          transform: isOpen ? "scale(1)" : "scale(0)",
          transformOrigin: "center",
        }}
      />

      {/* Menu content */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
      >
        <div className="absolute top-0 left-0 h-full w-full flex items-center justify-center">
          <nav className="space-y-12 text-center">
            <a
              href="#"
              className="block text-4xl font-medium text-neutral-300 hover:text-[#2ecc71] transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                setActive("Home");
                setIsOpen(false);
              }}
            >
              Home
            </a>
            <a
              href="#"
              className="block text-4xl font-medium text-neutral-300 hover:text-[#2ecc71] transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                setActive("About");
                setIsOpen(false);
              }}
            >
              About
            </a>
            <a
              href="#"
              className="block text-4xl font-medium text-neutral-300 hover:text-[#2ecc71] transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                setActive("Project");
                setIsOpen(false);
              }}
            >
              Projects
            </a>
            <a
              href="#"
              className="block text-4xl font-medium text-neutral-300 hover:text-[#2ecc71] transition-all duration-300 hover:scale-110"
              onClick={(e) => {
                e.preventDefault();
                setActive("Contact");
                setIsOpen(false);
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
