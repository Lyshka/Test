"use client";

import { useContext, useEffect } from "react";

import { ScrollContext } from "@/context/ScrollContext";
import Scroll from "./Scroll";

const Blog = () => {
  const { scroll } = useContext<any>(ScrollContext);

  function detectMob() {
    const toMatch = [
      /Android/i,
      /webOS/i,
      /iPhone/i,
      /iPad/i,
      /iPod/i,
      /BlackBerry/i,
      /Windows Phone/i,
    ];

    return toMatch.some((toMatchItem) => {
      return navigator.userAgent.match(toMatchItem);
    });
  }

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);

  return (
    <aside className="flex lg:mt-0 mt-[230px] lg:w-[531px] w-full flex-col items-center lg:gap-6 gap-[18px] mb-[120px] lg:mb-0 relative z-[2]">
      <h2 className="uppercase text-white lg:text-[40px] text-[32px] font-semibold leading-10">
        blog
      </h2>

      <div className="lg:h-[595px] h-[421px] lg:w-auto w-full self-stretch lg:rounded-[100px] rounded-[50px] lg:border-[3px] border-2 border-[#478BF9] backdrop-blur-[10px] bg-white/[12%] lg:pt-5 lg:pl-5 lg:pb-5 pt-[10px] pl-[10px] pb-[10px] flex gap-4 overflow-hidden">
        <Scroll />

        <div className="lg:w-2 w-1 lg:h-[403px] h-[301px] bg-white/[12%] rounded relative top-1/2 -translate-y-1/2 mr-2">
          <div
            style={{ height: 403/ 5, top: scroll * (detectMob() ? 2.13 : 1.32) }}
            className={`w-full bg-[#478BF9] rounded-[10px] absolute`}
          >
            &nbsp;
          </div>
        </div>
      </div>
    </aside>
  );
};
export default Blog;
