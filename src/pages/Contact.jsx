
import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaClock,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
  FaTools,
  FaSpinner,
} from "react-icons/fa";

const API_URL = (import.meta.env.VITE_BACKEND_URL || "").replace(/\/+$/, "");

const initialForm = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const contactDetails = [
  {
    title: "Office Address",
    value: "DLF Phase 4, Shop 5, Ashok Vihar, Gurugram, Haryana",
    icon: FaMapMarkerAlt,
    link: null,
  },
  {
    title: "Email Address",
    value: "a70156673@gmail.com",
    icon: FaEnvelope,
    link: "mailto:a70156673@gmail.com",
  },
  {
    title: "Call Us",
    value: "+91 73001 16190",
    icon: FaPhoneAlt,
    link: "tel:+917300116190",
  },
  {
    title: "Service Areas",
    value: "Gurgaon, Meerut and Jaipur",
    icon: FaMapMarkerAlt,
    link: null,
  },
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#111414] px-4 py-3.5 text-sm text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 disabled:cursor-not-allowed disabled:opacity-60";

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const address =
    "DLF Phase 4, Shop 5, Ashok Vihar, Gurugram, Haryana";

  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    "DLF Phase 4, Gurugram, Haryana, India"
  )}&output=embed`;

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    if (status.message) {
      setStatus({ type: "", message: "" });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    setStatus({ type: "", message: "" });

    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      setStatus({
        type: "error",
        message: "Please complete your name, email and message.",
      });
      return;
    }

    if (name.length > 100) {
      setStatus({
        type: "error",
        message: "Name must be 100 characters or fewer.",
      });
      return;
    }

    if (email.length > 254) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    if (message.length > 3000) {
      setStatus({
        type: "error",
        message: "Message must be 3000 characters or fewer.",
      });
      return;
    }

    if (phone && !/^[+\d\s()-]{7,20}$/.test(phone)) {
      setStatus({
        type: "error",
        message: "Please enter a valid phone number.",
      });
      return;
    }

    if (!API_URL) {
      setStatus({
        type: "error",
        message:
          "Backend URL is not configured. Please contact us by phone or WhatsApp.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          message,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        throw new Error(
          data?.message || "Unable to send your message. Please try again."
        );
      }

      setForm(initialForm);
      setStatus({
        type: "success",
        message:
          data.message ||
          "Your message has been sent successfully. Thank you!",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message === "Failed to fetch"
            ? "Cannot connect to the server. Please check your connection or contact us by phone."
            : error.message ||
              "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      id="contact"
      className="scroll-mt-24 overflow-hidden bg-[#101212] text-white"
    >
      {/* Hero heading */}
      <section className="relative px-5 pb-12 pt-16 sm:px-8 sm:pb-16 sm:pt-24">
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
            <FaTools />
            Contact AK Kitchen Center
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Let's Fix Your
            <span className="block text-orange-500">
              Kitchen Appliances
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Need help with your gas stove, hob, chimney or cooking range?
            Tell us what you need, and contact our team for your repair
            enquiry.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Contact information */}
          <div className="rounded-3xl border border-white/10 bg-[#191c1c] p-6 sm:p-8 lg:p-9">
            <p className="text-sm font-bold uppercase tracking-widest text-orange-500">
              Contact Information
            </p>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              We're Here to Help
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-400">
              Reach out to us for service enquiries, appointments and
              kitchen appliance repair assistance.
            </p>

            <div className="mt-8 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-lg text-orange-400">
                      <Icon />
                    </div>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <h3 className="font-bold text-white">
                        {item.title}
                      </h3>

                      {item.link ? (
                        <a
                          href={item.link}
                          className="mt-1.5 block break-words text-sm leading-6 text-gray-400 transition hover:text-orange-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1.5 text-sm leading-6 text-gray-400">
                          {item.value}
                        </p>
                      )}

                      {item.title === "Office Address" && (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-orange-400 transition hover:text-orange-300"
                        >
                          Get Directions <FaArrowRight />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Working hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-orange-500/20 bg-orange-500/10 text-lg text-orange-400">
                  <FaClock />
                </div>

                <div className="pt-0.5">
                  <h3 className="font-bold">Working Hours</h3>
                  <p className="mt-1.5 text-sm leading-6 text-gray-400">
                    Contact us to confirm appointment timings and service
                    availability.
                  </p>
                </div>
              </div>
            </div>

            {/* Quick contact buttons */}
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              <a
                href="tel:+917300116190"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#191c1c]"
              >
                <FaPhoneAlt />
                Call Now
              </a>

              <a
                href="https://wa.me/917300116190"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-3.5 text-sm font-bold text-green-400 transition hover:bg-green-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
            </div>

            <div className="mt-6 rounded-2xl border border-white/5 bg-[#111414] p-4">
              <p className="text-sm leading-6 text-gray-400">
                <span className="font-semibold text-white">
                  Quick tip:
                </span>{" "}
                Mention your appliance type and the issue in your message
                so we can better understand your enquiry.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="rounded-3xl border border-white/10 bg-[#191c1c] p-6 sm:p-8 lg:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-500 text-xl text-white">
                <FaEnvelope />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold sm:text-3xl">
                  Send Us a Message
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Fill in the form below. Required fields are marked with
                  an asterisk (*).
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
              noValidate
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Full Name <span className="text-orange-400">*</span>
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your full name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={100}
                  required
                  disabled={loading}
                  className={inputClass}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Email Address <span className="text-orange-400">*</span>
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={254}
                  required
                  disabled={loading}
                  className={inputClass}
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-sm font-semibold text-gray-200"
                >
                  Phone Number{" "}
                  <span className="font-normal text-gray-500">
                    (Optional)
                  </span>
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  maxLength={20}
                  disabled={loading}
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-semibold text-gray-200"
                  >
                    Your Message{" "}
                    <span className="text-orange-400">*</span>
                  </label>

                  <span className="text-xs text-gray-500">
                    {form.message.length}/3000
                  </span>
                </div>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Describe your appliance and the issue..."
                  value={form.message}
                  onChange={handleChange}
                  maxLength={3000}
                  required
                  disabled={loading}
                  className={`${inputClass} min-h-36 resize-y`}
                />
              </div>

              {/* Status message */}
              {status.message && (
                <div
                  role={status.type === "error" ? "alert" : "status"}
                  aria-live="polite"
                  className={`flex items-start gap-3 rounded-xl border p-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "border-green-500/20 bg-green-500/10 text-green-300"
                      : "border-red-500/20 bg-red-500/10 text-red-300"
                  }`}
                >
                  {status.type === "success" ? (
                    <FaCheckCircle className="mt-1 shrink-0" />
                  ) : (
                    <FaEnvelope className="mt-1 shrink-0" />
                  )}

                  <p>{status.message}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white shadow-lg shadow-orange-500/10 transition hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-[#191c1c] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending Your Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane />
                  </>
                )}
              </button>

              <p className="text-center text-xs leading-5 text-gray-500">
                Your enquiry will be sent to our team by email.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="px-5 pb-16 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-[#191c1c]">
          <div className="flex items-center justify-between gap-4 p-6 sm:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
                Find Us
              </p>

              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Find Our Location
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Gurugram, Haryana
              </p>
            </div>

            <FaMapMarkerAlt className="shrink-0 text-2xl text-orange-500 sm:text-3xl" />
          </div>

          <iframe
            title="Map showing DLF Phase 4, Gurugram"
            src={mapUrl}
            className="h-[320px] w-full border-t border-white/10 sm:h-[430px]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <p className="mx-auto mt-3 max-w-7xl text-xs leading-5 text-gray-500">
          Note: The map shows the general DLF Phase 4 area, not a verified
          exact business pin. Confirm the business address before publishing.
        </p>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 bg-[#171a1a] px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-400">
              We're Here to Help
            </p>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Need Kitchen Appliance Repair?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
              Contact AK Kitchen Center to discuss your appliance repair
              requirements.
            </p>
          </div>

          <a
            href="tel:+917300116190"
            className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            <FaPhoneAlt />
            +91 73001 16190
            <FaArrowRight />
          </a>
        </div>
      </section>
    </main>
  );
}