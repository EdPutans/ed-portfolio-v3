import "./index.css";

type Props = {};

const AboutMeSection = (props: Props) => {
  return (
    <div>
      {/* placeholder round image with 250x250px */}
      <div className="about-me-section">
        <div >
          <img  src="https://via.placeholder.com/250" alt="placeholder"  className="about-me-section_image"/>
        </div>
        <div style={{display: 'FLEX', flexDirection:'column', }}>
          <h1  className="about-me-section_text">Ed Perkele</h1>
          <h2 className="about-me-section_text_sub">Fullstack engineer</h2>
          <p className="about-me-section_text_description">
              Developer. Teacher. Absolute cunt. Your mom would not approve me sleeping over.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
