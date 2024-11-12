
const Card = ({ name, description, price }) => {
  return (
    <div className=" bg-white flexCenter w-full flex-col rounded-lg shadow-lg p-6 hover:transform hover:scale-110 transition duration-30">
      <h2 className="text-blue-700 text-xl font-medium mb-2">{name}</h2>
      <p className="text-black mb-4 font-normal text-center">{description}</p>
      <p className="text-blue-700 text-lg text font-bold">{price}</p>
    </div>
  );
};

const Contact = () => {
  return (
    <section className="w-full p-4 bg-red-200 mt-3 pt-8 pb-8 flexCenter flex-col">
      <h1 className="text-2xl text-black font-normal text-center p-1 ">Discover our product offerings</h1>
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 p-5  pl-5">
          <Card
            name="Starter"
            description="Companies with 1-50 employees"
            price="$300/month"
          />
          <Card
            name="Premium"
            description="Companies with 50 - 500 employees"
            price="$1,500/month"
          />
          <Card
            name="Enterprise"
            description="Companies with 500+ employees"
            price="Custom"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
