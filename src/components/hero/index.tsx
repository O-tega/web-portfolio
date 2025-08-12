import Navbar from "../navbar/Navbar";
import img1 from "../../assets/images/img1.webp";
import Typography from "../../utils/Typography";
// import img2 from "../../assets/images/img2.webp";

import { RiWhatsappFill } from "react-icons/ri";
import { ImGithub } from "react-icons/im";
import SocialButton from "../button/SocialButton";

import { motion } from "motion/react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdMarkEmailUnread } from "react-icons/md";

const Hero = () => {
  const [hover, setHover] = useState<number | null>(null);

  const handleHover = (id: number | null) => {
    setHover(id !== hover ? id : null);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/oghenetega-igho-571831170/",
      icon: <FaLinkedin size={30} />,
    },
    {
      name: "Whatsapp",
      url: "https://wa.me/+2348089616349",
      icon: <RiWhatsappFill size={30} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/O-tega",
      icon: <ImGithub size={30} />,
    },
  ];

  return (
    <div className="w-full font-[200] overflow-hidden">
      <Navbar />
      <div className="md:flex justify-between items-center md:h-[90vh] md:px-20 px-5 overflow-hidden">
        <motion.div
          className="md:w-[50%] w-full md:h-[87vh] h-[400px] overflow-hidden md:bg-cosmic-light-blue/10 rounded-2xl"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }}
        >
          <div className="md:w-[50rem] w-[40rem] relative">
            <img
              src={img1}
              alt=""
              className="object-cover absolute -left-20 grayscale hover:grayscale-0"
            />
          </div>
        </motion.div>
        <motion.div
          className="md:w-[50%]"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }}
        >
          <div className="md:pl-[5rem]">
            <p className="mt-10 md:mt-0">
              <Typography.Text className="text-cosmic-light-blue md:block flex justify-center w-full">
                Web Engineer & Software Architect
              </Typography.Text>
              <Typography.Heading className="my-4 px-3 md:px-0">
                Agency-level web development services at freelancer rates
              </Typography.Heading>
              <Typography.Text className="flex justify-center md:block text-center md:text-left">
                I build sleek, scalable, and user-driven web platforms — built
                to impress today and scale for tomorrow.
              </Typography.Text>
            </p>
            <div className="flex space-x-4 mt-5 items-center justify-center md:justify-normal ">
              <div className="hidden md:block">
                <SocialButton
                  text="Reach out/Connect via"
                  icon={
                    <span className="text-cosmic-light-blue">
                      <MdMarkEmailUnread size={30} />
                    </span>
                  }
                  link="mailto:tega.myview@gmail.com"
                />
              </div>
              <div className="flex items-center space-x-2">
                {socialLinks.map((item, index) => (
                  <Link to={item.url} key={index}>
                    <div
                      className=" w-[50px] h-[50px] rounded-full border border-cosmic-light-blue/50 flex items-center justify-center text-cosmic-light-blue bg-blue-500/30 hover:border-cosmic-light-blue/100 hover:bg-cosmic-blue-dark/50 "
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <div
                        className={`transition-transform duration-300 ${hover === index ? "rotate-360" : "rotate-0"}`}
                      >
                        {item.icon}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
