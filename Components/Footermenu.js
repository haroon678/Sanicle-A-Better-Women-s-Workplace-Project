import Image from "next/image";

const Footermenu = () => {
  return (
    <section className="w-full p-5 pb-10 bg-blue-60 pt-10">
      <div className="flexCenter flex flex-col md:flex-row md:flexCenter md:items-center md:gap-10 lg:gap-20">
        {/* Logo Section */}
        <div className="flex flexCenter md:pb-10 items-center md:mb-0">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="logo"
          />
        </div>

        {/* Menu Sections */}
        <div className="flex flexCenter flex-col md:flex-row md:items-start md:gap-10 lg:gap-20">
          {/* Solutions Menu */}
          <div className="flex flexCenter flex-col gap-2 md:w-1/3">
            <p className="text-xl font-semibold">Solutions</p>
            <p>Employers</p>
            <p>Employees</p>
            <p>Brokers</p>
          </div>

          {/* Platform Menu */}
          <div className="flex flexCenter flex-col gap-2 md:w-1/3">
            <p className="text-xl font-semibold">Platform</p>
            <p>Overview</p>
            <p>Benefits</p>
            <p>Resources</p>
            <p>FAQ</p>
          </div>

          {/* Company Menu */}
          <div className="flex flexCenter flex-col gap-2 md:w-1/3">
            <p className="text-xl font-semibold">Company</p>
            <p>About</p>
            <p>Careers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footermenu;
