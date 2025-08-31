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
  <div className="group relative overflow-hidden rounded-2xl p-6 mb-4 bg-[rgba(31,32,35,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.25)]">
    {/* Background blobs */}
    <div
      className="absolute -top-20 -left-20 w-72 h-72 bg-[#2ecc71] rounded-full mix-blend-multiply filter blur-[32px] opacity-40 group-hover:opacity-50 animate-blob"
      style={{ animationDelay: "0s" }}
    />
    <div
      className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#3498db] rounded-full mix-blend-multiply filter blur-[32px] opacity-40 group-hover:opacity-50 animate-blob animation-delay-2000"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="absolute top-1/2 -left-20 w-72 h-72 bg-[#9b59b6] rounded-full mix-blend-multiply filter blur-[32px] opacity-40 group-hover:opacity-50 animate-blob animation-delay-4000"
      style={{ animationDelay: "4s" }}
    />

    {/* Content */}
    <div className="relative z-10 space-y-4">
      <h3 className="text-2xl font-bold text-[#2ecc71] drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
        {title}
      </h3>
      <p className="text-lg text-gray-200 drop-shadow-sm">{description}</p>
      {link && (
        <a
          href={link}
          className="inline-block px-6 py-2 rounded-lg bg-[#2ecc71]/80 text-white font-semibold shadow hover:bg-[#2ecc71] transition-all duration-300 hover:scale-105 hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      )}
    </div>

    {/* Animations */}
    <style>{`
      @keyframes blob {
        0%, 100% {
          transform: translate(0, 0) scale(1);
        }
        25% {
          transform: translate(20px, -30px) scale(1.1);
        }
        50% {
          transform: translate(-20px, 20px) scale(0.9);
        }
        75% {
          transform: translate(-30px, -20px) scale(1.05);
        }
      }
      
      .animate-blob {
        animation: blob 10s ease-in-out infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
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
