import Base from "../features/Base";
import Button from "../features/Button";
const projectData = [
  {
    id: 0,
    title: "cool project",
    description:
      "A brief description of the project, highlighting its features and purpose. A cool project showcasing my skills in web development.",
    link: "github",
  },
  {
    id: 1,
    title: "cool project",
    description:
      "A brief description of the project, highlighting its features and purpose. A cool project showcasing my skills in web development.",
  },
  {
    id: 2,
    title: "cool project",
    description:
      "A brief description of the project, highlighting its features and purpose. A cool project showcasing my skills in web development.",
  },
];

function Project() {
  return (
    <div className="space-y-4">
      {projectData.map((item) => (
        <ProjectCard
          key={item.id}
          title={item.title}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  );
}

export default Project;

const ProjectCard = ({ title, description, link }) => (
  <Base className={"space-y-4"}>
    <h3 className="text-xl font-semibold text-primary">{title}</h3>
    <p className="text-gray-300">{description}</p>
    {link && <Button />}
  </Base>
);

/*
<a
        href={link}
        className="text-blue-500 mt-2 block"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Project
      </a>
*/
