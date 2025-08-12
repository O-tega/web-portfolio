import Typography from "../../utils/Typography";
// import { motion } from "motion/react";
// import img2 from "../../assets/images/img2.webp";
import { WorkExperience } from "../data/workData";
import { BsDot } from "react-icons/bs";
import { GrDocumentUser } from "react-icons/gr";

const AboutMe = () => {
  return (
    <div className="md:mt-10">
      <div className="relative">
        {/* <div className="flex justify-center w-full ">
          <motion.div
            className="md:w-[50%] md:h-[87vh] h-[50vh] overflow-hidden rounded-2xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, transition: { duration: 1 }, x: 0 }}
          >
            <div className="md:w-[50rem] w-[35rem] relative">
              <img
                src={img2}
                alt=""
                className="object-cover absolute -left-20 grayscale hover:grayscale-0"
              />
            </div>
          </motion.div>
        </div> */}
        <div className="flex flex-col justify-center w-full z-30  bottom-0">
          <Typography.Heading className="mt-4 w-full flex justify-center leading-[0.8]">
            ABOUT ME
          </Typography.Heading>
          <Typography.Text className=" w-full md:flex justify-center px-12 hidden text-center mt-5">
            Aspiring Solution Architect with a robust foundation in full-stack
            development and a strong passion for system design, cloud
            architecture and scalable enterprise solution. Proven experience
            developing real-world solutions in finance, survey, and event-based
            platforms. Adept in Javascript, React, Node.js, MongoDB, and
            currently building proficiency in cloud technologies and
            architectural modeling. seeking opportunities to contribute to
            strategic technology planning and cross-functional architecture
            decisions.
          </Typography.Text>
          <Typography.Text className=" w-full flex justify-center px-5 md:hidden">
            Aspiring Solution Architect with full-stack skills, building
            scalable systems and cloud expertise to drive enterprise
            architecture and tech strategy.
          </Typography.Text>
        </div>
      </div>
      <div className="w-full mt-10 pb-10">
        <hr className="text-cosmic-light-blue/20" />
        <div className="w-[75%] mx-auto">
          <div className="md:grid grid-cols-3  border-x  divide-x divide-dashed divide-cosmic-light-blue/20 border-cosmic-light-blue/20">
            <div className="flex items-center">
              {" "}
              <Typography.SubHeading className="mx-4 text-white-300 text-[35px]">
                Work Experience
              </Typography.SubHeading>
            </div>
            <div className="col-span-2">
              <div className="md:grid grid-cols-2 divide-dashed divide-cosmic-light-blue/20 border-cosmic-light-blue/20">
                {WorkExperience.map((work, index) => (
                  <>
                    <div
                      className={`flex p-4 ${WorkExperience.length - index === 1 ? "" : "border-b"} border-r border-cosmic-light-blue/20`}
                      key={index}
                    >
                      <Typography.MicroText className=" text-white-300">
                        {work.date}
                      </Typography.MicroText>
                    </div>
                    <div
                      className={`${WorkExperience.length - index === 1 ? "" : "border-b"} border-cosmic-light-blue/20 p-4`}
                    >
                      <div className="flex  space-x-2 ">
                        <div className="flex items-center justify-center w-[40px] h-[40px] rounded-2xl">
                          <img
                            src={work.logo}
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div>
                          <Typography.Text className="leading-2 pt-2">
                            {work.role}
                          </Typography.Text>
                          <Typography.MicroText>
                            {work.company}
                          </Typography.MicroText>
                        </div>
                      </div>
                      <div className="mt-2">
                        <Typography.Text className="text-white-300 text-[14px]">
                          {work.description}
                        </Typography.Text>
                      </div>
                      <div className="space-y-2 mt-2">
                        {work.expertise.map((exp, i) => (
                          <div className="flex items-center">
                            <div className="text-white">
                              <BsDot />
                            </div>
                            <div className="list-disc pl-4 text-white" key={i}>
                              <Typography.Text
                                className="text-white-300/70 text-[11px]"
                                key={i}
                              >
                                {exp}
                              </Typography.Text>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
        <hr className="text-cosmic-light-blue/20" />
        <div>
          <div className="w-[75%] mx-auto border-x border-cosmic-light-blue/20">
            <div className="grid grid-cols-3 divide-x divide-dashed divide-cosmic-light-blue/20">
              <div className=" p-4">
                <Typography.Text className="text-white text-[14px]">
                  Get in Touch
                </Typography.Text>
              </div>
              <div className="col-span-2">
                <div className="grid grid-cols-2 divide-dashed divide-cosmic-light-blue/20 border-cosmic-light-blue/20">
                  <div className=""></div>
                  <div className="flex items-center p-4 border-l border-cosmic-light-blue/20 border-dashed">
                    <a
                      href="https://drive.google.com/file/d/1-bAhgOSqqdo62XBLBm5OQNYwQnSdWjF9/view?usp=sharing"
                      className="w-full"
                      target="_blank"
                    >
                      <div className="border w-full px-2 py-1 flex items-center justify-center space-x-2 text-white/ hover:text-white/70 cursor-pointer transition-all duration-300">
                        <GrDocumentUser />
                        <p className="text-[12px] font-[200]">Download my CV</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="text-cosmic-light-blue/20 " />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
