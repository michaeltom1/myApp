import { mich } from "../assets/assets";
import Project from "./Project";
import ContactForm from "./ContactForm";
import { useData } from "../Context/DataProvider";
import About from "./About";
import Base from "../features/Base";
import { LuComponent,LuLayoutGrid, } from "react-icons/lu";
import { useState } from "react";
import NavigationBar from "./NavigationBar";
const Hero = () => {
  const { active } = useData();
  const [cping, setCping] = useState(false)

  return (
    <main className="min-h-screen bg-[#15161c] px-2 text-white overflow-hidden">
      <div className="w-full h-[50vh] relative ">
        <div className="w-full rounded-xl h-52 bg-[#21232c] absolute bottom-0 flex justify-center backdrop-blur-md">
          <img
            src={mich}
            alt=""
            className="object-cover object-center rounded-full size-52 bg-slate-300 absolute -top-1/2 border-[0.5rem] border-[#15161c] z-50"
          />

          <div className="w-full rounded-xl h-20 absolute bottom-0 text-center text-white 0bg-slate-300">
            <p className="text-3xl font-medium">Michael Tom</p>
          </div>
        </div>

        <div className="flex justify-between">
          {/* <LuComponent className="text-2xl" /> */}
          <div className="z-50" onClick={() => setCping(!cping)}>
            <Base className={`z-50 ${cping && "cping"}`} radius="rounded-full">
              {" "}
              {/* <LuLayoutGrid className="text-2xl" />{" "} */}
            </Base>
          </div>
          <LuLayoutGrid className="text-2xl" />
        </div>
      </div>
      <div
        className={`${!cping ? "hidden" : "block"} fixed inset-0 h-screen bg-black`}
      >
      </div>
      <div className="w-full min-h-[50vh] py-4 pb-16 flex justify-center items-center text-white">
        {active === "Home" && (
          <div>
            <Base>
              <h1 className="text-4xl">
                <span className="text-sm text-primary font-mono">
                  👋 Hi i am,
                </span>{" "}
                <br /> Michael Tom
              </h1>
              <p>
                I am a Web Developer who specialized in creating responsive and
                user-friendly websites.
              </p>
            </Base>
          </div>
        )}
        {active === "Project" && <Project />}
        {active === "Contact" && <ContactForm />}
        {active === "About" && <About />}
      </div>
    </main>
  );
};

export default Hero;
