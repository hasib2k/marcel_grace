import SingleBlog from "../SingleBlog";
import SectionHeader from "./SectionHeader";

export default function Blog() {
  return (
    <div className=" bg-[#DCEBFF]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        title="Marcel Grace Infotech: Crafting solutions for success"
        subtitle="Engage decision-makers with Marcel Grace Infotech's modern, client-centric software solutions. Experience trust and innovation with clear communication. Elevate your business with our agile team.​"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </div>
    </div>
  );
}
