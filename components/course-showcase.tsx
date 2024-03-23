"use client"

import React from "react";
import { CourseDisplayCard } from "./ui/course-display-card";


export const CourseShowcase = () => {
  return (
    <div
      className="w-full flex flex-col h-full gap-y-3
     bg-[url('/images/course-bg.jpg')] px-5 bg-cover bg-center py-4"
    >
     <CourseDisplayCard />
    </div>
  );
};
