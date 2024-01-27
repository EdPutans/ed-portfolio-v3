import "./index.css";

type Props = {};

const AboutMeSection = (props: Props) => {
  return (
    <div>
      {/* placeholder round image with 250x250px */}
      <div className="about-me-section">
        <div
          style={{
            display: "FLEX",
            flexDirection: "column",
            height: "calc(100vh - 32px)",
            justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          <div>
            <h1 className="about-me-section_text">Ed Perkele</h1>
            <h2 className="about-me-section_text_sub">Fullstack engineer</h2>

            {/* <div style={{ display: "flex", gap: 60, flexWrap: "wrap" }}> */}
            <div>
              <p className="about-me-section_text_p"> Developer</p>
              <p className="about-me-section_text_p"> Teacher</p>
              <p className="about-me-section_text_p"> Biomedical engineer</p>
              {/* <Separator /> */}
              <p className="about-me-section_text_p"> Musician</p>
              <p className="about-me-section_text_p"> Father</p>
              <p className="about-me-section_text_p"> Husband</p>
              <p className="about-me-section_text_p"> 💛🤍💜🖤</p>
            </div>
          </div>
          <div>
            <a className="about-me-section_link" href="#">
              Github
            </a>
            <a href="#" className="about-me-section_link">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
