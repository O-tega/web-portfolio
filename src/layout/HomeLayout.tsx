import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <div className="bg-black text-white w-[100vw] font-secondary">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
 