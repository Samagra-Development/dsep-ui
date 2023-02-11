import { useCallback, useMemo, useState, FC } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const CourseStatus: FC<{ applyFilter: any }> = ({ applyFilter }) => {
    const [status, setStatus] = useState({ label: 'Upcoming', value: "Upcoming" });
    const options = useMemo(() => [
        { label: 'Upcoming', value: "Upcoming" },
        { label: 'Ongoing', value: "Ongoing" },

    ], []);

    const onChange = useCallback(
        (option: any): void => {
            setStatus(option);
            applyFilter((prev: any) => ({ ...prev, course_status: option?.value }))
        },
        [applyFilter],
    );


    return (
        //@ts-ignore
        <Dropdown options={options} onChange={onChange} value={status} className='w-full' />
    )
}





export default CourseStatus