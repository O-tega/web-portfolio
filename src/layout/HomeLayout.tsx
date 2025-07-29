import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <div className="flex items-center bg-black text-white h-screen w-[100vw]">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
 