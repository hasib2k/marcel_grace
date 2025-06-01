import img1 from "@/public/assets/calender.svg";
import Image from "next/image";
import Button from "./Button";

export default function Calender() {
  return (
    <div className="hero bg-base-200 min-h-screen px-4 md:px-8 lg:px-12 py-8 md:py-12">
      <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
          <Image src={img1} alt="img1" className="w-full h-auto" />
        </div>
        <div className="w-full px-0 sm:px-4 md:px-8 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight md:leading-[44px] text-[#4D4D4D]">
            Trust Marcel Grace Infotech for solutions
          </h1>
          <p className="py-4 sm:py-6 text-sm md:text-[14px] leading-tight md:leading-[20px] text-[#717171]">
            Captivate with a headline reflecting our core values, featuring a tagline like Innovating Tomorrow, Today. Encourage visitors to connect with Let&apos;s Build Together. About Us: Outline our mission and purpose, emphasizing innovation, integrity, and customer-centricity. Highlight our collaborative team culture.
          </p>
          <Button className="btn btn-primary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
