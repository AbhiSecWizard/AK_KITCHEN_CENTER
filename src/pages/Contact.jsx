
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";

const Contact = () => {
  const address = "DLF Phase 4, Shop 5, Ashok Vihar, Gurugram, Haryana";

  return (
    <main id="contact" className="min-h-screen overflow-hidden bg-[#101212] text-white">
      {/* Heading */}
      <section className="px-5 pb-10 pt-16 text-center sm:px-8 sm:pt-20">
        <span className="inline-flex rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
          Contact Us
        </span>

        <h1 className="mt-5 text-3xl font-extrabold sm:text-4xl md:text-5xl">
          Get In Touch With{" "}
          <span className="text-orange-500">AK Kitchen Center</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Need professional kitchen appliance repair? Contact our team
          for gas stove, hob, chimney, and cooking range services.
          We're ready to help with your repair needs.
        </p>
      </section>

      {/* Contact Details + Map */}
      <section className="px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-[#1b1e1e] p-6 sm:p-8">
            <h2 className="text-2xl font-bold">
              Contact Information
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-400">
              Get in touch with us for appointments and appliance
              repair enquiries.
            </p>

            <div className="mt-8 space-y-7">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-500">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold">Office Address</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    {address}
                  </p>

                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 hover:text-orange-300"
                  >
                    Get Directions <FaArrowRight />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-500">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="font-bold">Email Address</h3>
                  <a
                    href="mailto:a70156673@gmail.com"
                    className="mt-2 block break-all text-sm text-gray-400 transition hover:text-orange-400"
                  >
                    a70156673@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-500">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h3 className="font-bold">Call Us</h3>
                  <a
                    href="tel:+917300116190"
                    className="mt-2 block text-sm text-gray-400 transition hover:text-orange-400"
                  >
                    +91 7300116190
                  </a>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-500">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h3 className="font-bold">Service Area</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Gurgaon, Meerut, Jaipur
                  </p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500/10 text-xl text-orange-500">
                  <FaClock />
                </div>

                <div>
                  <h3 className="font-bold">Working Hours</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-400">
                    Contact us to confirm availability and appointment
                    timings.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+917300116190"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-5 py-3.5 text-sm font-bold transition hover:bg-orange-600"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/917300116190"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-green-500/40 bg-green-500/10 px-5 py-3.5 text-sm font-bold text-green-400 transition hover:bg-green-500 hover:text-white"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Google Maps */}
          <div className="flex min-h-[400px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#1b1e1e] sm:min-h-[500px]">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 p-5 sm:p-6">
              <div>
                <h2 className="font-bold sm:text-lg">
                  Find Our Location
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  AK Kitchen Center
                </p>
              </div>

              <FaMapMarkerAlt className="text-2xl text-orange-500" />
            </div>

            <iframe
              title="AK Kitchen Center location map"
              src={`https://maps.google.com/maps?q=${encodeURIComponent("DLF Phase 4, Gurugram, Haryana, India")}&output=embed`}
              className="min-h-[350px] w-full flex-1 sm:min-h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-[#171a1a] px-5 py-12 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              We're Here to Help
            </p>
            <h2 className="mt-2 text-2xl font-extrabold">
              Need Your Kitchen Appliance Repaired?
            </h2>
          </div>

          <a
            href="tel:+917300116190"
            className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-7 py-4 font-bold transition hover:bg-orange-600"
          >
            <FaPhoneAlt />
            +91 7300116190
            <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Contact;
