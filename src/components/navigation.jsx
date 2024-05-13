import React from "react";
import { Link } from "react-scroll";
import { BiHomeAlt, BiUser, BiCodeAlt } from "react-icons/bi";

export default function Navigation() {
  return (
    <div className="fixed bottom-4 left-0 right-0 text-center z-10 lg:translate-y-[-50%] lg:top-[50%] lg:left-auto lg:right-5">
      <div className="flex justify-between mx-auto bg-white text-secondary p-2 rounded-full border-secondary border-solid border-[1px] max-w-[200px] lg:flex-col">
        <Link
          activeCLass="active"
          to="home"
          className="flex w-[50px] h-[50px] items-center justify-center cursor-pointer "
          offset={-100}
          spy={true}
          smooth={true}
        >
          <BiHomeAlt />
        </Link>
        <Link
          activeCLass="active"
          to="profile"
          className="flex w-[50px] h-[50px] items-center justify-center cursor-pointer hover"
          offset={-100}
          spy={true}
          smooth={true}
        >
          <BiUser />
        </Link>
        <Link
          activeCLass="active"
          to="portfolio"
          className="flex w-[50px] h-[50px] items-center justify-center cursor-pointer"
          offset={-100}
          spy={true}
          smooth={true}
        >
          <BiCodeAlt />
        </Link>
      </div>
    </div>
  );
}
