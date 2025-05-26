import heroImg from "@/public/assets/hero.svg";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="hero min-h-screen bg-[#F5F7FA] px-4 md:px-8 lg:px-12">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        <div className="w-full max-w-[300px] sm:max-w-sm md:max-w-md">
          <Image src={heroImg} alt="Hero image" className="w-full h-auto" />
        </div>
        <div className="w-full lg:max-w-[657px] text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
            Lessons and insights{" "}
            <span className="text-[#06387A]">from 8 years</span>
          </h1>
          <p className="py-4 md:py-6 text-[#717171] text-sm sm:text-base">
            Where to grow your business as a photographer: site or social media?
          </p>

          <Button>Register</Button>
        </div>
      </div>
    </div>
  );
}
