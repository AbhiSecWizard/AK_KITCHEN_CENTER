
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
  FaTools,
} from "react-icons/fa";
import logo from "../assets/ak_logo.webp"
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Gallery", path: "/gallery" },
    { name: "Why Choose Us", path: "/whychooseus" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "Gas Stove Repair",
    "Hob Repair",
    "Commercial Bhatti Repair",
    "Cooking Range Repair",
    "Chimney Repair",
  ];

  return (
    <footer className="border-t border-white/10 bg-[#101212] text-white">
      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">

        {/* Brand */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-3 text-2xl font-extrabold"
          >
            <img src={logo} className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white"/>
             

            <span>
              AK KITCHEN
              <span className="block text-orange-500">CENTER</span>
            </span>
          </Link>

          <p className="mt-5 text-sm leading-7 text-gray-400">
            Your trusted partner for kitchen appliance repair.
            We provide professional repair solutions for gas stoves,
            hobs, chimneys, cooking ranges, and more.
          </p>

          <a
            href="tel:+917300116190"
            className="mt-6 inline-flex items-center gap-3 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold transition hover:bg-orange-600"
          >
            <FaPhoneAlt />
            Call Now
            <FaArrowRight />
          </a>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold">
            Quick Links
          </h2>

          <div className="mb-5 mt-3 h-1 w-12 rounded-full bg-orange-500" />

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="group inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-orange-400"
                >
                  <FaArrowRight className="text-xs text-orange-500 transition group-hover:translate-x-1" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold">
            Our Services
          </h2>

          <div className="mb-5 mt-3 h-1 w-12 rounded-full bg-orange-500" />

          <ul className="space-y-4">
            {services.map((service) => (
              <li key={service}>
                <Link
                  to="/service"
                  className="group inline-flex items-start gap-2 text-sm text-gray-400 transition hover:text-orange-400"
                >
                  <FaArrowRight className="mt-1 shrink-0 text-xs text-orange-500 transition group-hover:translate-x-1" />
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div>
          <h2 className="text-lg font-bold">
            Get In Touch
          </h2>

          <div className="mb-5 mt-3 h-1 w-12 rounded-full bg-orange-500" />

          <ul className="space-y-5">
            <li className="flex items-start gap-3">
              <FaPhoneAlt className="mt-1 shrink-0 text-orange-500" />

              <div>
                <p className="text-sm font-semibold">Phone</p>
                <a
                  href="tel:+917300116190"
                  className="mt-1 block text-sm text-gray-400 hover:text-orange-400"
                >
                  +91 7300116190
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaEnvelope className="mt-1 shrink-0 text-orange-500" />

              <div>
                <p className="text-sm font-semibold">Email</p>
                <a
                  href="mailto:a70156673@gmail.com"
                  className="mt-1 block break-all text-sm text-gray-400 hover:text-orange-400"
                >
                  a70156673@gmail.com
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 shrink-0 text-orange-500" />

              <div>
                <p className="text-sm font-semibold">Service Areas</p>
                <p className="mt-1 text-sm leading-6 text-gray-400">
                  Gurgaon, Meerut, Jaipur
                </p>
              </div>
            </li>
          </ul>

          {/* WhatsApp */}
          <a
            href="https://wa.me/917300116190"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2.5 text-sm font-semibold text-green-400 transition hover:bg-green-500 hover:text-white"
          >
            <FaWhatsapp className="text-lg" />
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-[#0b0d0d] px-5 py-5 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-gray-500 sm:text-sm">
            © {new Date().getFullYear()} AK Kitchen Center. All rights reserved.
          </p>

          <a
            href="tel:+917300116190"
            className="text-xs font-medium text-gray-400 transition hover:text-orange-400 sm:text-sm"
          >
            Kitchen Appliance Repair Experts
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
