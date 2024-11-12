import Image from "next/image"
const Footer = () => {
  return (
    <section className="w-full min-h-20">
        <div className="flexCenter bg-blue-50  p-4">
            <div className=" text-xs md:text-base  text-white flexCenter flex-row">
                <p> All right Reserved </p>
                    <Image                     
                        src="/icon5.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />
                    <Image className="mb-4 mr-0 "               
                        src="/icon6.png"
                        width={50}
                        height={50}
                        alt="Picture of the author"
                    />
                    <p>2024</p>
            </div>
        </div>
    </section>

  )
}

export default Footer
