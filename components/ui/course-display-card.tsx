"use client"

import React from 'react'
import Image from "next/image";
import { Header } from '../header';

import { Play } from 'lucide-react';
import {  useCourseModal } from '@/hooks/useCourseModal';
export const CourseDisplayCard = ({course}:{
    course:any
}) => {
    const {onOpen} = useCourseModal()
  return (
    <div className=" flex flex-col  md:flex-row w-5/6 justify-center 
    items-center space-x-4 bg-[url('/images/waterbg.jpg')] p-3 
    rounded-md bg-cover bg-center gap-y-2
    hover:cursor-pointer group
    " onClick={()=>onOpen(course)}>
      <div className=" relative w-full h-[400px] rounded-2xl">
        <Image
          fill
          src={"/images/nextjscov.jpg"}
          className="rounded-2xl bg-center bg-cover group-hover:scale-105"
          alt=""
        />
        <div className=' absolute  bottom-2 opacity-0 group-hover:opacity-100'>
          <Play className=' w-12 h-12 text-blue-200'/>
        </div>
      </div>
      <div className=" flex flex-col space-y-4">
        <Header title={course?.title} />
        <p className=" font-bold text-black font-mono text-2xl italic tracking-wide">
         {course.description}
        </p>
        <p className=' text-sm font-semibold font-serif text-gray-800'>
           click anywhere to begin your journey
        </p>
      </div>
    </div>
  )
}
