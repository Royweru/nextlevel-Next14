import React from 'react'
import { Header } from './header'
import { CourseShowcase } from './course-showcase'

export const Elevate = () => {

  return (
    <div className=' w-full h-full py-3 flex flex-col font-semibold text-xl bg-gray-50 text-zinc-900 p-0'>
      <Header title='Elevate your coding skills become a better developer today' subt='what do we mean by this by this and by this by this' />
    
      <CourseShowcase />
    </div>
  )
}
