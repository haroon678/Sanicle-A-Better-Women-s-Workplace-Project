import Image from "next/image";


const Solution = () => {
  return (
    <section className='bg-orange-300 flexCenter  w-full min-h-60 p-4 pb-8 '>
        <div className="flex flexCenter flex-col gap-1 px-10">
            <h3 className="text-3xl font-semibold text-left px-2">SOLUTION</h3>
            <p className="texl-xl font-normal text-left">ADDRESSING MARKET NEEDS</p>
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex gap-5 flexCenter text-xs md:text-lg md:flex-col">
                    <ul className="flex flex-col gap-5">
                        <li className="flex flex-row gap-4">
                            <Image src="/people.png" alt="star" height={40} width={40} className="bg-blue-50 rounded-full p-2 "/>
                            <p className="flexCenter">AI enabled platform for personalized wellness </p>
                        </li>
                        <li className="flex flex-row gap-4">
                            <Image src="/gears.png" alt="people" height={40} width={40} className="bg-blue-50 rounded-full  p-2" />
                            <p className="flexCenter">Enterprise-Focused Approach; Enhancing both employers’ & employees’ productivity </p>
                        </li>
                        <li className="flex flex-row gap-4 ">
                            <Image src="/engine.png" alt="coin" height={40} width={40} className="bg-blue-50 b rounded-full p-2" />
                            <p className="flexCenter">Menstrual & mental health innovation and novel women empowerment platform</p>
                        </li>
                    </ul>
                </div>
                <div className="w-full flexCenter">
                    <Image
                    src="/Solution.png"
                    width={400}
                    height={100}
                    alt="contract-image"
                    className="w-full md:w-3/5 "
                    />
                </div>
            </div>

        </div>
    </section>

  )
}

export default Solution;