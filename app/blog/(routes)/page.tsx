import { Loader2 } from 'lucide-react'
import React from 'react'

const BlogPage = () => {
  return (
    <div className=' p-24 w-full h-screen flex flex-col justify-center font-bold text-4xl text-emerald-800'>
        Blogs are coming soon..stay tuned
        <Loader2 className=' ml-5 w-32 h-32 text-white animate-spin' />
        <div className=' text-zinc-200 font-bold text-4xl'>
            <a href="/" className='hover:underline hover:cursor-pointer'>
            Back to Home page
            </a>
          
        </div>
        </div>
  )
}

export default BlogPage