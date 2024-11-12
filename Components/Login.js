'use client'
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { useRouter } from 'next/navigation'
import { useState } from "react"

const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const router = useRouter()

  
  const handleNew = () => {
    router.push('/auth/Signup')
  }
  const validateEmail = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  };
  const handleSignin = (e) => {
    e.preventDefault();
    if (!email || !password ) {
      setError('Please fill in all required fields.');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }

    else
      router.push('/Dashboard')

    // Email is valid, continue with form submission logic
    // Example: Submit form data to backend or trigger further actions

    // Clear error and reset email input
    setError('');
    setEmail('');
    setPassword('');
  };
  return (
    <section className='w-full flexCenter pb-4'>
      <div className="w-full px-2 sm:px-10 pt-2">
        <div className="flex flexCenter w-full sm:justify-start sm:px-20 ">
          <Image src="/logo.png" alt="logo" width={120} height={120}/>
        </div>
        <div className="flex flex-col flexCenter sm:flex-row w-full">
          <div className="flexCenter mt-[-20px] sm:mt-[-60px] sm:w-1/2 sm:flexCenter">
            <Image src="/group_.png" alt="group" width={250} height={250} className="sm:w-[400px] sm:h-[600px]"/>
          </div>
          <div className="flexCenter gap-3  flex-col sm:w-1/2 sm:flex sm:gap-6 ">
            <p className="text-lg">Get Started</p>
            <input onChange={(e)=>{
              setEmail(e.target.value)

            }} placeholder="Enter Email" type="email" className="w-3/4 p-1 text-center px-4 rounded-lg border-2 border-red-50" />
            <input onChange={(e) => {
              setPassword(e.target.value)
            }} placeholder="Enter password" type="password" className="w-3/4 p-1 px-4 text-center rounded-lg border-2 border-red-50"/>
            <input type="submit" value="Sign In" onClick={handleSignin}  className="w-3/4  p-1 px-4 text-center rounded-lg bg-red-50"/>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            <a className="text-blue-50"  onClick={handleNew}>Create New Account here.</a>

            
            

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Login
