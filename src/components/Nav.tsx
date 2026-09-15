import logo from "../assets/logo-text.png"; 
 
const Nav = () => { 
  return ( 
    <nav className="flex justify-between container mr-2"> 
      <img src={logo} alt="Logo" /> 
 
      <ul className="flex gap-4 "> 
        <li>Home</li> 
        <li>Technologies</li> 
        <li>Projects</li> 
        <li>About</li> 
        <li>Contact</li> 
      </ul> 
      <div className="">
        <button>Sign In</button>
      <button className="btn-warning px-3">Sign Up</button>
      </div>
    </nav> 
    
  ); 
}; 
 
export default Nav; 