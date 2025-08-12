import Marquee from "react-fast-marquee";
import Typography from "../../utils/Typography";
import { freelanceServices, serviceLogo } from "../data/frelanceService";

const MyServices = () => {
  return (
    <div>
      <div className="flex w-full justify-center">
        <Typography.Heading className="text-center flex ">
          My Services
        </Typography.Heading>
      </div>
      <div className="flex justify-center">
        <div className="w-[75%] md:grid grid-cols-3 gap-4 space-y-4 md:space-y-auto mt-10">
          {freelanceServices.map((service, index) => (
            <div
              key={index}
              className="border p-10 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-300 blur-effect cursor-pointer border-cosmic-light-blue/20"
            >
              <Typography.Headers className="text-lg font-bold text-white text-left">
                {service.title}
              </Typography.Headers>
              <Typography.Text className="mt-4 text-white/50">
                {service.description}
              </Typography.Text>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10">
        <Marquee className="space-x-7" speed={100}>
          {serviceLogo.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Service Logo ${index}`}
              className="w-[120px] mx-4"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default MyServices;
