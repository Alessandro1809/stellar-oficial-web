'use client';
import { useState, type FormEvent } from "react"
import { type Email } from "@/lib/types/mailTypes";
import { sendEmail } from "@/lib/emailservice"
export const ContactForm = () => {

  const mail: Email = {
    name: "",
    email: "",
    message: ""
  }
  const [usermail,setUsermail] = useState(mail) ;


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendEmail(
        usermail.name,
        usermail.email,
        usermail.message
      );
      setUsermail(mail); 
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col rounded-lg p-4 gap-6 transition-all duration-1000">
          <div className="w-full flex flex-col">
            <label className="text-xl font-medium" htmlFor="name">Name:</label>
            <input
            className='border-1  h-12 w-full rounded-md  px-3 py-2 text-slate-200 transition-all duration-500 focus:outline-none bg-[#1d2b43]/50'
            required
            type="text"
            name="name"
            placeholder="ex. John Doe"
            value={usermail.name}
            onChange={(e) => setUsermail({ ...usermail, name: e.target.value })} 
            />
          </div>

          <div className="w-full flex flex-col">
          <label className="text-xl font-medium " htmlFor="email">Email:</label>
            <input
            className='border-1  h-12 w-full rounded-md  px-3 py-2 text-slate-200 transition-all duration-500 focus:outline-none bg-[#1d2b43]/50'
            required
            type="email"
            name="email"
            placeholder="ex. John@Doe.com"
            value={usermail.email}
            onChange={(e) => setUsermail({ ...usermail, email: e.target.value })}
            />
          </div>
          <div className="w-full flex flex-col">
            <label className="text-xl font-medium" htmlFor="subject">Subject:</label>
            <textarea 
                className='border-1 h-40 w-full rounded-md  px-3 py-2 text-slate-200 transition-all duration-500 focus:outline-none bg-[#1d2b43]/50' 
                placeholder=" Hey! I have an idea in mind and I think it's an incredible project, let's schedule it and talk about it!"
                value={usermail.message}
                onChange={(e) => setUsermail({ ...usermail, message: e.target.value })}>
            </textarea>
          </div>
          
          <input className=" hover:cursor-pointer hover:from-white/40 hover:via-cyan-300/40 hover:to-indigo-500/40 w-32 my-4 bg-gradient-to-tr from-white/20 via-cyan-300/20 to-indigo-500/20  font-medium rounded-md p-2 transition-all duration-1000 text-wrap whitespace-normal" type="submit" value="Send" />
      </form>
    
    </>
  )
}
