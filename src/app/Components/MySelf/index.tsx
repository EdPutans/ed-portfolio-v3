import AboutMeSection from "../AboutMeSection";
import "./index.css";

type Props = {};

const Separator = () => {
  return <div className="separator" />;
};

const Myself = (props: Props) => {
  return (
    <div>
      <AboutMeSection />
      <Separator />
    </div>
  );
};

export default Myself;
