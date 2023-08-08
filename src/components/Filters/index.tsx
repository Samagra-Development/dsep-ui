import { FC } from "react";
import { TbSortDescending } from "react-icons/tb";
import CourseFilters from "../CourseFilters";

const Filters: FC<{ applyFilter: any; mode: any }> = ({
  applyFilter,
  mode,
}) => {
  return (
    <>
      <div className="filterContainer">
        <div className="filterHeading">
          <TbSortDescending className="filterIcon" />
          {"Filter By"}
        </div>
        <div>
          <CourseFilters applyFilter={applyFilter} />
        </div>
      </div>
    </>
  );
};

export default Filters;
