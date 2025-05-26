import CommunityCard from "./CommunityCard";
import SectionHeader from "./SectionHeader";

export default function Community() {
  return (
    <>
      <SectionHeader
        title="Manage your entire community in a single system"
        subtitle="Who is Nextcent suitable for?"
      />
      <div>
        <CommunityCard/>
      </div>
    </>
  );
}
