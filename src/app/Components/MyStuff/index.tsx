import Card from "../Card";
import { myProjects } from "./projects";
// import "./index.css";

type Props = {};

const MyProjects = (props: Props) => {
  return myProjects.map((project, ind) => {
    return (
      <Card
        ContainerProps={{
          style: {
            marginBottom: ind === myProjects.length - 1 ? 0 : "1rem",
          },
        }}
        key={project.title}
        title={project.title}
        description={project.description}
        additionalInfo={project.tech.join(", ")}
        links={[
          {
            url: project.githubUrl,
            text: "Github",
          },
          {
            url: project.playstoreUrl,
            text: "Playstore",
          },
        ]}
      />
    );
  });
};

const MyStuff = (props: Props) => {
  return (
    <>
      <h1
        style={{
          marginBottom: "1rem",
        }}
      >
        Projects
      </h1>
      <MyProjects />
    </>
  );
};

export default MyStuff;
