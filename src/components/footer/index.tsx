import Marquee from "react-fast-marquee";
import Typography from "../../utils/Typography";
import { Link } from "react-router-dom";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { PiLinkedinLogo } from "react-icons/pi";
import { AiOutlineMail } from "react-icons/ai";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/",
      icon: <PiLinkedinLogo />,
    },
    {
      name: "Whatsapp",
      url: "https://linkedin.com/",
      icon: <FaWhatsapp />,
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      icon: <FaGithub />,
    },
    {
      name: "Email",
      url: "https://github.com/",
      icon: <AiOutlineMail />,
    },
  ];

  return (
    <div>
      <div className="pt-[8rem]">
        <Marquee className="space-x-7" speed={100} direction="right">
          <Typography.PageHeaders className="mt-4 w-full flex justify-center leading-[0.8]">
            Let's Talk -
          </Typography.PageHeaders>
        </Marquee>
      </div>
      <div className="flex justify-center py-10">
        <div className="border border-cosmic-light-blue/30 divide-cosmic-light-blue/30 rounded-[50px] p-5 md:grid grid-cols-4 divide-x justify-between w-[90%] bg-black/30 backdrop-blur-md hidden">
          {socialLinks.map((social, index) => (
            <Link to={social.url} key={index} className="flex justify-center">
              <div className="flex items-center space-x-2 w-fit">
                <div className="text-white">{social.icon}</div>
                <Typography.Text className="w-full flex justify-center text-white">
                  {social.name}
                </Typography.Text>
                <div className="text-white">
                  <MdArrowOutward />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className=" border-cosmic-light-blue/30 divide-cosmic-light-blue/30 rounded-[50px] p-5 grid grid-cols-2 gap-y-5  justify-between w-[90%] bg-black/30 backdrop-blur-md md:hidden">
          {socialLinks.map((social, index) => (
            <Link to={social.url} key={index} className="flex justify-center">
              <div className="flex items-center space-x-2 w-fit">
                <div className="text-white">{social.icon}</div>
                <Typography.Text className="w-full flex justify-center text-white">
                  {social.name}
                </Typography.Text>
                <div className="text-white">
                  <MdArrowOutward />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center w-full pb-[5rem]">
        <div className="w-[90%] flex justify-center">
          <div className="flex items-enter space-x-2.5">
            <Typography.Text>Oghenetega p. Igho</Typography.Text>
            <Typography.Text>Tega.myview@gmail.com</Typography.Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
