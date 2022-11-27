import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import Post from "../Post/Post";
import Stories from "../Stories/Stories";

function Middle() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-full flex  flex-col items-center md:w-[60%] sm:w-[80%] sm:pt-20 lg:pt-20 md:px-[10%]">
        <div class=" relative flex  flex-col rounded-xl  shadow space-x-2 pt-4  overflow-hidden">
          <div className="  grid grid-cols-3 gap-10 items-center mb-3 p-2  border-b-2 border-gray">
            <div className="p-3  items-center hover:bg-gray ">Stories</div>
            <div className="p-3 hover:bg-gray">Reels</div>
            <div className="p-3 hover:bg-gray">Rooms</div>
          </div>
          <div className="flex overflow-x-auto space-x-3 p-4">
            <div className="w-1/4  h-44  flex-shrink-0 rounded-xl overflow-hidden shadow ">
              <div class="relative h-full group cursor-pointer">
                <img
                  src="photoholgic-UPY_iepQt5c-unsplash.jpg"
                  alt=""
                  className="group-hover:transform group-hover:scale-110 transition-all duration-700 h-2/3 w-full"
                />
                <div className="flex flex-col items-center">
                  <AiOutlinePlusCircle className="text-4xl text-white absolute -mt-3 bg-fblue border-2 border-white rounded-full  " />
                  <div className="absolute bottom-0">Create stroy</div>
                </div>
              </div>
            </div>
            <Stories
              imgp="images (2).jpg"
              imgs="jonathan-borba-qAYbkxFoghU-unsplash.jpg"
            />
            <Stories imgp="images (5).jpg" imgs="images (1).jpg" />
            <Stories
              imgp="istockphoto-1349363968-170667a.jpg"
              imgs="istockphoto-1349363968-170667a.jpg"
            />
            <Stories
              imgp="istockphoto-1349363968-170667a.jpg"
              imgs="istockphoto-1349363968-170667a.jpg"
            />
          </div>
        </div>
      </div>
      {/*request to post*/}

      <div className="w-full h-full flex  flex-col items-center  md:w-[60%] sm:w-[80%]  pt-4 lg:pt-4 md:px-[10%]   ">
        <div class="w-full relative  flex flex-col justify-start rounded-xl  shadow space-x-2 p-6  ">
          <div className="flex space-x-8 ">
            <img
              src="download (1).jpg"
              alt=""
              className=" top-3 left-3 rounded-full w-9 h-9 absolute overflow-hidden"
            />
            <input
              type={"text"}
              Placeholder="What's on your mind Rose?"
              className="bg-gray w-full h-9 rounded-full p-3"
            />
          </div>
          <div className="flex  items-center justify-between mt-5">
            <div className="flex flex-shrink-0 items-center">
              <img
                src="download-hd-video-camera-recording-red-icon-png-11640206840kabkdgdil6.png"
                alt="pic"
                className="w-8 h-8"
              />
              <span>Live video</span>
            </div>
            <div className="flex items-center">
              <img
                src="images_117937.png"
                alt="pic"
                className="w-8 h-8 overflow-hidden "
              />
              <span>Photo/video</span>
            </div>

            <div className="flex flex-shrink-0 items-center">
              <img
                src="pngtree-vector-calm-emoji-icon-png-image_4123778.jpg"
                alt="pic"
                className="w-8 h-8"
              />
              <span>Feeling/activity</span>
            </div>
          </div>
        </div>
      </div>

      {/*posts*/}
      <Post username="Kiss Kenya Radio" userpp="download (2).jpg" postpp="download.jpg" postTitle="Kiss Radio your number one radio station"/>
      <Post username="Alexandar Grande" userpp="download (4).jpg" postpp="istockphoto-1145618475-612x612.jpg" postTitle="Kiss Radio your number one radio station"/>
    </div>
  );
}
export default Middle;
