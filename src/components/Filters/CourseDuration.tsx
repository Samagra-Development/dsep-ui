import { map } from 'lodash';
import { useCallback, useMemo, useState, FC } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const CourseDuration:FC<{ applyFilter: any,label:string }> = ({ applyFilter,label })=> {
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
            setMode(option.target.value);
            applyFilter((prev: any) => ({ ...prev, course_duration: option?.target.value }))
        },
        [applyFilter],
    );


    return (
        // <Dropdown options={options} onChange={onChange} value={mode} className='w-full' />
        <FloatingLabel controlId="floatingSelect" label={label}>
        <Form.Select aria-label={label} onChange={onChange}>
          {map(options, (option) => (
            <option value={option?.value}>{option?.label}</option>
          ))}
        </Form.Select>
      </FloatingLabel>
    )
}

export default CourseDuration
