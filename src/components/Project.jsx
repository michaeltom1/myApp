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
  <div className="relative overflow-hidden rounded-2xl p-6 mb-4 bg-[rgba(31,32,35,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.25)]">
    {/* Animated blurred blob */}
    <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#2ecc71] rounded-full blur-[48px] opacity-30 animate-blub" />
    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#3498db] rounded-full blur-[40px] opacity-25 animate-blub2" />
    <div className="relative z-10 space-y-4">
      <h3 className="text-2xl font-bold text-[#2ecc71] drop-shadow-lg">
        {title}
      </h3>
      <p className="text-lg text-gray-200 drop-shadow-sm">{description}</p>
      {link && (
        <a
          href={link}
          className="inline-block px-6 py-2 rounded-lg bg-[#2ecc71]/80 text-white font-semibold shadow hover:bg-[#2ecc71] transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </div>
    {/* Blub animations */}
    <style>{`
      @keyframes blub {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(20px) scale(1.1); }
      }
      .animate-blub {
        animation: blub 4s ease-in-out infinite;
      }
      @keyframes blub2 {
        0%, 100% { transform: translateY(0) scale(1); }
        50% { transform: translateY(-20px) scale(1.08); }
      }
      .animate-blub2 {
        animation: blub2 5s ease-in-out infinite;
      }
    `}</style>
  </div>
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
