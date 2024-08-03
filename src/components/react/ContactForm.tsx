import { useState,useEffect, type FormEventHandler, type FormEvent } from "react"
export const ContactForm = () => {

  const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();


  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col bg-gradient-to-tr from-white/20 via-cyan-300/20 to-indigo-500/20 rounded-lg p-4">
          <div className="w-full flex flex-col">
            <label className="text-xl font-medium" htmlFor="name">Name:</label>
            <input
            className=" bg-white/40 placeholder:text-black/70 font-medium rounded-sm p-2"
            required
            type="text"
            name="name"
            placeholder="ex. John Doe" 
            />
          </div>

          <div className="w-full flex flex-col">
          <label className="text-xl font-medium " htmlFor="email">Email:</label>
            <input
            className=" bg-white/40 placeholder:text-black/70 font-medium rounded-sm p-2"
            required
            type="email"
            name="email"
            placeholder="ex. John@Doe.com" 
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-xl font-medium" htmlFor="subject">Subject:</label>
            <input
            className=" bg-white/40 placeholder:text-black/70 font-medium whitespace-normal h-32 rounded-sm p-2" 
            required
            type="text"
            name="subject"
            placeholder="ex. Hey! I have an idea in mind and I think it's an incredible project, let's schedule it and talk about it!" 
            />
          </div>

          <input className="w-32 my-4 bg-slate-300/40 font-medium rounded-md p-2" type="submit" value="Send" />
      </form>
    
    </>
  )
}
