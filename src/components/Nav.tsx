import logo from "../assets/logo-text.png";
import hamburger from "../assets/hamburger.png";


const Nav = () => {
  return (
    <nav className="sticky top-0 z-50">

     
      <div className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-6 md:flex">

        {/* logo */}
        <div>
          <img src={logo}  alt="Dev Stack"  className="h-8 w-auto"  />
        </div>

        
        <div className="flex items-center gap-7">
          <a href="#">Home</a>
          <a href="#">Technologies</a>
          <a href="#">Projects</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        {/* button */}
        <div className="flex items-center gap-4">
          <button>Sign In</button>

          <button className="rounded-full bg-fuchsia-500 px-4 py-2 text-white">
            Sign Up
          </button>
        </div>

      </div>


      {/* Mobile  er jonno*/}

      <div className="mx-auto grid h-16 max-w-7xl grid-cols-3 items-center px-4 md:hidden">

        
        <div className="justify-self-start">
          <img  src={hamburger}  alt="Menu"  className="h-6 w-6"  />

        </div>

       
        <div className="justify-self-center">
          <img  src={logo}  alt="Dev Stack"  className="h-8 w-auto"  />
        </div>

        
        <div className="flex items-center gap-2 justify-self-end">
          <button className="text-xs">
            Sign In
          </button>

          <button className="rounded-full bg-fuchsia-600 px-3 py-1.5 text-xs text-white">
            Sign Up
          </button>
        </div>

      </div>

    </nav>
  );
};

export default Nav;