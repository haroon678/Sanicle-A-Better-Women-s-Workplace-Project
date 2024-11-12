import Image from "next/image";


const Contract = () => {
  return (
    <section className='bg-orange-300  w-full min-h-60 p-4 pb-8 '>
        <div className="flexCenter flex-col gap-2">
            <h3 className="text-3xl font-semibold text-center px-2 md:px-20 lg:px-40 xl:px-80">One pay-per-use contract for thousands of health and wellness benefits.</h3>
            <div className="flex flex-col gap-4 md:flex-row">
                <div className="w-full flexCenter">
                    <Image
                    src="/contract.png"
                    width={250}
                    height={250}
                    alt="contract-image"
                    />
                </div>
                <div className="flex flex-col-reverse gap-5 flexCenter text-xs md:text-lg md:flex-col">
                    <ul className="flex flex-col gap-5">
                        <li className="flex flex-row gap-4">
                            <Image src="/star.png" alt="star" height={40} width={40}/>
                            <p className="flexCenter">You choose the budget</p>
                        </li>
                        <li className="flex flex-row gap-4">
                            <Image src="/people.png" alt="people" height={40} width={40} />
                            <p className="flexCenter">We handle the administration</p>
                        </li>
                        <li className="flex flex-row gap-4 ">
                            <Image src="/coin.png" alt="coin" height={40} width={40}/>
                            <p className="flexCenter">Unspent funds return to your budget</p>
                        </li>
                    </ul>
                    <div className="flex flex-row gap-0">
                        <input type="email" placeholder="Work Email" className="p-2 pl-4 rounded-full"></input>
                        <input type="submit" value="Book a Demo" className="rounded-full z-10 text-white bg-blue-50 p-2 px-4" ></input>
                    </div>

                </div>
            </div>

        </div>
    </section>

  )
}

export default Contract;