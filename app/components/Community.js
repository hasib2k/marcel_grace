import CommunityCard from "./CommunityCard";
import SectionHeader from "./SectionHeader";

export default function Community() {
  return (
    <div className="bg-[#DCEBFF]">
      <SectionHeader
        title="Craft modern, client-focused website content."
        subtitle="Who is Nextcent suitable for?"
      />
      <div>
        <CommunityCard/>
      </div>
    </div>
  );
}
