import { useCallback, useMemo, useState, FC } from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const NationalCodinator: FC<{ applyFilter: any }> = ({ applyFilter }) => {
    const [value, setValue] = useState({ label: 'All', value: '' });
    const options = useMemo(() => [
        { label: 'All', value: '' },
        { label: 'AICTE', value: 'AICTE' },
        { label: 'CEC', value: 'CEC' },
        { label: 'IGNOU', value: 'IGNOU' },
        { label: 'IIMB', value: 'IIMB' },
        { label: 'NCERT', value: 'NCERT' },
        { label: 'NIOS', value: 'IGNOU' },
        { label: 'NITTTR', value: 'NITTTR' },
        { label: 'NPTEL', value: 'NPTEL' },
        { label: 'UGC', value: 'UGC' },
    ], []);

    const onChange = useCallback(
        (option: any): void => {
            setValue(option);
            applyFilter({ provider: option?.value });
        },
        [applyFilter],
    );


    return (
        <Dropdown options={options} onChange={onChange} value={value} placeholder="Select an option"  className='w-full'/>

    )
}

export default NationalCodinator