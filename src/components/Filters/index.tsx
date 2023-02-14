import { FC } from "react";
import { TbSortDescending } from "react-icons/tb";
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
    <>
   
    <div className="bg-white">
       <div onClick={handleFilter} className={`font-medium flex items-center mb-3 pt-3 px-2 rounded-lg  cursor-pointer`}>
       <TbSortDescending style={{fontSize:'22px'}}/> &nbsp; Filter By
        <div className={``}>
          
        </div>
      </div>
      <div id='filterDiv' className="lg:block hidden">
        <CourseFilters applyFilter={applyFilter} />
      </div>
    </div>
    </>
  );
};

export default Filters;
