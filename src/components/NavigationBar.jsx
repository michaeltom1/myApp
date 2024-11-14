import { LuHome, LuUser, LuMail, LuCode } from "react-icons/lu";
import { useData } from "../Context/DataProvider";
const NavigationBar = () => {
  const { active, setActive } = useData();
  return (
    <div className="fixed bottom-0 w-full ">
      <div className="flex justify-around p-2 m-2 rounded-xl bg-[hsla(231,14%,10%,0.8)] backdrop-blur-sm">
        <LuHome
          title="Home"
          className={`text-4xl hover:text-[#2ecc71] ${
            active === "Home" ? "text-[#2ecc71]" : "text-neutral-300"
          }`}
          onClick={() => setActive("Home")}
        />
        <LuUser
          title="About"
          className={`text-neutral-300 text-4xl hover:text-[#2ecc71] ${
            active === "About" ? "text-[#2ecc71]" : "text-neutral-300"
          }`}
          onClick={() => setActive("About")}
        />
        <LuCode
          title="Project"
          className={` text-4xl hover:text-[#2ecc71] ${
            active === "Project" ? "text-[#2ecc71]" : "text-neutral-300"
          }`}
          onClick={() => setActive("Project")}
        />
        <LuMail
          title="Contact"
          className={` text-4xl hover:text-[#2ecc71] ${
            active === "Contact" ? "text-[#2ecc71]" : "text-neutral-300"
          }`}
          onClick={() => setActive("Contact")}
        />
      </div>
    </div>
  );
};

export default NavigationBar;


