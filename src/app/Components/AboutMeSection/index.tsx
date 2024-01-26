import "./index.css";

type Props = {};

const AboutMeSection = (props: Props) => {
  return (
    <div>
      {/* placeholder round image with 250x250px */}
      <div className="about-me-section">
        <div style={{ display: "FLEX", flexDirection: "column" }}>
          <h1 className="about-me-section_text">Ed Perkele</h1>
          <h2 className="about-me-section_text_sub">Fullstack engineer</h2>
          <p>Programmer.</p>
          <p>Teacher.</p>
          <p>Biomedical engineer.</p>
          <p>A pain in the arse.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
