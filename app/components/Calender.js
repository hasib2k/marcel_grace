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
            How to design your site footer like we did
          </h1>
          <p className="py-4 sm:py-6 text-sm md:text-[14px] leading-tight md:leading-[20px] text-[#717171]">
            Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
            augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque
            elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
            habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi
            facilisis finibus. In euismod augue vitae nisi ultricies, non
            aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus
            efficitur quis massa. Praesent felis est, finibus et nisi ac,
            hendrerit venenatis libero. Donec consectetur faucibus ipsum id
            gravida.
          </p>
          <Button className="btn btn-primary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
