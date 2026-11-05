const Footer = () => (
  <footer className="relative z-0 max-w-7xl mx-auto sm:px-16 px-6 pb-8 text-center text-secondary text-[12px] leading-relaxed">
    <p>© {new Date().getFullYear()} Said El Fariss</p>
    <p>
      3D model:{" "}
      <a
        href="https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white"
      >
        "Stylized planet"
      </a>{" "}
      by{" "}
      <a
        href="https://sketchfab.com/cmzw"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white"
      >
        cmzw
      </a>
      , licensed under{" "}
      <a
        href="http://creativecommons.org/licenses/by/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white"
      >
        CC BY 4.0
      </a>
      .
    </p>
  </footer>
);

export default Footer;
