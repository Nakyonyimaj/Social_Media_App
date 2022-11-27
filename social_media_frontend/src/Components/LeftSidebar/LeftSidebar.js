import React from "react";
import { BsSearch } from "react-icons/bs";
import Activepp from "../Activepp/Activepp";
import {
  AiOutlineVideoCamera,
  AiOutlineDash,
  AiOutlinePlusCircle,
} from "react-icons/ai";

export default function LeftSidebar() {
  return (
    <div className="w-[20%]  h-full hidden md:block px-4  pt-20 mr-2 fixed right-0">
      <div className="h-full">
        <div className="flex border-b-[3px] border-gray p-3">
          <span className="font-semibold  text-darkgray">Sponsored</span>
        </div>
        <div className="flex justify-between mb-3">
          <span className="font-semibold text-darkgray">Contacts</span>
          <div className="flex space-x-3 items-center ">
            <AiOutlineVideoCamera />
            <BsSearch />
            <AiOutlineDash />
          </div>
        </div>

        <div className="flex flex-col items-start border-b-[3px]  border-gray">
          <Activepp
            pf="video-chat-call-vector-illustration-flat-cartoon-person-using-tablet-talk-online-chatting-girl-woman-table-107421667.jpg"
            name="Rose"
          />
          <Activepp pf="zac-durant-Uvo2_mtSCTc-unsplash.jpg" name="Abbie" />
          <Activepp pf="photoholgic-UPY_iepQt5c-unsplash.jpg" name="Maria" />
          <Activepp
            pf="denise-johnson--_cRkZvAtI8-unsplash.jpg"
            name="Alexandra"
          />
        </div>

        <div className="flex flex-col">
          <h3 className="mb-2 font-semibold text-darkgray">
            Group conversations
          </h3>
          <div className="flex items-center">
            <AiOutlinePlusCircle />
            <span className="font-semibold">Create New Group</span>
          </div>
        </div>
      </div>
    </div>
  );
}
