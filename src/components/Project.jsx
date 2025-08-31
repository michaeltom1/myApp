import { useState, useEffect } from "react";
import { useSprings, animated } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

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

// Constants for the card deck
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
});

const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

const trans = (r, s) =>
  `perspective(1500px) rotateX(10deg) rotateY(${
    r / 10
  }deg) rotateZ(${r}deg) scale(${s})`;

function Project() {
  const [gone] = useState(() => new Set());
  const [props, api] = useSprings(projectData.length, (i) => ({
    ...to(i),
    from: from(i),
  }));

  const bind = useDrag(
    ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;

      if (!down && trigger) gone.add(index);

      api.start((i) => {
        if (index !== i) return;
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
        const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
        const scale = down ? 1.1 : 1;

        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });

      if (!down && gone.size === projectData.length)
        setTimeout(() => {
          gone.clear();
          api.start((i) => to(i));
        }, 600);
    }
  );

  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div
          key={i}
          className="absolute w-[90vw] max-w-md will-change-transform touch-none"
          style={{
            transform: "translate(-50%, -50%)",
            left: "50%",
            top: "50%",
            y,
          }}
        >
          <animated.div
            {...bind(i)}
            style={{
              transform: x
                .to((x) => `translate3d(${x}px,0,0)`)
                .to((x) => rot.to((r) => scale.to((s) => trans(r, s)))),
              touchAction: "none",
            }}
          >
            <ProjectCard
              title={projectData[i].title}
              description={projectData[i].description}
              link={projectData[i].link}
            />
          </animated.div>
        </animated.div>
      ))}

      {/* Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-gray-400">
        Swipe cards left or right to navigate
      </div>
    </div>
  );
}

export default Project;

const ProjectCard = ({ title, description, link }) => (
  <div className="group relative overflow-hidden rounded-2xl p-8 bg-[rgba(31,32,35,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.15)] shadow-[0_8px_32px_0_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_16px_48px_0_rgba(0,0,0,0.25)] aspect-[3/4] min-h-[500px] cursor-grab active:cursor-grabbing">
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
