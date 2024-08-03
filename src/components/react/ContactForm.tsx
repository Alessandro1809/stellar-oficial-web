'use client';
import { useState,useEffect, useRef, type FormEvent } from "react"
export const ContactForm = () => {

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col rounded-lg p-4 gap-6 transition-all duration-1000">
          <div className="w-full flex flex-col">
            <label className="text-xl font-medium" htmlFor="name">Name:</label>
            <input
            className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
            required
            type="text"
            name="name"
            placeholder="ex. John Doe" 
            />
          </div>

          <div className="w-full flex flex-col">
          <label className="text-xl font-medium " htmlFor="email">Email:</label>
            <input
            className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
            required
            type="email"
            name="email"
            placeholder="ex. John@Doe.com" 
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-xl font-medium" htmlFor="subject">Subject:</label>
            <textarea 
                className='border-1 block w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454)]	bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none h-40 text-wrap whitespace-normal' 
                placeholder=" Hey! I have an idea in mind and I think it's an incredible project, let's schedule it and talk about it!">
            </textarea>
          </div>
          
          <input className=" hover:cursor-pointer hover:from-white/40 hover:via-cyan-300/40 hover:to-indigo-500/40 w-32 my-4 bg-gradient-to-tr from-white/20 via-cyan-300/20 to-indigo-500/20  font-medium rounded-md p-2 transition-all duration-1000 text-wrap whitespace-normal" type="submit" value="Send" />
      </form>
    
    </>
  )
}
