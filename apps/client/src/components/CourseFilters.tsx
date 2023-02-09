import { ListGroup } from "flowbite-react";
import { useMemo, FC } from "react";
import { map } from "lodash";
import NationalCodinator from "./Filters/NationalCodinator";
import CourseMode from "./Filters/CourseMode";
import CourseDuration from "./Filters/CourseDuration";
import CourseCredits from "./Filters/CourseCredits";

const CourseFilters: FC<{ applyFilter: any }> = ({ applyFilter }) => {
  const courseFilters = useMemo(
    () => [
      {
        key: "NationalCoordinator",
        label: "National Coordinator",
        value: "",
        component: <NationalCodinator applyFilter={applyFilter} />,
      },
      {
        key: "CourseMode",
        label: "Course Mode",
        value: "",
        component: <CourseMode applyFilter={applyFilter} />,
      },
      {
        key: "CourseDuration",
        label: "Course Duration",
        value: "",
        component: <CourseDuration applyFilter={applyFilter} />,
      },
      {
        key: "Course Credits",
        label: "Course Credits",
        value: "",
        items: [],
        component: <CourseCredits applyFilter={applyFilter} />,
      },
    ],
    []
  );

  return (
    <>
      <ListGroup>
        {map(courseFilters, (cFilter: any) => (
          <>
            <div className="w-full text-left ml-5 mt-1">{cFilter.label}</div>
            {cFilter.component && (
              <ListGroup.Item className="w-full">
                {cFilter.component}
              </ListGroup.Item>
            )}
          </>
        ))}
      </ListGroup>
    </>
  );
};

export default CourseFilters;
