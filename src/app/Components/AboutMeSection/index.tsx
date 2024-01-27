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
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
            }}
          >
            <a className="about-me-section_link" href="#">
              <div style={{ width: 30, height: 30 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.09.682-.218.682-.484 0-.238-.009-.868-.014-1.704-2.782.605-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.532 1.03 1.532 1.03.891 1.529 2.341 1.088 2.912.833.091-.646.349-1.086.635-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 7.07c.85.004 1.705.115 2.502.337 1.909-1.296 2.747-1.026 2.747-1.026.547 1.376.203 2.394.1 2.646.64.699 1.026 1.591 1.026 2.682 0 3.841-2.337 4.687-4.565 4.934.359.31.678.919.678 1.852 0 1.335-.012 2.415-.012 2.741 0 .269.18.577.688.479C19.137 20.164 22 16.416 22 12c0-5.523-4.477-10-10-10z"
                  />
                </svg>
              </div>
              Github
            </a>
            <div style={{ display: "flex" }}>
              <a className="about-me-section_link" href="#">
                <div style={{ width: 30, height: 30 }}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22.225 0H1.77C.79 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.77 24h20.452C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0zM3.555 20.452H7.12V9H3.556v11.452zM5.338 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm15.11 13.019h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.852 0-2.134 1.445-2.134 2.939v5.667H9.35V9h3.415v1.561h.045c.477-.9 1.638-1.85 3.37-1.85 3.602 0 4.268 2.37 4.268 5.455v6.286h-.001z" />
                  </svg>
                </div>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
