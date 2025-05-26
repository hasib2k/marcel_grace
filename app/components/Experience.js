import img1 from "@/public/assets/experience.svg";
import Image from "next/image";
import Button from "./Button";

export default function Experience() {
  return (
    <div className="hero bg-base-200 min-h-screen px-4 md:px-8 lg:px-12 py-8 md:py-12">
      <div className="hero-content flex-col lg:flex-row gap-8 lg:gap-12">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
          <Image src={img1} alt="img1" className="w-full h-auto" />
        </div>
        <div className="w-full px-0 sm:px-4 md:px-8 lg:px-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight md:leading-[44px] text-[#4D4D4D]">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="py-4 sm:py-6 text-sm md:text-[14px] leading-tight md:leading-[20px] text-[#717171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
            Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
            tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
            Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
            elementum pulvinar odio.
          </p>
          <Button className="btn btn-primary">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
