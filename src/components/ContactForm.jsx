import Base from "../features/Base";
import Button from "../features/Button";
const ContactForm = () => (
  <Base className={" text-white text-center space-y-4"}>
    <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Me</h2>
    <p>
      Ready to start a project together? Feel free to reach out via email or
      connect with me on social media
    </p>
    <Button href={"mailto:mic81070@gmail.com"} text="Say Hello 👋" />
  </Base>
);

export default ContactForm;

