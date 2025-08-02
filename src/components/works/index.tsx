import Typography from "../../utils/Typography";
import { IoIosCodeWorking } from "react-icons/io";

import CarouselFunction from "../carousel";
import { projects } from "../data/workData";

const Works = () => {
  return (
    <div className="py-5 relative">
      <hr className="text-cosmic-light-blue/20" />
      <div className="md:w-[75%] w-[80%] mx-auto">
        <div className="md:grid grid-cols-3  border-x md:h-[240px] divide-x divide-dashed divide-cosmic-light-blue/20 border-cosmic-light-blue/20">
          <div className="">
            {" "}
            <div className="md:flex justify-center items-center w-[40px] [h-40px] rounded-full py-2 bg-white-300/20 text-white md:m-4 hidden ">
              <IoIosCodeWorking size={24} />
            </div>
            <Typography.Heading className="mx-4 pt-5">Works</Typography.Heading>
            <Typography.SubHeading className="mx-4 text-white-300/30">
              A selection of my recent projects
            </Typography.SubHeading>
          </div>
          <div></div>
          <div></div>
        </div>
        <hr className="text-cosmic-light-blue/20" />
      </div>
      <div className="md:w-[75%] w-[80%] mx-auto">
        {projects.map((project, index) => (
          <>
            <div
              className="md:grid grid-cols-3 border-x md:h-[400px] h-[470px] divide-x divide-dashed divide-cosmic-light-blue/20 border-cosmic-light-blue/20 relative"
              key={index}
            >
              <div className="flex flex-col justify-end">
                {" "}
                <div className="flex items-center -space-x-2.5 m-4">
                  {project.logo.map((img, i) => (
                    <div
                      className="flex justify-center items-center w-[40px] h-[40px] rounded-full bg-white-300/20 text-white overflow-hidden"
                      key={i}
                    >
                      <img
                        src={img}
                        alt={img}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ))}
                </div>
                <div className="mx-4">
                  <Typography.SubHeading className=" text-white text-left">
                    {project.name}
                  </Typography.SubHeading>
                  <Typography.Text className="text-white text-sm">
                    {project.description}
                  </Typography.Text>
                  <div className="py-2">
                    <div className="flex gap-2 flex-wrap">
                      {project.role.map((role, i) => (
                        <div
                          key={i}
                          className="bg-amber-100 w-fit px-1 rounded-md"
                        >
                          <Typography.MicroText className="font-[200]">
                            {role}
                          </Typography.MicroText>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-2 border border-white/20 m-2 gap-0 overflow-hidden">
                <div className="flex items-end mb-2 hover:scale-[1.15] transition-all duration-500 ease-in-out overflow-hidden h-[210px] md:h-auto">
                  <CarouselFunction img={project.image} url={project.url} />
                </div>
              </div>
            </div>
            {projects.length - 1 === index ? null : (
              <hr className="text-cosmic-light-blue/20" />
            )}
          </>
        ))}
      </div>
      <hr className="text-cosmic-light-blue/20" />
    </div>
  );
};

export default Works;
