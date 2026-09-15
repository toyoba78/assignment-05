import banner from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <div className="flex container">
            <div className=" pt-6 mt-7 ">
            <h1 className="font-bold">Build Your Ideal</h1>
            <h1 className="font-bold">Development Stack</h1>
            <p>Explore frontend, baxkend, database, and tooling options, <br /> compare them side by side, and put together the stack that fits your <br /> next project.</p>
            <button className="">Explan Technologics</button>
            <button className="">Learn More</button>
            </div>
            <div>
                <img src ={banner} alt="banner" />
            </div>
        </div>
    );
};

export default Banner;