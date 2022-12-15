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
          <ListGroup.Item active={true}>
            <Player>
              <source src="https://www.youtube.com/watch?v=tXBOtxGGwog" />
            </Player>
          </ListGroup.Item>
        ) : (
          <ListGroup.Item>
            <Card className="mx-auto w-auto">
              <img
                className="mb-3  shadow-lg h-25 w-auto"
                src={imageUrl}
                alt="CourseImage"
              />
            </Card>
          </ListGroup.Item>
        )}

        <ListGroup.Item active={true}>
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
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          Course Status : Upcoming{" "}
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          <p> Course Type : Elective </p>{" "}
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          <p>
            {" "}
            Duration : {`${course?.time?.duration?.split("P")[1]}eek`}
          </p>{" "}
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          <p> Start Date : {startDate ?? "N/A"}</p>{" "}
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          <p> End Date : {endDate ?? "N/A"}</p>{" "}
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          <p> Exam Date : N/A</p>{" "}
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          <p> Enrollment Ends : {enrollementEndDate ?? "N/A"} </p>{" "}
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          <p> Category : {course?.category_id} </p>{" "}
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          <p> Credit Points : {course?.tags?.credits ?? 0}</p>{" "}
        </ListGroup.Item>
        <ListGroup.Item active={true}>
          {" "}
          <p> Level : N/A</p>{" "}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default CourseSummary;
