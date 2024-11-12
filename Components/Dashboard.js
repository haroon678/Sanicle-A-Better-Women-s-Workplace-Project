'use client'
import Image from "next/image";
import { useRouter } from 'next/navigation'

const Dashboard = () => {
    const router = useRouter()

    const handlelogoClick = () => {
      router.push('/')
  
    }
    return (
    <div>
        <section className="">
            <div className="flex flex-row px-8 w-full p-2 ">
                <div className="w-1/4">
                    <Image onClick={handlelogoClick} src="/logoDashboard.png" alt="logo" width={150} height={150} className="  "/>
                </div>
                <div className="w-1/2 flexCenter">
                    <input placeholder="ask gemini AI anything placeholder" className=" bg-blue-200 p-1 px-8 rounded-full w-full " />
                </div>
                <div className="w-1/4 flexCenter ">
                    <Image src="/wmn1.png" alt="profile" width={30} height={30} className="border-blue-50 rounded-full border-2 "/>
                    <div className="text-[8px]"> 
                        <p>Sean Josphine</p>
                        <p>Online</p>
                    </div>
                    <Image src="/arrow-down.png" alt="arrow-down" width={10} height={10} className=" mt-[-10px] "/>
                </div>
            </div>
        </section>
        <section>
            <div className="w-full flex flex-row pt-8">
                <div className="w-1/5 p-4 px-6 flex flex-col gap-10 flexCenter">
                    <div>
                        <ul className="flex gap-3 flex-col">
                            <li className="flex items-center flex-row gap-2">
                                <Image src="/star-plus.png" alt="star" width={30} height={30}/>
                                <p>favorites</p>
                            </li>
                            <li className="flex items-center flex-row gap-2">
                                <Image src="/team.png" alt="team" width={30} height={30}/>
                                <p>teams</p>
                            </li>
                            <li className="flex items-center flex-row gap-2">
                                <Image src="/wellness.png" alt="wellness" width={30} height={30}/>
                                <p>wellness</p>
                            </li>
                            <li className="flex items-center flex-row gap-2">
                                <Image src="/application.png" alt="application" width={30} height={30}/>
                                <p>applications</p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full flexCenter">
                        <ul className="flex  gap-3 flex-col">
                            <li className="flex items-center gap-1 flex-row">
                                <Image src="/chats.png" alt="chats" width={30} height={30} className=""/>
                                <p>chats</p>
                            </li>
                            <li className="flex items-center flex-row">
                                <Image src="/add-user.png" alt="add-user" width={30} height={30}/>
                                <p>add user</p>
                            </li>
                            <li className="flex items-center flex-row">
                                <Image src="/support.png" alt="star" width={40} height={40}/>
                                <p>support</p>
                            </li>
                        </ul>                        

                    </div>
                    <div>
                        <Image src="/calender.png" alt="calender" width={150} height={150}/>
                    </div>

                </div>
                <div className="w-3/5 flex gap-4 flex-col">
                    <div className="flex justify-between ">
                        <p>Today</p>
                        <button className="rounded-full p-2 bg-blue-60 text-xs">Next Week</button>
                    </div>
                    <div className="flex px-2 flex-row gap-5 w-full">
                        <div className=" flex gap-1 flex-col w-1/3 ">
                            <div className="flex pt-4 flex-row gap-2">
                                <Image src="/kate-jones.png" alt="kate-jones" width={100} height={100}/>
                                <div className="flexCenter text-sm  flex-col">
                                    <p>Kate Jones</p>
                                    <p className="text-[10px]">IT operations</p>
                                </div>
                            </div>
                            <Image src="/graph1.png" alt="graph1" width={120} height={120} />
                            <Image src="/line.png" alt="line" width={120} height={120} className="mt-[-5px]"/>
                            <p>Productivity Level</p>
                            <div className="flex flex-col gap-1 text-xs">
                                <div className="flex gap-2">
                                <input value="energy" className="rounded-lg w-12 px-1 bg-pink-300 "/>
                                <input value="motivated" className="rounded-lg w-16 px-1 bg-pink-300 "/>
                                <input value="healthy" className="rounded-lg w-14 px-1 bg-pink-300 "/>
                                </div>
                                <div className="flex gap-2">
                                <input value="focus" className="rounded-lg w-14 px-1 bg-pink-300 "/>
                                <input value="see more" className="rounded-lg w-16 px-1 bg-blue-300 "/>
                                </div>
                            </div>

                        </div>
                        <div className=" flex gap-1 flex-col w-1/3 ">
                            <div className="flex pt-4 flex-row gap-2">
                                <Image src="/juli-key.png" alt="juli-key" width={100} height={100}/>
                                <div className="flexCenter text-sm  flex-col">
                                    <p>Juli Keys</p>
                                    <p className="text-[10px]">Sales & Marketing</p>
                                </div>
                            </div>
                            <Image src="/graph2.png" alt="graph1" width={120} height={120} />
                            <Image src="/line.png" alt="line" width={120} height={120} className="mt-[-5px]"/>
                            <p>Productivity Level</p>
                            <div className="flex flex-col gap-1 text-xs">
                                <div className="flex gap-2">
                                <input value="energy" className="rounded-lg w-12 px-1 bg-pink-300 "/>
                                <input value="motivated" className="rounded-lg w-16 px-1 bg-pink-300 "/>
                                <input value="healthy" className="rounded-lg w-14 px-1 bg-pink-300 "/>
                                </div>
                                <div className="flex gap-2">
                                <input value="focus" className="rounded-lg w-14 px-1 bg-pink-300 "/>
                                <input value="see more" className="rounded-lg w-16 px-1 bg-blue-300 "/>
                                </div>
                            </div>

                        </div>
                        <div className=" flex gap-1 flex-col  w-1/3">
                            <div className="flex pt-4 flex-row gap-4">
                                <Image src="/lui-sam.png" alt="" width={100} height={100}/>
                                <div className="flexCenter text-sm  flex-col">
                                    <p>Lui Sam</p>
                                    <p className="text-[10px]">Client specialist</p>
                                </div>
                            </div>
                            <Image src="/graph3.png" alt="graph3" width={120} height={120} />
                            <Image src="/line.png" alt="line" width={120} height={120} className="mt-[-5px]"/>
                            <p>Productivity Level</p>
                            <div className="flex flex-col gap-1 text-xs">
                                <div className="flex gap-2">
                                <input value="energy" className="rounded-lg w-12 px-1 bg-pink-300 "/>
                                <input value="motivated" className="rounded-lg w-16 px-1 bg-pink-300 "/>
                                <input value="healthy" className="rounded-lg w-14 px-1 bg-pink-300 "/>
                                </div>
                                <div className="flex gap-2">
                                <input value="focus" className="rounded-lg w-14 px-1 bg-pink-300 "/>
                                <input value="see more" className="rounded-lg w-16 px-1 bg-blue-300 "/>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="flexCenter bg-[#E2FFFF] rounded-2xl ">
                        <div  className="px-8 p-4 w-full flex gap-3 flex-col">

                            <input value="Activities" className="bg-white p-1 w-full text-sm text-center rounded-full "  />
                            <div className="flex flex-row w-full">
                                <div className="flex flex-col w-1/5 gap-4">
                                    <Image src="/new-product.png" alt="new-product" width={40} height={40}/>
                                    <Image src="/stakeholder.png" alt="stakeholder" width={40} height={20}/>
                                    <Image src="/client-support.png" alt="client-support" width={40} height={20}/>
                                </div>
                                <div className="flex font-semibold flex-col w-3/5 gap-8">
                                    <h3>New Product discovery</h3>
                                    <h3>Stakeholders Management</h3>
                                    <h3>Client Support</h3>

                                </div>
                                <div className="flex flex-col w-1/5 gap-8">
                                    <input value="Paused" className="bg-[#93EEF6] rounded-full text-[#108892] text-center "/>
                                    <input value="on going" className="bg-[#93EEF6] rounded-full text-[#108892] text-center "/>
                                    <input value="delayed" className="bg-[#FFD8CE] text-[#EF4D23] rounded-full text-center "/>
                                </div>
                            </div>
                            <input value="View more Activities" className=" text-sm p-1 bg-white w-full text-center rounded-full "  />
                        </div>
                        
                    </div>

                </div>
                <div className=" w-1/5 pl-6 flex gap-4 flex-col">
                    <div className="flex-col gap-8">
                        <div className="flex flexCenter gap-1 flex-row">
                            <Image src="/rating.png" alt="rating" width={40} height={40}/>
                            <div className="flex text-[#0EB2C0] flex-col">
                                <p className=" text-lg font-bold ">7867.4</p>
                                <p>project rating</p>
                            </div>
                        </div>
                        <div className=" flex-col gap-4">
                            <p>active</p>
                            <input className="bg-[#93EEF6] w-28 h-4 rounded-full"/>
                            <p>inactive</p>
                            <input className="bg-[#FFD8CE] w-14 h-4 rounded-full"/>
                            <p>other</p>
                            <input className="bg-[#D9D9D9] w-14 h-4 rounded-full"/>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="">New</p>
                        <div className="flex flex-row gap-2">
                            <Image src="/profile1.png" alt="profile1" width={30} height={30}/>
                            <div className="flex text-xs flex-col">
                                <p>Naomi Water</p>
                                <p>uxwrite</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-2">
                            <Image src="/profile2.png" alt="profile2" width={30} height={30}/>
                            <div className="flex flex-col text-xs">
                                <p>Sumie Tays</p>
                                <p>consultant</p>
                            </div>
                        </div>
                    </div>
                    <div >
                        <p>Tools</p>
                        <div className="w-11/12 pt-4">
                            <div className="flex flex-row justify-between">
                                <Image src="/tool1.png" alt="tool1" width={40} height={40}/>
                                <input value="connect" className="rounded-full text-xs max-w-20 text-center  bg-[#93EEF6] p-2"/>
                            </div>
                        </div>
                        <div className="w-11/12 pt-4">
                            <div className="flex flex-row justify-between">
                                <Image src="/tool2.png" alt="tool2" width={40} height={40}/>
                                <input value="connect" className="rounded-full text-xs max-w-20 text-center  bg-[#93EEF6] p-2"/>
                            </div>
                        </div>
                        <div className="w-11/12 pt-4">
                            <div className="flex flex-row justify-between">
                                <Image src="/tool3.png" alt="user-rating" width={40} height={40}/>
                                <input value="user rating" className="rounded-full text-xs max-w-20 text-center  bg-[#93EEF6] p-2"/>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>

        </section>

    </div>
  ) 
}

export default Dashboard;
