export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center w-full max-w-[542px] mx-auto px-4 md:px-6">
      <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl text-[#4D4D4D] mb-2">
        {title}
      </h2>
      <p className="text-[#717171] text-sm sm:text-[14px] md:text-[16px]">
        {subtitle}
      </p>
    </div>
  );
}
