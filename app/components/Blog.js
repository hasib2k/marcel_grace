import SingleBlog from "../SingleBlog";
import SectionHeader from "./SectionHeader";

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
      <SectionHeader
        title="Caring is the new marketing"
        subtitle="The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8 sm:py-12 md:py-16 lg:py-20">
        <SingleBlog />
        <SingleBlog />
        <SingleBlog />
      </div>
    </div>
  );
}
