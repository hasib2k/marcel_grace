import community1 from "@/public/assets/community-1.svg";
import community2 from "@/public/assets/community-2.svg";
import community3 from "@/public/assets/community-3.svg";
import Image from "next/image";

export default function CommunityCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-12 mt-8 mb-8">
      {/* card 1 */}
      <div className="card bg-base-100 w-full h-full shadow-lg rounded-md mx-auto max-w-[299px]">
        <div className="mx-auto mt-8 w-[50px] h-[50px] bg-[#E3EFFE] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[18px] rounded-bl-[5px]">
          <Image
            className="size-[50px] -ml-4 -mt-2"
            src={community1}
            alt="community1"
          />
        </div>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto font-bold text-[#4D4D4D] text-xl sm:text-2xl lg:text-[28px] leading-tight">
            Membership Organisations
          </h2>
          <p className="text-[#717171] text-xs sm:text-sm lg:text-[14px] font-normal leading-tight lg:leading-[20px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
      {/* card 2 */}
      <div className="card bg-base-100 w-full h-full shadow-lg rounded-md mx-auto max-w-[299px]">
        <div className="mx-auto mt-8 w-[50px] h-[50px] bg-[#E3EFFE] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[18px] rounded-bl-[5px]">
          <Image
            className="size-[50px] -ml-4 -mt-2"
            src={community2}
            alt="community2"
          />
        </div>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto font-bold text-[#4D4D4D] text-xl sm:text-2xl lg:text-[28px] leading-tight">
            National Associations
          </h2>
          <p className="text-[#717171] text-xs sm:text-sm lg:text-[14px] font-normal leading-tight lg:leading-[20px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
      {/* card 3 */}
      <div className="card bg-base-100 w-full h-full shadow-lg rounded-md mx-auto max-w-[299px] sm:col-span-2 lg:col-span-1">
        <div className="mx-auto mt-8 w-[50px] h-[50px] bg-[#E3EFFE] rounded-tl-[18px] rounded-tr-[5px] rounded-br-[18px] rounded-bl-[5px]">
          <Image
            className="size-[50px] -ml-4 -mt-2"
            src={community3}
            alt="community3"
          />
        </div>
        <div className="card-body text-center">
          <h2 className="card-title mx-auto font-bold text-[#4D4D4D] text-xl sm:text-2xl lg:text-[28px] leading-tight">
            Clubs And Groups
          </h2>
          <p className="text-[#717171] text-xs sm:text-sm lg:text-[14px] font-normal leading-tight lg:leading-[20px]">
            Our membership management software provides full automation of
            membership renewals and payments
          </p>
        </div>
      </div>
    </div>
  );
}
