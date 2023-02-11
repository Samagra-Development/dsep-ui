import { useCallback, useMemo, useState, FC } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const CourseDuration: FC<{ applyFilter: any }> = ({ applyFilter }) => {
    const [mode, setMode] = useState({ label: 'All', value: '' });
    const options = useMemo(() => [
        { label: 'All', value: '' },
        { label: '4 weeks', value: '4' },
        { label: '6 weeks', value: '6' },
        { label: '8 weeks', value: '8' },
        { label: '10 weeks', value: '10' },
        { label: '12 weeks', value: '12' },
        { label: '15 weeks', value: '15' },
        { label: '16 weeks', value: '16' },
        { label: '24 weeks', value: '24' },

    ], []);

    const onChange = useCallback(
        (option: any): void => {
            setMode(option);
            applyFilter((prev: any) => ({ ...prev, course_duration: option?.value }))
        },
        [applyFilter],
    );


    return (
        <Dropdown options={options} onChange={onChange} value={mode} className='w-full' />
    )
}

export default CourseDuration
