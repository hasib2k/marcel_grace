export default function Button({ children, className }) {
  return (
    <button
      className={`btn bg-[#06387A] border-0 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-3.5 rounded-sm text-white text-sm sm:text-base hover:bg-[#06387af2] hover:shadow-lg transition duration-300 ease-in-out ${
        className || ""
      }`}
    >
      {children}
    </button>
  );
}
