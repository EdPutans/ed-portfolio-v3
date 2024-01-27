type Project = {
  title: string;
  description: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
  playstoreUrl?: string;
};

export const myProjects:Project[] = [
  {
    title: "My Portfolio",
    description: "My portfolio website built with Angular and Bootstrap.",
    liveUrl: "https://www.alexandercoding.com",
    tech: ["Angular", "Bootstrap"],
    githubUrl: "",
  },{
    title: "My Portfolio",
    description: "My portfolio website built with Angular and Bootstrap.",
    liveUrl: "https://www.alexandercoding.com",
    githubUrl: "",
    tech: ["Angular", "Bootstrap"],
  }
]