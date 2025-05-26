import img1 from "@/public/assets/Icon1.svg";
import img2 from "@/public/assets/Icon2.svg";
import img3 from "@/public/assets/Icon3.svg";
import img4 from "@/public/assets/Icon4.svg";
import Image from "next/image";

export default function Achievements() {
  return (
    <div className="bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 py-10 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-10 bg-[#F9F9F9]">
        <div className="text-center lg:text-left w-full lg:w-2/5">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight lg:leading-[44px] text-[#4D4D4D]">
            Helping a local{" "}
            <span className="text-[#06387A] block">
              business reinvent itself
            </span>
          </h2>
          <p className="text-sm sm:text-base mt-2 sm:mt-4 text-[#717171]">
            We reached here with our hard work and dedication
          </p>
        </div>
        <div className="w-full lg:w-3/5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex items-center gap-3">
              <Image
                className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]"
                src={img1}
                alt="img1"
              />
              <div>
                <h4 className="font-bold text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-[36px] text-[#4D4D4D]">
                  2,245,341
                </h4>
                <p className="text-sm sm:text-base leading-tight lg:leading-[24px] text-[#717171]">
                  Members
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]"
                src={img2}
                alt="img2"
              />
              <div>
                <h4 className="font-bold text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-[36px] text-[#4D4D4D]">
                  2,245,341
                </h4>
                <p className="text-sm sm:text-base leading-tight lg:leading-[24px] text-[#717171]">
                  Members
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]"
                src={img3}
                alt="img3"
              />
              <div>
                <h4 className="font-bold text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-[36px] text-[#4D4D4D]">
                  2,245,341
                </h4>
                <p className="text-sm sm:text-base leading-tight lg:leading-[24px] text-[#717171]">
                  Members
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-[36px] h-[36px] sm:w-[48px] sm:h-[48px]"
                src={img4}
                alt="img4"
              />
              <div>
                <h4 className="font-bold text-xl sm:text-2xl lg:text-[28px] leading-tight lg:leading-[36px] text-[#4D4D4D]">
                  2,245,341
                </h4>
                <p className="text-sm sm:text-base leading-tight lg:leading-[24px] text-[#717171]">
                  Members
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
