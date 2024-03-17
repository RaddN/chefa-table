import banner from "../assets/Rectangle.svg";
const Banner = () => {
    return (
        <div>
            <div
        className="hero min-h-screen rounded-3xl"
        style={{ backgroundImage: `url(${banner})` }}
      >
        
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1 className="mb-5 text-5xl font-bold">
              Discover an exceptional cooking class tailored for you!
            </h1>
            <p className="mb-5">
              Learn and Master Basic Programming, Data Structures, Algorithm,
              OOP, Database and solve 500+ coding problems to become an
              exceptionally well world-class Programmer.
            </p>
            <div className="flex justify-center gap-10">
              <button className="btn btn-primary bg-[#0BE58A] text-[#150B2B] border-none hover:bg-[#0BE58A]">
                Explore Now
              </button>
              <button className="btn  btn-outline text-white border-white hover:bg-[#0BE58A] hover:text-[#150B2B] hover:border-none">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Banner;