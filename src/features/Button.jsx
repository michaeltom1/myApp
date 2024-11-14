import { Link } from "react-router-dom";

function Button({
  link,
  text = "Learn more",
  href,
  to,
  color = "bg-primary",
  onClick,
}) {
  return (
    <button
      className={`${color} p-2 px-4 font-medium rounded-xl text-white`}
      onClick={onClick}
    >
      {link ? <Link to={to}>{text}</Link> : <a href={href}>{text}</a>}
    </button>
  );
}

export default Button;
