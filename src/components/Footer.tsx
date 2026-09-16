import logo from "../assets/logo-text.png"; 

const Footer = () => {
  return (
    <footer className="bg-white text-gray-500">
      <div className="mx-auto max-w-6xl px-6 py-10">
        
        
        <div className="grid grid-cols-1 gap-7 md:grid-cols-4">
          
         
          <div>
            <div>
                <img src={logo} alt="Dev Stack"  className="h-8 w-auto" />

            </div>

            <p className="max-w-xs text-[10px] leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            
            <div className="mt-4 flex gap-4 text-[10px] text-gray-600">
              <a href="#" className="hover:text-fuchsia-600">
                GitHub
              </a>

              <a href="#" className="hover:text-fuchsia-600">
                Twitter
              </a>

              <a href="#" className="hover:text-fuchsia-600">
                LinkedIn
              </a>
            </div>
          </div>

         
          <div>
            <h3 className="mb-4 text-[10px] font-semibold text-gray-800">
              PRODUCT
            </h3>

            <ul className="space-y-2 text-[10px]">
              <li>
                <a href="#" className="hover:text-fuchsia-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-fuchsia-600">
                  Technologies
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-fuchsia-600">
                  Projects
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="mb-4 text-[10px] font-semibold text-gray-800">
              COMPANY
            </h3>

            <ul className="space-y-2 text-[10px]">
              <li>
                <a href="#" className="hover:text-fuchsia-600">
                  About
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-fuchsia-600">
                  Contact
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-fuchsia-600">
                  Careers
                </a>
              </li>
            </ul>
          </div>

         
          <div>
            <h3 className="mb-4 text-[10px] font-semibold text-gray-800">
              LEGAL
            </h3>

            <ul className="space-y-2 text-[10px]">
              <li>
                <a href="#" className="hover:text-fuchsia-600">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-fuchsia-600">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

       
        <div className="my-7 border-t border-gray-100"></div>

       
        <div className="flex flex-col justify-between gap-3 text-[9px] text-gray-400 sm:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-700">
              Privacy
            </a>

            <a href="#" className="hover:text-gray-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;