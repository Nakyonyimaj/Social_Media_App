import React from "react";
import { FaFacebookF, FaUserFriends } from "react-icons/fa";
import { BsSearch,BsMessenger } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi";
import { MdOndemandVideo } from "react-icons/md";
import { AiFillShop , AiOutlineMenu} from "react-icons/ai";
import { SiFacebookgaming } from "react-icons/si";
import { CgMenuGridO } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { Input } from "postcss";
import Navbaricons from "../Navbaricons/Navbaricons";

export default function Navbar() {
  return (
    <div className=" w-full fixed top-0 z-50 bg-white flex items-center p-2 lg:px-5  shadow-md justify-between">
      {/*left*/}
      <div>
        <div className="flex items-center">
          <img src="Facebook-logo.png" width={70} height={50} layout="fixed"/>
          <div className="flex ml-2 items-center rounded-full bg-backgray p-2">
            <BsSearch className="h-6"/>
            <input className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none "type="text" placeholder="Search Facebook"/>
          </div>
          <AiOutlineMenu className=" md:hidden sm:ml-6 text-3xl"/>
        </div>
      </div>
      {/* middle */}
      <div className="flex  items-center sm:space-x-2">
        <div className="hidden md:flex text-3xl space-x-6 md:space-x-2">
          <Navbaricons  active Icon={HiOutlineHome}/>
          <Navbaricons Icon={FaUserFriends}/>
          <Navbaricons Icon={MdOndemandVideo}/>
          <Navbaricons Icon={AiFillShop}/>
          <Navbaricons Icon={SiFacebookgaming}/>
        </div>
      </div>
      {/*Right*/} 
      <div className="flex items-center text-2xl">
        <div className="flex items-center space-x-1 sm:space-x-4">
          <CgMenuGridO className="rounded-full  bg-gray"/>
          <BsMessenger className="rounded-full  bg-gray"/>
          <IoIosNotifications className="rounded-full  bg-gray"/>
          <div className="flex items-center rounded-full">
             <img src="chef-cartoon-character-illustration-34109796 (1).jpg" className="rounded-full border border-gray-100 shadow-sm w-10 h-10" layout="fixed"/>
          </div>

        </div>
        
      </div>
    </div>
  );
}
