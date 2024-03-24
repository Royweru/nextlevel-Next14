"use client"
import React,{useEffect, useState} from 'react'
import { CourseModal } from '../modal/course-modal'

const ModalProvider = () => {
    const [isMounted,setIsMounted] = useState(false)

    useEffect(()=>{
        setIsMounted(true)
    },[])

    if(!isMounted)return null
  return (
     <>
      <CourseModal />
     </>
  )
}

export default ModalProvider