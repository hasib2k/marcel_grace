import img1 from "@/public/assets/blog1.jpg";
import Image from "next/image";

export default function SingleBlog() {
  return (
    <div className="pb-24 flex justify-center">
      <div className="relative max-w-[368px] w-full">
        <Image
          className="w-full h-auto aspect-[1.29/1] rounded-lg object-cover"
          src={img1}
          alt="img1"
        />
        <div className="w-[90%] mx-auto bg-[#F5F7FA] p-4 text-center absolute -bottom-16 left-1/2 transform -translate-x-1/2 rounded-lg shadow-sm">
          <p className="text-[#717171] font-semibold text-base sm:text-lg md:text-xl leading-tight mb-4">
            Revamping the Membership Model with Triathlon Australia
          </p>
          <a
            href="#"
            className="text-[#06387A] font-semibold text-base sm:text-lg leading-tight"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
