"use client"
import React,{useState,useEffect} from 'react'
import emailjs from '@emailjs/browser';
import { Button } from '../ui/button';
import { Loader2 } from 'lucide-react';

export const ContactForm = () => {
  const[name,setName] = useState("")
  const[email,setEmail] = useState("")
  const[message,setMessage] = useState("")
  const[isLoading,setIsLoading] = useState(false)
  const [err,setErr] = useState("")
  const [success,setSuccess] = useState("")

  const onSubmit= async()=>{
    const templateParams={
      from_name:email,
      to_name:"Weru Roy",
      message
    }
    try {
      setIsLoading(true)
       await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID as string
      )
      setSuccess(`Your feedback has been gladly received, thanks ${name}`)
      setName("")
      setEmail("")
      setMessage("")

    } catch (error:any) {
      console.error
      setErr(error)
    }finally{
      setIsLoading(false)
    }
  }
  return (
    <form action="" className=' w-full py-6'>
         <div className='grid w-full px-4 md:px-12 grid-cols-1 gap-4 md:grid-cols-2'>
            <input
             type="text" 
            className='p-5 col-span-1 rounded-xl bg-gray-500 
            font-semibold font-serif text-xl text-zinc-900'
             value={name}
             onChange={(e)=>setName(e.target.value)}
             placeholder='Your name....'
             />
             <input
             type="email" 
            className='p-5 col-span-1 rounded-xl bg-gray-500 
            font-semibold font-serif text-xl text-zinc-900'
             value={email}
             placeholder='your email adress...'
             onChange={(e)=>setEmail(e.target.value)}
             />
             <textarea
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              className=' md:col-span-2 col-span-1 p-6 rounded-xl bg-gray-500 
              font-semibold font-serif text-xl text-zinc-900'
              placeholder='leave a feedback let me know something, I will appreciate..'
             />
      </div>
      <div className=' w-full flex justify-center mt-3'>
         <Button variant="ghost" 
         className=' w-4/5 rounded-2xl font-semibold text-2xl' onClick={onSubmit}
         disabled={isLoading}
         >
         {isLoading?  <div>
          <Loader2 className=' animate-spin mr-2 h-12 w-12'/> Submitting...
          </div>:<div>SUBMIT</div>}
         </Button>
      </div>
      {success &&(
         <div className=' w-full bg-emerald-900 p-4 font-semibold text-black font-serif'>
         {success}
        </div>
      )}
     
    </form>
   
  )
}
