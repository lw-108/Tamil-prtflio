import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="logo-item">
      <img
        src={icon.imgPath}
        alt={icon.name}
        loading="lazy"
        draggable="false"
      />
    </div>
  );
};

const LogoShowcase = () => {
  // ✅ Duplicate list automatically
  const icons = [...logoIconsList, ...logoIconsList];

  return (
    <section className="logo-showcase">
      {/* Gradient Fade Edges */}
      <div className="fade-left" />
      <div className="fade-right" />

      {/* Marquee Track */}
      <div className="marquee">
        <div className="marquee-track">
          {icons.map((icon, index) => (
            <LogoIcon key={index} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
