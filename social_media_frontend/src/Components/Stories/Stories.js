import React from "react";

export default function Stories(props) {
    const {imgp ,imgs} = props
  return (
      <div className="w-1/4  h-44 flex-shrink-0 rounded-xl overflow-hidden shadow ">
        <div class="relative h-full group cursor-pointer">
          <img
            src={imgs}
            alt=""
            className="group-hover:transform group-hover:scale-110 transition-all duration-700  h-full w-full"
          />
          <div className="w-full h-full bg-black absolute top-0 left-0 bg-opacity-10"></div>
          <span className="absolute bottom-0 left-2 pb-2 font-semibold text-white">
            Lorem
          </span>
          <div className="rounded-full absolute top-2 left-2 border-4 border-blue-500">
            <img
            className="w-10 h-10 rounded-full overflow-hidden"
            src={imgp}
             alt=""
            />
          </div>
        </div>
      </div>
  );
}
