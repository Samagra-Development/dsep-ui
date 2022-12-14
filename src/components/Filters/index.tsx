import { FC } from 'react'
import { MdFilterListAlt } from 'react-icons/md'
import CourseFilters from '../CourseFilters'

const Filters: FC<{ applyFilter: any }> = ({ applyFilter }) => {
    return (
        <div className="col-span-1">
            <div className="font-bold flex items-center gap-2">
                <MdFilterListAlt />
                <div>Filter by</div>
            </div>
            <div className="bg-white border border-gray-300 rounded px-5 py-7 my-4">
                <CourseFilters applyFilter={applyFilter} />
            </div>
        </div>
    )
}

export default Filters