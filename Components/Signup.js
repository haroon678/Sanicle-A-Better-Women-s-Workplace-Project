'use client'
import Image from "next/image"
import { useState } from "react";
import { useRouter } from 'next/navigation'

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter()

  const LoginHandle = () => {
    router.push('/auth/Login')
  }
  const validateEmail = (input) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(input);
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password || !confirmPassword || !email) {
      setError('Please fill in all required fields.');
      return;
    }

    // Validate email format
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    if (password != confirmPassword){
      setError('Password are not matching');
      return;
    }

    // Email is valid, continue with form submission logic
    // Example: Submit form data to backend or trigger further actions

    // Clear error and reset email input
    setError('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };
  return (
    <section className='w-full flexCenter pb-4'>
      <div className="w-full px-2 sm:px-10 pt-2">
        <div className="flex flexCenter w-full sm:justify-start sm:px-20 ">
          <Image src="/logo.png" alt="logo" width={120} height={120}/>
        </div>
        <div className="flex flex-col flexCenter sm:flex-row w-full">
          <div className="flexCenter mt-[-20px] sm:mt-[-60px] sm:w-1/2 sm:flexCenter">
            <Image src="/group_.png" alt="group" width={200} height={250} className="sm:w-[400px] sm:h-[600px]"/>
          </div>
          <div className="flexCenter gap-3 flex-col sm:w-1/2 ">
            <p className="text-lg">Get Started</p>
            <input placeholder="Enter Name" type="" value={name} onChange={handleNameChange} className="w-3/4 p-1 text-center px-4 rounded-lg border-2 border-red-50" />
            <input placeholder="Enter Email" value={email} onChange={handleEmailChange} type="email" className="w-3/4 p-1 text-center px-4 rounded-lg border-2 border-red-50" />
            
            <input placeholder="Enter password" type="password" value={password} onChange={handlePasswordChange} className="w-3/4 p-1 px-4 text-center rounded-lg border-2 border-red-50"/>
            <input placeholder="Confirm password" value={confirmPassword}  onChange={handleConfirmPasswordChange} type="password" className="w-3/4 p-1 px-4 text-center rounded-lg border-2 border-red-50"/>
            <input type="submit" onClick={handleSubmit} value="Sign Up" className="w-3/4  p-1 px-4 text-center rounded-lg bg-red-50"/>
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            <div className="flex flex-row">
              <p >Have a account.</p><h5 className="text-blue-50" onClick={LoginHandle}>Sign In Here</h5>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup
