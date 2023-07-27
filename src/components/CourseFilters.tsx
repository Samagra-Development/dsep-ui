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
        component: (
          <NationalCodinator
            applyFilter={applyFilter}
            label="National Coordinator"
          />
        ),
      },
      {
        key: "CourseMode",
        label: "Course Mode",
        value: "",
        component: <CourseMode applyFilter={applyFilter} label="Course Mode" />,
      },
      {
        key: "CourseDuration",
        label: "Course Duration",
        value: "",
        component: (
          <CourseDuration applyFilter={applyFilter} label="Course Duration" />
        ),
      },
      {
        key: "Course Credits",
        label: "Course Credits",
        value: "",
        items: [],
        component: (
          <CourseCredits applyFilter={applyFilter} label="Course Credits" />
        ),
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
        component: (
          <CourseCategory applyFilter={applyFilter} label="Course Category" />
        ),
      },
    ],
    []
  );

  return (
    <>
      {map(courseFilters, (cFilter: any) => (
        <div className="filterEl">
          {cFilter.component && (
            <div className="pb-3 text-center">{cFilter.component}</div>
          )}
        </div>
      ))}
    </>
  );
};

export default CourseFilters;
