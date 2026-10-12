
import { useRef } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaExpand,
} from "react-icons/fa";
import gasStove from "../assets/images/gas_stove.webp"
import chemney from "../assets/images/cheminey.webp"
import bhatti from '../assets/images/bhatti.webp'
import hob from "../assets/images/hob.webp"
import cooking from "../assets/images/cooking.webp"
const galleryImages = [
  {
    src:gasStove,
    title: "Gas Stove Repair",
    category: "Gas Stove",
  },
  {
    src:hob,
    title: "Professional Hob Repair",
    category: "Hob Repair",
  },
  {
    src:bhatti,
    title: "Commercial Bhatti",
    category: "Commercial Kitchen",
  },
  {
    src: cooking,
    title: "Cooking Range Service",
    category: "Cooking Range",
  },
  {
    src: chemney,
    title: "Kitchen Chimney Repair",
    category: "Chimney",
  },
];

const Gallery = () => {
  const sliderRef = useRef(null);

  const scrollGallery = (direction) => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: direction * sliderRef.current.clientWidth * 0.75,
      behavior: "smooth",
    });
  };

  return (
    <main id="gallery" className="min-h-screen overflow-hidden bg-[#101212] text-white">
      {/* Gallery Heading */}
      <section className="px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-20">
        <span className="inline-block rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
          Our Gallery
        </span>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Our Recent{" "}
          <span className="text-orange-500">Repair Work</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Take a look at some of our kitchen appliance repair work.
          Explore our services and see the care we put into every job.
        </p>
      </section>

      {/* Gallery Slider */}
      <section className="px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">
          {/* Slider Controls */}
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-lg font-bold sm:text-xl">
                Repair Showcase
              </p>
              <p className="mt-1 text-sm text-gray-500">
                Swipe or scroll to explore
              </p>
            </div>

            <div className="hidden gap-3 sm:flex">
              <button
                type="button"
                onClick={() => scrollGallery(-1)}
                aria-label="Scroll gallery left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:border-orange-500 hover:bg-orange-500"
              >
                <FaArrowLeft />
              </button>

              <button
                type="button"
                onClick={() => scrollGallery(1)}
                aria-label="Scroll gallery right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 transition hover:border-orange-500 hover:bg-orange-500"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Horizontally Scrollable Images */}
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-5 [scrollbar-width:thin] [scrollbar-color:#f97316_#202323]"
          >
            {galleryImages.map((image, index) => (
              <article
                key={image.src}
                className="group w-[82%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#1b1e1e] sm:w-[48%] lg:w-[32%]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    width="600"
                    height="420"
                    loading="lazy"
                    decoding="async"
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                    {image.category}
                  </span>

                  <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white shadow-lg transition group-hover:scale-110">
                    <FaExpand />
                  </span>
                </div>

                {/* Image Details */}
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-orange-500">
                      Repair Project {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2 className="mt-2 font-bold sm:text-lg">
                      {image.title}
                    </h2>
                  </div>

                  <span className="text-2xl font-bold text-white/15">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-2 text-center text-xs text-gray-500 sm:hidden">
            ← Swipe left or right →
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-[#171a1a] px-5 py-14 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Need a repair?
            </p>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Your Appliance Could Be Next.
            </h2>

            <p className="mt-2 text-sm text-gray-400">
              Contact AK Kitchen Center for professional repair services.
            </p>
          </div>

          <a
            href="tel:+917300116190"
            className="rounded-full bg-orange-500 px-7 py-4 font-bold transition hover:bg-orange-600"
          >
            Call Now: +91 7300116190
          </a>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
