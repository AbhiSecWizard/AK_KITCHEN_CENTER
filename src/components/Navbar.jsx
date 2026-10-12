
import { useState } from "react";
import { FaPhoneAlt, FaTools } from "react-icons/fa";
import logo from "../assets/ak_logo.webp"
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Why Choose Us", href: "#whychooseus" },
  { name: "Services", href: "#service" },
  { name: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id) => {
    setIsMenuOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#101212]/95 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        {/* Logo */}
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-3 text-left"
        >
          <img src={logo} className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500"/>

        

          <span className="text-lg font-extrabold leading-tight">
            AK KITCHEN
            <span className="block text-orange-500">CENTER</span>
          </span>
        </button>

        {/* Desktop Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href.slice(1))}
              className="text-sm font-semibold text-gray-300 transition hover:text-orange-500"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Desktop Call */}
        <a
          href="tel:+917300116190"
          className="hidden items-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-bold lg:flex"
        >
          <FaPhoneAlt />
          Call Now
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="rounded-lg border border-white/20 p-2 lg:hidden"
        >
          {isMenuOpen ? (
            <span className="px-1 text-xl">✕</span>
          ) : (
            <span className="px-1 text-xl">☰</span>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-[#101212] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[500px] border-t border-white/10 opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-5 py-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href.slice(1))}
              tabIndex={isMenuOpen ? 0 : -1}
              className="border-b border-white/5 py-3 text-left font-medium text-gray-300 hover:text-orange-500"
            >
              {link.name}
            </button>
          ))}

          <a
            href="tel:+917300116190"
            tabIndex={isMenuOpen ? 0 : -1}
            className="mt-4 flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3 font-bold"
          >
            <FaPhoneAlt />
            Call Now
          </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
