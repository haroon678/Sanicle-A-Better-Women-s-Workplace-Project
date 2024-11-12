const Card = ({ img, description }) => {
    return (
        <div className='flexCenter flex-col hover:transform hover:scale-110 transition duration-300'>
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-red-50">
                <img src={img} alt="Logo 1" className="w-10 h-10" />
            </div>
            <p className="font-['Poppins'] text-lg font-normal text-center">{description}</p>
        </div>
    );
  };

const Callaction = () => {
  return (
    <section className='w-full bg-blue-60 flexCenter flex-col p-10 px-10'>
    <h1 className="text-2xl text-red-60 font-semibold text-center">Our Solution</h1>
    <p className="text-xl text-black font-medium text-center">An efficient way to manage your period symptoms at work</p>
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 place-items-center md:gap-12 lg:gap-2 p-10">
            <Card
              img="icon3.png"
              description="Easy to use period planner"
            />
            <Card
              img="icon1.png"
              description="Cycle tracking make seamless"
            />
            <Card
              img="icon4.png"
              description="Chat with your  period AI bot"
            />
            <Card
              img="icon2.png"
              description="Book sessions with your doctor"
            />
        </div>
        
    </div>
</section>


  )
}

export default Callaction
