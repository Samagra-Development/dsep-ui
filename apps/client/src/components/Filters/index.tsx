import { FC } from "react";
import { MdFilterListAlt } from "react-icons/md";
import CourseFilters from "../CourseFilters";

const Filters: FC<{ applyFilter: any; mode: any }> = ({
  applyFilter,
  mode,
}) => {
  function handleFilter(){
    let filterDiv = document.getElementById('filterDiv');
    if(filterDiv?.classList.contains('sm:hidden')){
      filterDiv.classList.remove('sm:hidden');
    }else{
      filterDiv?.classList.add('sm:hidden');
    }
  }
  return (
    <div className="col-span-1">
      <div onClick={handleFilter} className={`font-bold flex items-center gap-2 mb-3 border max-w-fit px-2 rounded-lg bg-[#DADBE0] cursor-pointer`}>
        <MdFilterListAlt />
        <div className={``}>
          Filter
        </div>
      </div>
      <div id='filterDiv' className="lg:block sm:hidden">
        <CourseFilters applyFilter={applyFilter} />
      </div>
    </div>
  );
};

export default Filters;
