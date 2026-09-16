import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-10 lg:flex-row lg:justify-between">

        
        <div className="w-full text-center lg:w-1/2 lg:text-left">

          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
            Build Your Ideal

             <span className="block brand-gradient">
                Development Stack
              </span>

          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-gray-500 lg:mx-0">
            Explore frontend, backend, database, and tooling solutions.
            Compare them side by side, and put together the stack that fits
            your project best.
          </p>

          
          <div className="mt-7 flex justify-center gap-4 lg:justify-start">

            <button className="brand-button rounded-md px-5 py-3 text-sm font-semibold">
               Explore Technologies
             </button>

            <button className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700">
              Learn More
            </button>

          </div>
        </div>

       {/* etta img  */}
        <div className="mt-8 flex w-full justify-center lg:mt-0 lg:w-1/2">
          <img  src={banner}  alt="Development Stack"  className="w-4/5 max-w-md"  />
        </div>

      </div>
    </section>
  );
};

export default Banner;