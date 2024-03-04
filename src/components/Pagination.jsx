
import { FaChevronRight } from "react-icons/fa";
const Pagination = () => {
  return (
    <section className=" mt-14 mb-12 overflow-x-auto">
      <p className=" flex items-center text-[#727D87] text-[14px] ">
        Home
        <span className=" pl-5 pr-4">
          <FaChevronRight />
        </span>
        Hosting for all
        <span className=" pl-5 pr-4">
          <FaChevronRight />
        </span>
        Hosting
        <span className=" pl-5 pr-4">
          <FaChevronRight />
        </span>
        Hosting6
        <span className=" pl-5 pr-4">
          <FaChevronRight />
        </span>
        Hosting5
      </p>
    </section>
  );
};

export default Pagination;