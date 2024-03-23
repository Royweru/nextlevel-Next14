import React from 'react'


interface HeaderProps{
    title:string,
    subt?:string
}
export const Header = ({
    title,
    subt
}:HeaderProps) => {
  return (
    <div className=' flex flex-col gap-y-3 font-semibold w-full text-center rounded-md'>
        <h1 className=' text-3xl text-zinc-700 underline italic'>
          {title}
        </h1>
        <p className=' text-sm font-black italic '>
          {subt}
        </p>
    </div>
  )
}
