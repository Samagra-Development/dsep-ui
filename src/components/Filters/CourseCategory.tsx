import { useCallback, useMemo, useState, FC } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const CourseCategory: FC<{ applyFilter: any }> = ({ applyFilter }) => {
    const [status, setStatus] = useState( { label: 'All', value: "" });
    const options = useMemo(() => [
        { label: 'All', value: "" },
        { label: 'Annual Refresher Programme in Teaching (ARPIT)', value: "ARPIT" },
        { label: 'Architecture and Planning', value: "ARCHI_COURSES" },
        { label: 'Design', value: "Design" },
        { label: 'School', value: "SCHOOL" },
        

    ], []);

    const onChange = useCallback(
        (option: any): void => {
            setStatus(option);
            applyFilter((prev: any) => ({ ...prev, course_category: option?.value }))
        },
        [applyFilter],
    );


    return (
        //@ts-ignore
        <Dropdown options={options} onChange={onChange} value={status} className='w-full' />
    )
}





export default CourseCategory