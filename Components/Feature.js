const Card = ({ title, percentage, description }) => {
  return (
    <div className="p-6 border bg-blue-60  rounded-md shadow-md items-start text-center flex-col hover:transform hover:scale-110 transition duration-300">
      <p className="text-lg font-bold mb-2 text-blue-70 ">{percentage}%</p>
      <p className="text-black font-normal text-center">{description}</p>
    </div>
  );
};
const Feature = () => {
  return (
    <section className='w-full'>
      <div className='flexCenter flex-col p-10'>
      <div>
        <h1 className="text-blue-70 text-2xl font-medium text-center">How woman struggle in the workplace </h1>
      </div>
      
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-5 px-10 sm:px-10 lg:px-28 ">
          <Card
            percentage={89.3}
            description="reported that their periods affected their energy levels"
          />
          <Card
            percentage={86.9}
            description="reported that their period affected their mood"
          />
          <Card
            percentage={71.6}
            description="are unable to  concentrate at work during their period"
          />
          <Card
            percentage={45.2}
            description="reported that their symptoms require them to take days off"
          />
        </div>
      </div>
      </div>
    </section>
  )
}

export default Feature
