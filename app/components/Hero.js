import heroImg from "@/public/assets/hero.svg";
import Image from "next/image";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="hero min-h-screen px-4 md:px-8 lg:px-12 bg-[#DCEBFF]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-12">
        <div className="w-full max-w-[300px] sm:max-w-sm md:max-w-md">
          <Image src={heroImg} alt="Hero image" className="w-full h-auto" />
        </div>
        <div className="w-full lg:max-w-[657px] text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900">
            Transform ideas into reality with our {" "}
            <span className="text-[#06387A]">modern tech expertise</span>
          </h1>
          <p className="py-4 md:py-6 text-[#717171] text-sm sm:text-base">
            We partner with startups and midsize companies to bring their ideas to life — from building MVPs to scaling successful digital products. Wherever your vision leads, Marcel Grace Infotech is here to support your journey with reliable, scalable, and expert-driven development solutions.
          </p>

          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
}
