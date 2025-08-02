import { useState } from "react";

const SocialButton = ({
  icon,
  link,
  text,
}: {
  icon: React.ReactNode;
  link: string;
  text: string;
}) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <a href={link} className="text-white hover:text-gray-300">
        <div
          className="border rounded-4xl p-2 w-fit border-cosmic-light-blue/50 bg-blue-500/30 hover:border-cosmic-light-blue/100 hover:bg-cosmic-blue-dark/50 flex items-center overflow-hidden space-x-3"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <span>{text}</span>
          <span
            className={`transition-transform duration-300 ${hover ? "rotate-360" : "rotate-0"}`}
          >
            {icon}
          </span>
        </div>
      </a>
    </div>
  );
};

export default SocialButton;
