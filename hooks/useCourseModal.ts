import { create } from "zustand"




 export interface CourseData{
    id?:number,
    title?:string,
    description?:string,
    chapters?:{
       title:string,
       path:string,
    }[]
}

interface CourseModalStore{
   isOpen:boolean,
   onOpen:(data?:CourseData)=>void,
   onClose:()=>void,
   data:CourseData
}
export const useCourseModal = create<CourseModalStore>((set)=>(
    {
       isOpen:false,
       onOpen:(data={})=>set({isOpen:true,data}),
      
       onClose:()=>set({isOpen:false}),
       data:{}
    }
))
