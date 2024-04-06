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
      <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className=" col-span-1">
          <iframe
            className=" relative w-full rounded-2xl"
            height="390"
            src="https://www.youtube.com/embed/kUMe1FH4CHE"
            title="Learn HTML – Full Tutorial for Beginners (2022)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" col-span-1 relative">
          <iframe
            className=" relative w-full rounded-2xl"
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
      <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className=" col-span-1 relative">
          <iframe
            className=" w-full relative rounded-2xl"
            height="390"
            src="https://www.youtube.com/embed/EfAl9bwzVZk"
            title="JavaScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" col-span-1 relative">
          <iframe
            className=" w-full relative rounded-2xl"
            height="390"
            src="https://www.youtube.com/embed/gieEQFIfgYc"
            title="TypeScript Full Course for Beginners | Complete All-in-One Tutorial | 8 Hours"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" col-span-1 relative">
          <iframe
            className=" w-full relative rounded-2xl"
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
      <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className=" col-span-1 relative">
          <iframe
            className=" relative w-full  rounded-2xl"
            height="390"
            src="https://www.youtube.com/embed/tRZGeaHPoaw"
            title="Git and GitHub Tutorial for Beginners"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="  col-span-1 relative">
          <iframe
            className=" relative w-full rounded-2xl"
            height="390"
            src="https://www.youtube.com/embed/RGOj5yH7evk"
            title="Git and GitHub for Beginners - Crash Course"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <h1 className=" text-3xl font-semibold my-3 text-center  text-rose-400">
         THE GREAT REACT FRAMEWORK
        </h1>
        <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4">
      <div className=" col-span-1 relative">
      <iframe 
      className=" w-full relative rounded-2xl" 
      height="390"
       src="https://www.youtube.com/embed/LDB4uaJ87e0"
        title="React Crash Course 2024" frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin"
         allowFullScreen
      />
      </div>
      <div className=" col-span-1 relative">
      <iframe 
      className=" w-full relative rounded-2xl"
       height="390"
        src="https://www.youtube.com/embed/CgkZ7MvWUAA"
         title="React Full Course for free ⚛️ (2024)" 
         frameBorder="0" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerPolicy="strict-origin-when-cross-origin" 
         allowFullScreen
         />
      </div>
        </div>
      <h1 className=" text-3xl font-semibold my-3 text-center  text-rose-400">
        PYTHON PROGRAMMING
      </h1>
      <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className=" col-span-1 relative">
          <iframe
            className=" w-full relative rounded-2xl"
            height="390"
            src="https://www.youtube.com/embed/XKHEtdqhLK8"
            title="Python Full Course for free 🐍"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className=" col-span-1 relative">
        <iframe
         className=" w-full relative rounded-2xl"
        height="390" 
        src="https://www.youtube.com/embed/_uQrJ0TkZlc" 
        title="Python Tutorial - Python Full Course for Beginners" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
        />
        </div>
      </div>
      <h1 className=" text-3xl font-semibold my-3 text-center  text-rose-400">
        THE DJANGO FRAMEWORK
      </h1>
      <div className=" w-full grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className=" col-span-1 relative">
        <iframe 
        className=" w-full relative rounded-2xl"
         height="390"
          src="https://www.youtube.com/embed/PtQiiknWUcI"
           title="Python Django 7 Hour Course" 
           frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen></iframe>
        </div>
        
      </div>
    </div>
  );
};
