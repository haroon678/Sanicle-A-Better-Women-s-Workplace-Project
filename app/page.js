import Benefits from "@/Components/Benefits";
import Callaction from "@/Components/Callaction";
import Contact from "@/Components/Contact";
import Contract from "@/Components/Contract";
import Feature from "@/Components/Feature";
import Footer from "@/Components/Footer";
import Footermenu from "@/Components/Footermenu";
import Hero from "@/Components/Hero";
import Navbar from "@/Components/Navbar";


import Solution from "@/Components/Solution";
import ChatComponent from "@/Components/chatbot";

export default function Home() {
  return (
    <>
      
      <Navbar/>
      <Hero/>
      <Feature />
      <Callaction />
      <Benefits/>
      <Contact/>
      <ChatComponent/>
       
      <Solution/>
      <Footermenu/>  
      <Footer/>
      
    </>
  );
}
