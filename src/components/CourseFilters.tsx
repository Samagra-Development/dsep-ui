import { ListGroup } from "flowbite-react";
import { useMemo, FC } from "react";
import { map } from "lodash";
import NationalCodinator from "./Filters/NationalCodinator";
import CourseMode from "./Filters/CourseMode";
import CourseDuration from "./Filters/CourseDuration";
import CourseCredits from "./Filters/CourseCredits";
import CourseStatus from "./Filters/CourseStatus";
import CourseCategory from "./Filters/CourseCategory";

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
      // {
      //   key: "Status",
      //   label: "Course Status",
      //   value: "",
      //   items: [],
      //   component: <CourseStatus applyFilter={applyFilter} />,
      // },
      {
        key: "Category",
        label: "Course Category",
        value: "",
        items: [],
        component: <CourseCategory applyFilter={applyFilter} />,
      },
    ],
    []
  );

  return (
    <>
      <ul className="pt-1">
        {map(courseFilters, (cFilter: any) => (
          <div className="bg-white">
            <div className="w-full text-[#000] px-4">{cFilter.label}</div>
            {cFilter.component && (
              <li className="p-2 text-center">
                {cFilter.component}
              </li>
            )}
          </div>
        ))}
      </ul>
    </>
  );
};

export default CourseFilters;
