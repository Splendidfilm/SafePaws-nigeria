'use client'
import { useState } from 'react'
// import React, useState from 'react'
import Logo from '../ui/Logo'
import Button from '../ui/button'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'


export default function LoginForm() {
    const router = useRouter() 
    const [visible, setVisible] = useState(false)
    const [animate, setAnimate] = useState(false)

  return (
<div className="layout-container flex h-full grow flex-col justify-center items-center p-4 relative z-10">
{/* <!-- Login Card --> */}
<div className="w-full bg-white dark:bg-[#1e2e2b] rounded-xl shadow-lg border border-transparent dark:border-[#2a3e3b] overflow-hidden">
{/* <!-- Logo Section --> */}
<div className="flex flex-col items-center pt-10 pb-4 px-8">
<Logo/>
</div>
{/* <!-- Header Text --> */}
<div className="px-8 pb-6 text-center">
<p className="text-text-main dark:text-white tracking-light text-[32px] font-bold leading-tight mb-3">Welcome back</p>
<p className="text-text-sub dark:text-[#a0b3b0] text-sm font-normal leading-normal">Please enter your details to sign in.</p>
</div>
{/* <!-- Form --> */}
<form className="flex flex-col gap-5 px-8 pb-10">
{/* <!-- Email Field --> */}
<label className="flex flex-col flex-1">
<p className="text-text-main dark:text-white text-base font-medium leading-normal pb-2">Email Address</p>
<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-main dark:text-white focus:outline-0 focus:ring-1 focus:ring-[#17CFAD] border border-border-color dark:border-[#2a3e3b] bg-white dark:bg-[#11211e] focus:border-primary h-14 placeholder:text-text-sub p-3.75 text-base font-normal leading-normal transition-colors text-brand-green " placeholder="example.gmail.com" type="email" />
</label>


{/* <!-- Password Field --> */}
<label className="flex flex-col flex-1">

<p className="text-text-main dark:text-white text-base font-medium leading-normal pb-2">
    Password
    </p>
<div className="flex w-full flex-1 items-stretch rounded-lg group focus-within:ring-1 focus-within:ring-[#17CFAD] focus-within:border-primary border border-border-color dark:border-[#2a3e3b] bg-white dark:bg-[#11211e]">

<input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-l-lg border-none bg-transparent text-text-main dark:text-white focus:outline-0 focus:ring-0 h-14 placeholder:text-text-sub p-[15px] pr-2 text-base font-normal leading-normal" placeholder="Enter password" type="password" required/>
<div className="text-text-sub flex items-center justify-center pr-[15px] pl-2 rounded-r-lg cursor-pointer hover:text-primary transition-colors">
<span 
onClick={() => setVisible(!visible) }
className="material-symbols-outlined">
    {visible ? 'visibility' : 'close'}</span>
</div>
</div>
</label>
{/* <!-- Checkbox & Forgot Password --> */}
<div className="flex items-center justify-between flex-wrap gap-3">
<label className="flex gap-x-3 items-center cursor-pointer">
<input className="custom-checkbox h-5 w-5 rounded border-border-color dark:border-[#2a3e3b] border-2 bg-transparent text-primary checked:bg-primary checked:border-primary focus:ring-0 focus:ring-offset-0 focus:border-border-color dark:focus:border-[#2a3e3b] focus:outline-none transition-all text-[#2a3e3b]" type="checkbox" required />
<p className="text-text-main text-sm dark:text-white  font-normal leading-normal">Remember for 30 days</p>
</label>
<a className="text-primary hover:text-primary/80 font-medium text-sm transition-colors hover:text-[#17CFAD] hover:underline cursor-pointer " href="#">Forgot password?</a>
</div>
{/* <!-- Submit Button --> */}
<div className="pt-2 gap-6 flex flex-col items-center justify-center ">
<Button
size='md'
variant='primary'
className='w-full justify-center align-center gap-1 hover:gap-2 group  flex flex-row transition-all '
onClick={() => {
    setAnimate(!animate)

      setTimeout(() => {
    setAnimate(false)
  }, 4000)
    router.push('')
    }}
>
    <span className={'material-symbols-outlined' + animate ? 'animate-pulse' : 'animate-none'} >pets</span>
<span className={animate ? 'hidden transition-all' : 'block transition-all '} >Sign In</span>
</Button>

<div className='flex items-center justify-center text-center h-5 gap-4 w-full' >
    <motion.div className="bg-white/20 h-1 w-2/4 rounded-[200%] shadow-[0_2px_12px_rgba(255,255,255,0.20)] "/>
<p
className='text-base text-center text-zinc-400'
>
    or 
</p>
    <motion.div className="bg-white/20 backdrop-blur-3xl h-1 w-2/4 rounded-[200%] shadow-[0_2px_12px_rgba(255,255,255,0.20)]"/>
</div>

<Button
size='md'
variant='outline'
className='w-full'
// onClick={}
>
    Google
</Button>
</div>
{/* <!-- Footer Sign Up Link --> */}
<div className="flex justify-center items-center gap-2 pt-2">
<p className="text-text-sub dark:text-[#a0b3b0] text-sm font-normal">New to SafePaws?</p>
<a className="text-primary hover:text-primary/80 text-sm font-bold transition-colors hover:text-[#17CFAD] hover:underline cursor-pointer" 
onClick={() => router.push('/register')}

>Create an account</a>
</div>
</form>
</div>
{/* <!-- Optional: Simple Footer/Copyright --> */}
<div className="mt-8 text-center">
<p className="text-xs text-text-sub dark:text-[#a0b3b0]">© 2026 SafePaws Nigeria. All rights reserved.</p>
</div>
</div>
  )
}
