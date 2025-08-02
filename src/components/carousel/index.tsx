import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";

const CarouselFunction = ({ img, url }: { img: string[]; url: string[] }) => {
  const [count, setCount] = useState(0);
  const image = img || [];

  const handlePrev = (i: number) => {
    setCount(i <= 0 ? image.length - 1 : i - 1);
  };
  const handleNext = (i: number) => {
    setCount(i >= image.length - 1 ? 0 : i + 1);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCount((prevCount) =>
        prevCount === image.length - 1 ? 0 : prevCount + 1,
      );
    }, 3500);

    return () => clearTimeout(interval);
  }, [count, image.length]);

  return (
    <div className="mt-4 w-[90%] overflow-hidden relative mx-auto flex justify-between items-center">
      <div
        className={`w-full absolute h-[350px] flex items-center justify-between`}
      >
        {image.map((_el, i) => (
          <div
            className={`${count === i && img.length > 1 ? "" : "hidden"} w-full`}
            key={i}
          >
            <div className=" w-full flex justify-center h-full items-center ">
              <div className="z-40 flex w-full h-full  items-center space-x-5 justify-between">
                <div
                  className={`rounded-full flex items-center justify-center p-1 border-primary border text-blue-700 bg-cosmic-light-blue/30 cursor-pointer`}
                  onClick={() => handlePrev(i)}
                >
                  <IoIosArrowRoundBack size={25} />
                </div>
                <div
                  className={`rounded-full flex items-center justify-center p-1 border-primary border text-blue-700 bg-cosmic-light-blue/30 cursor-pointer`}
                  onClick={() => handleNext(i)}
                >
                  <IoIosArrowRoundForward size={25} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full">
        <div className="flex justify-center  w-full md:h-[350px] h-[200px] rounded-[5px] overflow-hidden relative">
          {image.map((el, i) => (
            <>
              <motion.div
                key={i}
                className="absolute top-0 w-full h-full rounded-0"
                initial={false}
                animate={{
                  x: count === i ? 0 : count > i ? "-100%" : "100%",
                  opacity: count === i ? 1 : 0.5,
                  zIndex: count === i ? 2 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <img
                  src={el}
                  alt={`image-${i + 1}`}
                  className="w-full object-cover h-full"
                />
              </motion.div>
              <motion.div
                key={`link-${i}`}
                className="absolute top-0 w-full h-full rounded-0 pointer-events-none"
                initial={false}
                animate={{
                  x: count === i ? 0 : count > i ? "-100%" : "100%",
                  opacity: count === i ? 1 : 0,
                  zIndex: count === i ? 3 : 1,
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {count === i && (
                  <Link
                    to={url[i]}
                    className="pointer-events-auto"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute bottom-0 left-0 bg-black/70 text-white p-2 w-full text-center flex items-center justify-center gap-x-2 font-[200] z-50">
                      visit website <GoLinkExternal />
                    </div>
                  </Link>
                )}
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselFunction;
