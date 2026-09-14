import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const icons = {
  phone: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <path
        d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.4 21 3 13.6 3 4.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.24.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  ),
  email: (
    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  ),
  github: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2C6.48 2 2 6.58 2 12.19c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05a9.36 9.36 0 015 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0022 12.19C22 6.58 17.52 2 12 2z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M6.94 5a2 2 0 11-4-.02 2 2 0 014 .02zM7 8.48H3V21h4V8.48zm6.32 0H9.35V21h3.97v-6.4c0-3.57 4.6-3.86 4.6 0V21H21v-7.93c0-6.17-6.78-5.94-7.68-2.91V8.48z" />
    </svg>
  ),
};

const contactDetails = [
  {
    key: "phone",
    label: "Phone",
    value: "+212 687 690 682",
    href: "https://wa.me/212687690682",
    external: true,
  },
  {
    key: "email",
    label: "Email",
    value: "said.elfariss.dev@gmail.com",
    href: `mailto:said.elfariss.dev@gmail.com?subject=${encodeURIComponent(
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
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/said-el-fariss",
    href: "https://www.linkedin.com/in/said-el-fariss",
    external: true,
  },
];

const ContactInfoCard = ({ index, iconKey, label, value, href, external }) => (
  <motion.a
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    href={href}
    target={external ? "_blank" : undefined}
    rel={external ? "noopener noreferrer" : undefined}
    className="flex items-center gap-4 bg-black-100 rounded-2xl p-6 hover:bg-black-200 transition-colors"
  >
    <div className="shrink-0 w-12 h-12 rounded-full bg-tertiary flex items-center justify-center text-[#915EFF]">
      {icons[iconKey]}
    </div>
    <div className="min-w-0">
      <p className="text-secondary text-[13px] uppercase tracking-wider">
        {label}
      </p>
      <p className="text-white font-medium text-[16px] truncate">{value}</p>
    </div>
  </motion.a>
);

const ContactInfo = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={styles.sectionHeadText}>Contact Info.</h2>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {contactDetails.map((item, index) => (
          <ContactInfoCard
            key={item.key}
            index={index}
            iconKey={item.key}
            label={item.label}
            value={item.value}
            href={item.href}
            external={item.external}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(ContactInfo, "contact-info");
