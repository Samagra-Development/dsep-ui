import { FC, useMemo, useState } from "react";
import { Player } from "video-react";
import useGetFormatedDate from "../../hooks/useGetFormatedDate";
import { CourseType } from "../../types/courses";
import Books from "../../assets/images/books.jpg";
import WarningModal from "../WarningModal";
import { Button, Container, ListGroup, Row } from "react-bootstrap";
import { find } from "lodash";
import moment from "moment";

const CourseSummary: FC<{ course: CourseType }> = ({ course }) => {
  const [open, setOpen] = useState(false);
  const startDate = useGetFormatedDate(course?.time?.range?.start);
  const endDate = useGetFormatedDate(course?.time?.range?.end);

  const imageUrl = useMemo(
    () => course?.descriptor?.images?.[0] ?? Books,
    [course, Books]
  );

  const haveVideo = useMemo(() => false, []);

  const [ courseUrl, enrollementEndDate] = useMemo(
    () => [
      find(course?.tags, { name: "credits" })?.value,
      find(course?.tags, { name: "url" })?.value,
      find(course?.tags, { name: "enrollmentEndDate" })?.value,
    ],
    [course?.tags]
  );
  return (
    
    <Row style={{ fontSize: "14px", fontWeight: "500" }} className="mt-5">
      <Container>
      <ListGroup>
        {/* {haveVideo ? (
          <div>
            <Player>
              <source src="https://www.youtube.com/watch?v=tXBOtxGGwog" />
            </Player>
          </div>
        ) : (
          <div>
            <div className="mx-auto w-full">
              <img className="mb-3 w-auto" src={imageUrl} alt="CourseImage" />
            </div>
          </div>
        )} */}

        {/* <div className="px-4"> Course Status : <span></span> Upcoming </div> */}
        {/* <div className="px-4">
          <p> Course Type : Elective </p>
        </div> */}
        <div className="px-4">
          <p>
            Duration :
            <span style={{ color: "gray" }}>
              {`${course?.time?.duration?.split("P")[1]}eek`}
            </span>
          </p>
        </div>
        <div className="px-4">
          <p>
            Start Date :
            <span style={{ color: "gray" }}> {startDate ?? "N/A"} </span>
          </p>
        </div>
        <div className="px-4">
          <p>
            End Date :
            <span style={{ color: "gray" }}> {endDate ?? "N/A"} </span>
          </p>
        </div>

        <div className="px-4">
          <p>
            Enrollment Ends :
            <span style={{ color: "gray" }}>
              {moment(enrollementEndDate).format("DD MMMM,YYYY") ?? "N/A"}
            </span>
          </p>
        </div>
        <div className="px-4">
          <Button
            onClick={() => setOpen(true)}
            className="px-5 py-2"
            style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px',background:'#3849ab'}}
          >
            Go To Class
          </Button>
        </div>
      </ListGroup>
      </Container>
      <WarningModal open={open} setOpen={setOpen} url={courseUrl ?? ""} />
    </Row>
  );
};

export default CourseSummary;
