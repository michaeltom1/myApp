import { useState } from "react";
import Base from "../features/Base";
import Button from "../features/Button";
const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <Base className={" text-white text-center space-y-4"}>
        <h2 className="text-2xl font-semibold mb-4 text-primary">About Me</h2>
        <p>
          I am a passionate web developer specialized in crafting visually
          appealing websites that are responsive, functional and user-friendly
        </p>
        <p className={`${showMore ? "block" : "hidden"}`}>
          My portfolio showcases my journey and expertise in these fields.{" "}
          <br /> In my spare time, I enjoy working on side projects and learning
          new technologies.
        </p>
        <Button
          onClick={() => setShowMore(!showMore)}
          text={!showMore ? "Show More" : "Show Less"}
        />
      </Base>
    
    </>
  );
};

export default About;
