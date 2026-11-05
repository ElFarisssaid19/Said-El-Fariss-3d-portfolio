import { lazy, Suspense, useCallback, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import Alert from "./Alert";
import CanvasFallback from "./CanvasFallback";

const EarthCanvas = lazy(() => import("./canvas/Earth"));

const CONTACT_EMAIL = "said.elfariss.dev@gmail.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMPTY_FORM = { name: "", email: "", message: "" };

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};
const isEmailjsConfigured = Object.values(emailjsConfig).every(Boolean);

const icons = {
  email: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0022 12.19C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
      <path d="M6.94 5a2 2 0 11-4-.02 2 2 0 014 .02zM7 8.48H3V21h4V8.48zm6.32 0H9.35V21h3.97v-6.4c0-3.57 4.6-3.86 4.6 0V21H21v-7.93c0-6.17-6.78-5.94-7.68-2.91V8.48z" />
    </svg>
  ),
};

const contactDetails = [
  {
    key: "email",
    label: "Email",
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      "Hello Said — Portfolio"
    )}`,
  },
  {
    key: "github",
    label: "GitHub",
    value: "github.com/ElFarisssaid19",
    href: "https://github.com/ElFarisssaid19",
    external: true,
  },
  // TODO: add LinkedIn ({ key: "linkedin", label: "LinkedIn", value, href, external: true })
];

const fieldClassName =
  "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg border-none font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF]";

const ContactLink = ({ iconKey, label, value, href, external }) => (
  <a
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="flex items-center gap-4 bg-tertiary rounded-2xl p-4 hover:bg-black-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF]"
  >
    <div className="shrink-0 w-11 h-11 rounded-full bg-black-100 flex items-center justify-center text-[#915EFF]">
      {icons[iconKey]}
    </div>
    <div className="min-w-0">
      <p className="text-secondary text-[13px] uppercase tracking-wider">
        {label}
      </p>
      <p className="text-white font-medium text-[15px] truncate">{value}</p>
    </div>
  </a>
);

const Contact = () => {
  const formRef = useRef();
  const sendingRef = useRef(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlert = (type, message) => {
    setAlert({ id: Date.now(), type, message });
  };

  const closeAlert = useCallback(() => setAlert(null), []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sendingRef.current) return;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (!name || !email || !message) {
      showAlert("error", "Please fill in all the fields.");
      return;
    }

    if (!EMAIL_PATTERN.test(email)) {
      showAlert("error", "Please enter a valid email address.");
      return;
    }

    if (!isEmailjsConfigured) {
      if (import.meta.env.DEV) {
        console.warn(
          "Contact form disabled: set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY in .env"
        );
      }
      showAlert(
        "error",
        `The contact form is not available right now. Please email me at ${CONTACT_EMAIL}.`
      );
      return;
    }

    sendingRef.current = true;
    setLoading(true);

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: name,
          to_name: import.meta.env.VITE_CONTACT_NAME,
          from_email: email,
          to_email: import.meta.env.VITE_CONTACT_EMAIL,
          message,
        },
        emailjsConfig.publicKey
      );

      showAlert(
        "success",
        "Thank you. I will get back to you as soon as possible."
      );
      setForm(EMPTY_FORM);
    } catch (error) {
      if (import.meta.env.DEV) console.error(error);
      showAlert(
        "error",
        `Something went wrong. Please try again or email me at ${CONTACT_EMAIL}.`
      );
    } finally {
      sendingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contactDetails.map((item) => (
            <ContactLink
              key={item.key}
              iconKey={item.key}
              label={item.label}
              value={item.value}
              href={item.href}
              external={item.external}
            />
          ))}
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className={fieldClassName}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className={fieldClassName}
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={fieldClassName}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className="bg-tertiary py-3 px-8 rounded-xl w-full sm:w-fit text-white font-bold shadow-md shadow-primary disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#915EFF]"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* Fixed height on xl keeps the planet the same size it had before the
          contact links were added to the form panel. */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-[805px] xl:self-center md:h-[550px] h-[350px]"
      >
        <Suspense fallback={<CanvasFallback />}>
          <EarthCanvas />
        </Suspense>
      </motion.div>

      <AnimatePresence>
        {alert && (
          <Alert
            key={alert.id}
            type={alert.type}
            message={alert.message}
            onClose={closeAlert}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
