import React from "react";
import { RiShareForwardLine } from "react-icons/ri";
import { GoComment } from "react-icons/go";
import { BiLike } from "react-icons/bi";

export default function Post(props) {
    const {username,userpp ,postpp,postTitle} = props;
  return (
    <div className="w-full h-full flex  flex-col items-center md:w-[60%] sm:w-[80%]  pt-4 lg:pt-4 md:px-[10%] ">
      <div class="w-full relative  flex flex-col  rounded-xl  shadow pt-4 ">
        <div className="flex items-center px-3 space-x-10">
          <img
            src={userpp}
            alt="pic"
            className=" w-10 h-10 rounded-full absolute top-3 left-3 "
          />
          <div>
            <span>{username}</span>
          </div>
        </div>
        <div className=" pt-4 justify-start px-3">
          <span>{postTitle}</span>
        </div>
        <div className=" pt-2">
          <img
            src={postpp}
            alt="pic"
            className="w-full h-44  object-fill"
          />
        </div>

        <div className="flex justify-between p-4  border-b-2 border-gray ">
          <div className="flex items-center space-x-2">
            <div className="flex">
              <img src="Like-Button-PNG.png" alt="" className="w-5 h-5" />
              <img src="heart-icon-y1k.png" alt="" className="w-5 h-5" />
            </div>
            <span>450</span>
          </div>

          <div className="flex items-center space-x-2">
            <p>
              39<span>comments</span>
            </p>
            <p>
              44<span>shares</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between p-3 px-10">
          <div className="flex items-center">
            <p>Like</p>
            <BiLike />
          </div>

          <div className="flex items-center">
            <p>Comment</p>
            <GoComment />
          </div>

          <div className="flex items-center">
            <p>Share</p>
            <RiShareForwardLine />
          </div>
        </div>
      </div>
    </div>
  );
}
