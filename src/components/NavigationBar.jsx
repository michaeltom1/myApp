import { LuHome, LuUser, LuMail, LuCode } from "react-icons/lu";
import { useData } from "../Context/DataProvider";
const NavigationBar = () => {
  const { active, setActive } = useData();
  return (
    <div className="fixed bottom-0 w-full pb-1">
      <div className="flex justify-around p-3 mx-2 rounded-2xl bg-[rgba(31,32,35,0.65)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] relative">
        <div
          className="absolute h-12 w-12 bg-[#2ecc71] rounded-full blur-[32px] opacity-20 transition-all duration-500 ease-in-out"
          style={{
            left:
              active === "Home"
                ? "8%"
                : active === "About"
                ? "33%"
                : active === "Project"
                ? "58%"
                : "83%",
          }}
        />
        <LuHome
          title="Home"
          className={`text-4xl relative hover:scale-110 transition-all duration-300 ${
            active === "Home" ? "text-[#2ecc71]" : "text-neutral-300"
          }`}
          onClick={() => setActive("Home")}
        />
        <LuUser
          title="About"
          className={`text-4xl hover:scale-110 transition-all duration-300 ${
            active === "About" ? "text-[#2ecc71]" : "text-neutral-300"
          }`}
          onClick={() => setActive("About")}
        />
        <LuCode
          title="Project"
          className={`text-4xl hover:scale-110 transition-all duration-300 ${
            active === "Project" ? "text-[#2ecc71]" : "text-neutral-300"
          }`}
          onClick={() => setActive("Project")}
        />
        <LuMail
          title="Contact"
          className={`text-4xl hover:scale-110 transition-all duration-300 ${
            active === "Contact" ? "text-[#2ecc71]" : "text-neutral-300"
          }`}
          onClick={() => setActive("Contact")}
        />
      </div>
    </div>
  );
};

export default NavigationBar;
