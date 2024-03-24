"use client"

import React from "react";
import { CourseDisplayCard } from "./ui/course-display-card";
export const CourseShowcase = () => {
    const courses=[
        {
            id:1,
            title:"Fundamentals of Next JS ",
            description:" This course will teach you as a new bee or begginer everything you need to know to grasp the foundation of this great framework",
            chapters:[
                {
                    title:"Introduction to Next JS",
                    path: "/assets/introduction.docx"
                },
                {
                    title:"Apiroutes",
                    path: "/assets/apiroutes.docx"
                },
                {
                    title:"Auth",
                    path: "/assets/auth.docx"
                },
                {
                    title:"Data fetching",
                    path: "/assets/datafetch.docx"
                },
                {
                    title:"Deployment ",
                    path: "/assets/deployment.docx"
                },
                {
                    title:"Optimization",
                    path: "/assets/optimization.docx"
                }, 
                 {
                    title:"Routing in Next JS",
                    path: "/assets/routing.docx"
                },
                {
                    title:"Static Site Generation",
                    path: "/assets/ssg.docx"
                },
            ]
        }
    ]
  return (
    <div
      className="w-full flex flex-col h-full gap-y-3
     bg-[url('/images/course-bg.jpg')] px-5 bg-cover bg-center py-4"
    >
        {courses.map(course=>(
            <CourseDisplayCard key={course.id} course={course}/>
        ))}
    
    </div>
  );
};
