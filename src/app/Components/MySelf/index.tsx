import AboutMeSection from "../AboutMeSection";
import "./index.css";

type Props = {};

export const Separator = () => {
  return <div className="separator" />;
};

const Myself = (props: Props) => {
  return (
    <div>
      <AboutMeSection />
      {/* <Separator /> */}
    </div>
  );
};

export default Myself;
