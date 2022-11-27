import React from "react";
import { FaUserFriends } from "react-icons/fa";
import { MdOutlineVideoSettings } from "react-icons/md";
import { AiFillShop } from "react-icons/ai";
import {
  FcBookmark,
  FcConferenceCall,
  FcClapperboard,
  FcOvertime,
  FcPlanner,
  FcCollaboration,
  FcAdvertising,
} from "react-icons/fc";
export default function RightSidebar() {
  return (
      <div className="hidden md:flex flex-col fixed  h-full left-0 pt-20 p-5 w-[20%]">
        <div className="flex items-center ">
          <img
            src="cartoon-boy-eating-spaghetti-illustration-39149834.jpg"
            alt="Profile"
            className=" rounded-full  w-10 h-10 mr-2"
          />
          <span>GlamorRose</span>
        </div>
        <div className="flex items-center">
          <FaUserFriends className="text-3xl mr-2 mb-3 " />
          <span>Friends</span>
        </div>
        <div className="flex items-center mb-3">
          <AiFillShop className="text-3xl mr-2 " />
          <span>Market place</span>
        </div>
        <div className="flex items-center mb-3">
          <FcConferenceCall className="text-3xl mr-2 " />
          <span>Groups</span>
        </div>
        <div className="flex items-center mb-3">
          <FcClapperboard className="text-3xl mr-2 " />
          <span>Watch</span>
        </div>
        <div className="flex items-center mb-3">
          <FcBookmark className="text-3xl mr-2 " />
          <span>Saved</span>
        </div>

        <div className="flex items-center mb-3">
          <FcCollaboration className="text-3xl mr-2 " />
          <span>Pages</span>
        </div>

        <div className="flex items-center mb-3">
          <MdOutlineVideoSettings className="text-3xl mr-2 " />
          <span>Reels</span>
        </div>
        <div className="flex items-center mb-3">
          <FcPlanner className="text-3xl mr-2 " />
          <span>Events</span>
        </div>

        <div className="flex items-center mb-3">
          <FcOvertime className="text-3xl mr-2 " />
          <span>Most Recent</span>
        </div>

        <div className="flex items-center mb-3">
          <FcAdvertising className="text-3xl mr-2 " />
          <span>Ad Center</span>
        </div>
        <div className="flex items-center mb-3">
          <FcAdvertising className="text-3xl mr-2 " />
          <span>Ad Center</span>
        </div>
        <div className="flex items-center mb-3">
          <FcAdvertising className="text-3xl mr-2 " />
          <span>Ad Center</span>
        </div>
      </div>
  );
}
