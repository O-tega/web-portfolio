import { BsDot } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import { useState } from "react";
import MobileNav from "./MobileNav";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="my-5 mx-auto md:px-20 px-5 font-[200] relative">
      <div className="md:flex justify-between items-center w-full hidden ">
        <div className="text-2xl text-200 text-cosmic-light-blue">
          My Portfolio
        </div>
        <div className="flex space-x-4 items-center">
          <a href="/" className="text-white hover:text-gray-300">
            Solution/Enterprise Architect
          </a>
          <a href="/about" className="text-white hover:text-gray-300">
            <div className="border rounded-4xl p-2 w-[150px] border-cosmic-light-blue/50 bg-blue-500/30 hover:border-cosmic-light-blue/100 flex items-center overflow-hidden">
              <span>
                <BsDot
                  className="inline text-cosmic-light-blue/100"
                  size={30}
                />
              </span>
              <span className="w-[90px]">
                <Marquee>
                  I am available for freelance work, contact me for more
                  details.
                </Marquee>
              </span>
            </div>
          </a>
          {/* <a href="/projects" className="text-white hover:text-gray-300">
            Projects
          </a>
          <a href="/contact" className="text-white hover:text-gray-300">
            Contact
          </a> */}
        </div>
      </div>
      <div className="flex justify-between items-center md:hidden fixed w-full pr-10 z-50 bg-black/60 top-0 py-4 backdrop-blur-sm">
        <div className="items-center justify-between flex">
          <div>OTega</div>
        </div>
        <div className="flex md:hidden ">
          {showMenu ? (
            <MdOutlineClose onClick={() => setShowMenu(!showMenu)} size={25} />
          ) : (
            <HiOutlineMenuAlt4
              onClick={() => setShowMenu(!showMenu)}
              size={25}
            />
          )}
        </div>
      </div>
      <MobileNav showMenu={showMenu} setShowMenu={setShowMenu} />
    </div>
  );
};

export default Navbar;
