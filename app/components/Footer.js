import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import logoText from "@/public/assets/MarcelGraceInfotechText.svg"


export default function Footer() {
  return (
    <footer >
     <div className="footer p-6 sm:p-8 md:p-10 lg:p-20 bg-[#E3EFFE] text-[#06387A] grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
       <aside className="mb-6 md:mb-0 ">
        <div className="">
          <Image className="" src={logo} alt="logo" width={150} height={150} />
        <Image
          src={logoText}
          alt="logoText"
          width={250}
          height={150}
          className=" -mt-10"
        />
        </div>
        
        
      </aside>
      <nav className="mb-6 md:mb-0">
        <h6 className="footer-title opacity-90 mb-2 text-base sm:text-lg ">
          Services
        </h6>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          Branding
        </a>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          Design
        </a>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          Marketing
        </a>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          Advertisement
        </a>
      </nav>
      <nav className="mb-6 md:mb-0">
        <h6 className="footer-title opacity-90 mb-2 text-base sm:text-lg">
          Company
        </h6>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          About us
        </a>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          Contact
        </a>
        <a className="link link-hover block mb-1 text-sm sm:text-base">Jobs</a>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          Press kit
        </a>
      </nav>
      <nav className="mb-6 md:mb-0">
        <h6 className="footer-title opacity-90 mb-2 text-base sm:text-lg">
          Legal
        </h6>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          Terms of use
        </a>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          Privacy policy
        </a>
        <a className="link link-hover block mb-1 text-sm sm:text-base">
          Cookie policy
        </a>
      </nav>
      
     </div>
     <div className=" bg-[#E3EFFE]  mx-auto text-center py-6">
          <p className=" ">Copyright © 2025 Marcel Grace Infotech.</p>
        </div>
    </footer>
  );
}
