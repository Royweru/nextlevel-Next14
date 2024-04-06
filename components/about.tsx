import React from 'react'
import { ScrollArea } from './ui/scroll-area'
import Image from 'next/image'

export const About = () => {
  return (
    
    <div className=' w-full h-full bg-gradient-to-bl from-blue-100 via-sky-300 to-zinc-800 px-12 py-5'>
       <ScrollArea className=' h-[500px] w-full relative'>
         <div className=' w-full flex flex-col items-center gap-y-2 justify-evenly'>
             <div className=' w-2/4 h-[450px] relative'>
                 <Image
                  fill 
                  src={"/images/coding.jpg"}
                  alt=''
                  className='rounded-md bg-cover bg-center'
                  />
             </div>
            <p className=' text-2xl font-semibold font-mono text-white tracking-wide'>
            Have you ever scrolled through YouTube or searched for tutorials and courses to learn programming, only to end up disappointed? Well, worry no more, because I&apos;ve crafted this guide to accompany you on your coding journey from zero to hero. Whether you&apos;re a novice or an experienced programmer, there&apos;s always something new to learn. Starting with HTML and CSS and progressing to more advanced concepts, you&apos;ll learn from the best instructors and follow some of the most well-structured courses available. As a fully self-taught developer myself, I understand the struggle of navigating through countless tutorials, many of which can be misleading. That&apos;s why I&apos;ve created this straightforward guide to steer you toward the best resources and help you acquire the necessary skills. Feel free to check it out, and rest assured that I&apos;ll keep it updated as new changes and advancements are introduced.
            </p>
         </div>
       </ScrollArea>
    </div>
  )
}
