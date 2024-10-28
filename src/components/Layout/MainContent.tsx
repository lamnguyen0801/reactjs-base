import { Outlet } from "react-router-dom";

export default function MainContent() {
  return (
    <>
      <div className="flex-grow bg-[#FF6F00] flex flex-col justify-center items-center">
        <Outlet />
      </div>
    </>
  );
};


