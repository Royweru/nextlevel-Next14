import React from "react";
import { Header } from "./header";
import { CourseShowcase } from "./course-showcase";

export const Elevate = () => {
  return (
    <div
      className=" w-full h-full py-3 flex flex-col font-semibold text-xl bg-slate-300 px-4"
      id="elevate"
    >
      <div className=" flex flex-col gap-y-2 w-full my-2">
        <div className=" font-semibold  font-serif text-2xl  text-black text-center">
          A GUIDE FOR SOME OF THE BEST TUTORIALS IN MODERN PROGRAMMING
        </div>
      </div>

      <h1 className=" text-3xl font-semibold font-serif my-3  text-center text-rose-400">
        HTML AND CSS
      </h1>
      <div className=" w-full flex flex-wrap gap-4">
        <div>
          <iframe
            className=" relative md:w-[620px] sm:w-[400px] w-[450px]"
            height="390"
            src="https://www.youtube.com/embed/kUMe1FH4CHE"
            title="Learn HTML – Full Tutorial for Beginners (2022)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            className=" relative md:w-[620px] sm:w-[400px] w-[450px]"
            height="390"
            src="https://www.youtube.com/embed/HGTJBPNC-Gw"
            title="HTML &amp; CSS Full Course for free 🌎 (2023)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <h1 className=" text-3xl font-semibold my-3 text-center  text-rose-400">
        JAVASCRIPT AND TYPESCRIPT
      </h1>
      <div className=" w-full flex flex-wrap gap-4">
        <div>
          <iframe
            className=" relative md:w-[620px] sm:w-[400px] w-[450px]"
            height="390"
            src="https://www.youtube.com/embed/EfAl9bwzVZk"
            title="JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            className=" relative md:w-[620px] sm:w-[400px] w-[450px]"
            height="390"
            src="https://www.youtube.com/embed/gieEQFIfgYc"
            title="TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <iframe
            className=" relative md:w-[620px] sm:w-[400px] w-[450px]"
            height="390"
            src="https://www.youtube.com/embed/30LWjhZzg50"
            title="Learn TypeScript – Full Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <h1 className=" text-3xl font-semibold my-3 text-center  text-rose-400">
        GIT AND GITHUB
      </h1>
      <div className=" w-full flex flex-wrap gap-4">
        <div>
        <iframe 
        className=" relative md:w-[620px] sm:w-[400px] w-[450px]"
         height="390"
          src="https://www.youtube.com/embed/hrTQipWp6co"
           title="Git and GitHub - 0 Experience to Professional in 1 Tutorial (Part 1)"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen/>
            
        </div>
        <div>
          <iframe
            className=" relative md:w-[620px] sm:w-[400px] w-[450px]"
            height="390"
            src="https://www.youtube.com/embed/HGTJBPNC-Gw"
            title="HTML &amp; CSS Full Course for free 🌎 (2023)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};
