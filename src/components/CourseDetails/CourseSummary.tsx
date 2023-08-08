import { FC, useMemo, useState } from "react";
import { Player } from "video-react";
import useGetFormatedDate from "../../hooks/useGetFormatedDate";
import { CourseType } from "../../types/courses";
import Books from "../../assets/images/books.jpg";
import WarningModal from "../WarningModal";
import { Button, Container, ListGroup, Row } from "react-bootstrap";
import { filter, find, map } from "lodash";
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

  const normalisedTags = useMemo(
    () =>
      map(course?.tags[0]?.list, (tag) => ({
        name: tag?.descriptor?.name,
        value: tag?.value,
      })),
    [course]
  );

  const [courseUrl, enrollementEndDate] = useMemo(
    () => [
      find(normalisedTags, { name: "url" })?.value,
      find(normalisedTags, { name: "enrollmentEndDate" })?.value,
    ],
    [normalisedTags]
  );

  return (
    <Row className="mt-5 courseAboutText">
      <Container>
        <ListGroup>
          <div className="px-4">
            <p>
              Duration :
              <span>{`${course?.time?.duration?.split("P")[1]}eek`}</span>
            </p>
          </div>
          <div className="px-4">
            <p>
              Start Date :<span> {startDate ?? "N/A"} </span>
            </p>
          </div>
          <div className="px-4">
            <p>
              End Date :<span> {endDate ?? "N/A"} </span>
            </p>
          </div>

          <div className="px-4">
            <p>
              Enrollment Ends :
              <span>
                {moment(enrollementEndDate ?? Date.now()).format(
                  "DD MMMM,YYYY"
                ) ?? "N/A"}
              </span>
            </p>
          </div>
          <div className="px-4">
            <Button
              onClick={() => setOpen(true)}
              className="px-5 py-2 goToClassButton"
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
