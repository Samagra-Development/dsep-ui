import { useCallback, useMemo, useState, FC } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const CourseCredits:  FC<{ applyFilter: any }> = ({ applyFilter }) => {
    const [mode, setMode] = useState({ label: 'All', value: '' });
    const options = useMemo(() => [
        { label: 'All', value: '' },
        { label: 'Yes', value: true },
        { label: 'No', value: false },

    ], []);

    const onChange = useCallback(
        (option: any): void => {
            setMode(option);
            applyFilter({                            
                course_credits:option?.value              
            });
        },
        [applyFilter],
    );


    return (
        //@ts-ignore
        <Dropdown options={options} onChange={onChange} value={mode}  />
    )
}

export default CourseCredits
