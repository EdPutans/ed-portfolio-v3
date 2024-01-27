import "./index.css";

type Props = {
  title: string;
  description: string;
  additionalInfo: string;
  links: {
    url: string;
    text: string;
  }[];
  ContainerProps?: {
    style?: React.CSSProperties;
  };
};

const Card = (props: Props) => {
  return (
    <div className="card" {...props.ContainerProps}>
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <p>{props.additionalInfo}</p>
      {props.links.map((link) => {
        <a href={link.url}>{link.text}</a>;
      })}
    </div>
  );
};

export default Card;
