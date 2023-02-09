import { Card, ListGroup } from "flowbite-react";
import { FC, useMemo } from "react";
import { Player } from "video-react";
import useGetFormatedDate from "../../hooks/useGetFormatedDate";
import { CourseType } from "../../types/courses";
import Books from "../../assets/images/books.jpg";

const CourseSummary: FC<{ course: CourseType }> = ({ course }) => {
  const startDate = useGetFormatedDate(course?.time?.range?.start);
  const endDate = useGetFormatedDate(course?.time?.range?.end);
  const enrollementEndDate = useGetFormatedDate(
    course?.tags?.enrollmentEndDate
  );
  const imageUrl = useMemo(
    () => course?.descriptor?.images?.[0] ?? Books,
    [course, Books]
  );

  const haveVideo = useMemo(() => false, []);
  return (
    <div className="col-span-3 ">
      <ListGroup>
        {haveVideo ? (
          <div>
            <Player>
              <source src="https://www.youtube.com/watch?v=tXBOtxGGwog" />
            </Player>
          </div>
        ) : (
          <div>
            <div className="mx-auto w-full">
              <img
                className="mb-3 w-auto"
                src={imageUrl}
                alt="CourseImage"
              />
            </div>
          </div>
        )}

        <div>
          {" "}
          <div className="px-5">
            <a
              href={course?.tags?.url}
              target="_blank"
              className="w-full block text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Go To Class
            </a>
          </div>{" "}
        </div>
        <div className="px-4 py-3"> Course Status : Upcoming </div>
        <div className="px-4 py-3">
          {" "}
          <p> Course Type : Elective </p>{" "}
        </div>
        <div className="px-4 py-3">
          {" "}
          <p>
            {" "}
            Duration : {`${course?.time?.duration?.split("P")[1]}eek`}
          </p>{" "}
        </div>
        <div className="px-4 py-3">
          {" "}
          <p> Start Date : {startDate ?? "N/A"}</p>{" "}
        </div>
        <div className="px-4 py-3">
          {" "}
          <p> End Date : {endDate ?? "N/A"}</p>{" "}
        </div>
        <div className="px-4 py-3">
          {" "}
          <p> Exam Date : N/A</p>{" "}
        </div>
        <div className="px-4 py-3">
          {" "}
          <p> Enrollment Ends : {enrollementEndDate ?? "N/A"} </p>{" "}
        </div>
        <div className="px-4 py-3">
          {" "}
          <p> Category : {course?.category_id} </p>{" "}
        </div>
        <div className="px-4 py-3">
          {" "}
          <p> Credit Points : {course?.tags?.credits ?? 0}</p>{" "}
        </div>
        <div className="px-4 py-3">
          {" "}
          <p> Level : N/A</p>{" "}
        </div>
      </ListGroup>
    </div>
  );
};

export default CourseSummary;
