import logo from "@/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import logoText from "@/public/assets/MarcelGraceInfotechText.svg"
import { GoArrowRight } from "react-icons/go";

export default function Navbar() {
  return (
    <div className="navbar bg-[#DCEBFF] shadow-sm px-4 md:px-8 lg:px-12 -mt-6">
      <div className="navbar-start w-auto md:w-7xl mx-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[999] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Feature</a>
            </li>
            <li>
              <a>Product</a>
            </li>
            <li>
              <a>Testimonial</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <Link className="flex items-center  text-sm sm:text-base" href={"/"}>
          <div className="-ml-10 md:ml-0">
            <Image className=" w-[140px]" src={logo} alt="logo" />
          </div>
          {/* <p className=" -ml-10 leading-[20px] w-28 text-end font-bold">
            Marcel <span className="text-[#800080] ">Grace</span> Infotech
          </p> */}
          <Image className="-ml-4" src={logoText} alt="logo" width={300} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Service</a>
          </li>
          <li>
            <a>Feature</a>
          </li>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Testimonial</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Button>Contact Us <GoArrowRight /></Button>
      </div>
    </div>
  );
}
