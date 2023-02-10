import { FC } from "react";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import CourseFilters from "../CourseFilters";

const Filters: FC<{ applyFilter: any; mode: any }> = ({
  applyFilter,
  mode,
}) => {
  function handleFilter(){
    let filterDiv = document.getElementById('filterDiv');
    if(filterDiv?.classList.contains('hidden')){
      filterDiv.classList.remove('hidden');
    }else{
      filterDiv?.classList.add('hidden');
    }
  }
  return (
    <div className="col-span-1">
      <div onClick={handleFilter} className={`font-medium flex items-center gap-2 mb-3 border max-w-fit px-2 rounded-lg bg-[#DADBE0] cursor-pointer`}>
        <HiAdjustmentsHorizontal />
        <div className={``}>
          Filter
        </div>
      </div>
      <div id='filterDiv' className="lg:block hidden">
        <CourseFilters applyFilter={applyFilter} />
      </div>
    </div>
  );
};

export default Filters;
