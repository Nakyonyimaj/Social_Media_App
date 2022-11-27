import React from "react";
import LeftSidebar from "../../Components/LeftSidebar/LeftSidebar";
import Middle from "../../Components/Middle/Middle";
import Navbar from "../../Components/Navbar/Navbar";
import RightSidebar from "../../Components/RightSidebar/RightSidebar";

export default function Homepage() {
  return (
    <div>
        <Navbar/>
      <section className="flex  justify-center h-screen">
          <RightSidebar/>
          <Middle/>
          <LeftSidebar/>
      </section>
    </div>
  );
}
//linear-gradient(to right top, rgb(187, 247, 208), rgb(134, 239, 172), rgb(59, 130, 246))
//bg-gradient-to-tl from rgb
