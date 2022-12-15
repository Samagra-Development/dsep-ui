import { FC } from "react";
import { MdFilterListAlt } from "react-icons/md";
import CourseFilters from "../CourseFilters";

const Filters: FC<{ applyFilter: any; mode: any }> = ({
  applyFilter,
  mode,
}) => {
  return (
    <div className="col-span-1">
      <div className={`${mode === "dark" ? "text-white" : ""} font-bold flex items-center gap-2 mb-3`}>
        <MdFilterListAlt />
        <div className={`${mode === "dark" ? "text-white" : ""}`}>
          Filter by
        </div>
      </div>
      <div className="bg-white border border-gray-300 rounded py-5">
        <CourseFilters applyFilter={applyFilter} />
      </div>
    </div>
  );
};

export default Filters;
