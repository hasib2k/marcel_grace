import img1 from "@/public/assets/experience.svg";
import Image from "next/image";
import Button from "./Button";

export default function Experience() {
  return (
    <div className="hero min-h-screen px-4 md:px-8 lg:px-12 py-8 md:py-12 bg-[#DCEBFF]">
      <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
          <Image src={img1} alt="img1" className="w-full h-auto" />
        </div>
        <div className="w-full px-0 sm:px-4 md:px-8 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight md:leading-[44px] text-[#4D4D4D]">
            Partner with us for future-focused tech excellence.
          </h1>
          <p className="py-4 sm:py-6 text-sm md:text-[14px] leading-tight md:leading-[20px] text-[#717171]">
            Experience innovative solutions with Marcel Grace Infotech, experts in robust software development. Modern, client-focused, and keen on creating scalable solutions, we redefine digital transformations. Let&#39;s build your vision together!
          </p>
          <Button className="btn btn-primary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
