import { map } from "lodash";
import { useCallback, useMemo, useState, FC } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const NationalCodinator: FC<{ applyFilter: any; label: string }> = ({
  applyFilter,
  label = "No Label",
}) => {
  const [value, setValue] = useState({ label: "All", value: "" });
  const options = useMemo(
    () => [
      { label: "All", value: "" },
      { label: "AICTE", value: "AICTE" },
      { label: "CEC", value: "CEC" },
      { label: "IGNOU", value: "IGNOU" },
      { label: "IIMB", value: "IIMB" },
      { label: "NCERT", value: "NCERT" },
      { label: "NIOS", value: "IGNOU" },
      { label: "NITTTR", value: "NITTTR" },
      { label: "NPTEL", value: "NPTEL" },
      { label: "UGC", value: "UGC" },
    ],
    []
  );

  const onChange = useCallback(
    (option: any): void => {
      console.log("mnop:",{val:option.target.value})
      setValue(option);
      applyFilter((prev: any) => ({ ...prev, provider: option.target.value }));
    },
    [applyFilter]
  );

  return (
    <>
      {/* <Dropdown options={options} onChange={onChange} value={value} placeholder="Select an option"  className='w-full'/> */}
      <FloatingLabel controlId="floatingSelect" label={label}>
        <Form.Select aria-label={label} onChange={onChange}>
          {map(options, (option) => (
            <option value={option?.value}>{option?.label}</option>
          ))}
        </Form.Select>
      </FloatingLabel>
    </>
  );
};

export default NationalCodinator;
