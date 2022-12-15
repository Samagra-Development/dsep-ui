import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { forEach, find } from "lodash";
import { coursesSelector } from "../store/slices/coursesSlice";
import Header from "../components/Header";

import "video-react/dist/video-react.css";

import TabBar from "../components/CourseDetails/TabBar";
import CourseSummary from "../components/CourseDetails/CourseSummary";
import CourseAbout from "../components/CourseDetails/CourseAbout";

const CourseDetails: FC<{ socket: any; mode: any }> = ({ socket, mode }) => {
  let { id } = useParams();
  const courses = useSelector(coursesSelector);
  const selected = useMemo(() => {
    const dtp: Array<any> = [];
    forEach(courses?.["bpp/providers"], (categories: any, index: number) => {
      forEach(categories?.items, (category: any, index: number) => {
        dtp.push(category);
      });
    });
    return find(dtp, { id });
  }, [courses, id]);

  console.log("bnm:", { selected });

  return (
    <>
      <Header />
      <div className={` flex min-h-screen flex-col px-5 max-w-[80vw] mx-auto`}>
        <TabBar />
        <div className="grid  grid-flow-col gap-2">
          <div className="col-span-7 ">
            <CourseAbout course={selected} />
          </div>
          <CourseSummary course={selected} />
        </div>
      </div>
    </>
  );
};

export default CourseDetails;
