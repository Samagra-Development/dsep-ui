import { useCallback, useMemo, useState, FC } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const CourseMode: FC<{ applyFilter: any }> = ({ applyFilter }) => {
    const [mode, setMode] = useState({ label: 'All', value: '' });
    const options = useMemo(() => [
        { label: 'All', value: '' },
        { label: 'Self Paced', value: 'Self Paced' },
        { label: 'Regular', value: 'Regular' },

    ], []);

    const onChange = useCallback(
        (option: any): void => {
            setMode(option);           
            applyFilter({course_mode:option?.value});
        },
        [applyFilter],
    );


    return (
        <Dropdown options={options} onChange={onChange} value={mode} className='w-full' />
    )
}

export default CourseMode