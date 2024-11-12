'use client'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()

  const hanldeDemoButton = () => {
    router.push('/auth/Login')

  }
  return (
    <section className="w-full flex justify-center items-center">
      <div className="flex flex-col pb-6 gap-8 p-4 px-10 w-full max-w-4xl md:flex md:flex-row md:items-center ">
        {/* Text and Button Section */}
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 md:w-1/2">
          <h1 className="font-semibold text-center text-2xl md:text-3xl">
            Revolutionizing women's workplace health
          </h1>
          <div className="flex flex-row gap-0">
            <input type="email" placeholder="Work Email" className="p-2 pl-4 rounded-full border-2 border-blue-50 "></input>
            
            <Link legacyBehavior href="/auth/Login">
            <input type="submit" onClick={hanldeDemoButton} value="Book a Demo" className="rounded-full z-10 ml-[-80px] text-white bg-blue-50 p-2 px-4" ></input>
            </Link>
          </div>

        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center md:w-1/2">
          <img
            src="/image11.png"
            alt="Your Image"
            className="rounded-full w-64 h-64 md:w-80 md:h-80"
            style={{
              clipPath: 'circle(50% at 50% 50%)', // Clip the image to the shape of the circle
              objectFit: 'cover', // Ensure the image fills the circular area
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
