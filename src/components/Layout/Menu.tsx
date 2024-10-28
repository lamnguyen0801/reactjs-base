import { NavLink } from "react-router-dom";
import avatar from "../../assets/images/avatar.jpg";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import { GiCancel } from "react-icons/gi";

export default function Menu() {
  const [openMobi, setOpenMobi] = useState<boolean>(false);

  const navLinkActive = ({ isActive }: { isActive: boolean }): string => {
    return (
      "inline-block w-full px-5 py-2" +
      (isActive ? " bg-[#FF6F00] text-[#FFF]" : " bg-[#FFF] text-[#6A1B9A]")
    );
  };

  const openMenuMobi = (): void => {
    setOpenMobi(true);
  };

  const closeMenuMobi = (): void => {
    setOpenMobi(false);
  };

  return (
    <>
      <div className="flex sm:hidden justify-between items-center w-full h-14 px-4 py-2 bg-[#6A1B9A]">
        <div
          className="text-3xl text-[#FFF] flex items-center justify-center cursor-pointer"
          onClick={openMenuMobi}
        >
          <IoMenu />
        </div>

        {openMobi ? (
          <div
            className="text-2xl text-[#FFF] flex items-center justify-center cursor-pointer"
            onClick={closeMenuMobi}
          >
            <GiCancel />
          </div>
        ) : (
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              src={avatar}
              alt="Ảnh avatar"
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      <div
        className={`${
          openMobi ? "flex flex-col h-full absolute z-50" : "hidden"
        } sm:block w-3/5 sm:w-1/4 lg:w-1/5 text-[#FFF] bg-[#6A1B9A]`}
      >
        <div className="flex flex-col items-center py-5">
          <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden">
            <img
              src={avatar}
              alt="Ảnh avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <span>Phương Thảo</span>
        </div>

        <ul className="uppercase flex flex-col gap-3">
          <li>
            <NavLink to="/" className={navLinkActive}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={navLinkActive}>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/educations" className={navLinkActive}>
              Educations
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
