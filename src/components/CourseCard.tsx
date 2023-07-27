import { FC, useMemo } from "react";
import Books from "../assets/images/books.jpg";
import { LinkContainer } from "react-router-bootstrap";
import { CourseType } from "../types/courses";
import Rating from "./Ratings";
import { Button, Card, Col, Row } from "react-bootstrap";
import { find, map } from "lodash";
import {
  FaBookmark,
  FaCalendar,
  FaCreditCard,
  FaEye,
  FaUser,
} from "react-icons/fa";
import { BiListPlus } from "react-icons/bi";
import moment from "moment";
const CourseCard: FC<{ course: CourseType; isMyCourse?: boolean }> = ({
  course,
  isMyCourse,
}) => {
  console.log("mnop:", { course });
  const imageUrl = useMemo(
    () => course?.descriptor?.images?.[0]?.url ?? Books,
    [course, Books]
  );

  const normalisedTags = useMemo(
    () =>
      map(course?.tags[0]?.list, (tag) => ({
        name: tag?.descriptor?.name,
        value: tag?.value,
      })),
    [course]
  );
  const [offeringInstitue, credits, instructors] = useMemo(
    () => [
      find(normalisedTags, { name: "offeringInstitue" })?.value,
      find(normalisedTags, { name: "credits" })?.value,
      find(normalisedTags, { name: "instructors" })?.value,
    ],
    [normalisedTags]
  );
  return (
    <LinkContainer
      to={`/courses/${course?.id}`}
      style={{ cursor: "pointer", marginBottom: "10px" }}
    >
      <Card className="p-2" style={{ cursor: "pointer", position: "relative" }}>
        <Row className="cardContent">
          <Col>
            <Row className="courseTitle">
              <Col>
                <img src={imageUrl} className="courseImage" />
              </Col>
              <Col>
                <Row>
                  <h6>{offeringInstitue}</h6>
                </Row>
                <Row>
                  <strong>{course?.descriptor?.name}</strong>
                </Row>
                <Row>
                  <Rating value={4} size={1} />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={10}>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dolores, tempore accusantium. Itaque tempora perferendis iusto
                cupiditate officia sapiente in magni?
              </Col>
            </Row>
            {isMyCourse ? (
              <Row className="mt-2">
                <Col>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    style={{
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      marginRight: "15px",
                    }}
                  >
                    {" "}
                    Svayam - NCERT
                  </Button>
                  <Button
                    variant="outline-success"
                    size="sm"
                    style={{
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      marginRight: "15px",
                    }}
                  >
                    {" "}
                    0 INR
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    style={{
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      marginRight: "15px",
                    }}
                  >
                    {" "}
                    Start Course
                  </Button>
                </Col>
              </Row>
            ) : (
              <div className="courseCardActions">
                <FaBookmark color="blue" style={{ fontSize: "23px" }} />
                <Button variant="outline-secondary" size="sm">
                  <BiListPlus style={{ fontSize: "23px" }} /> Add to List
                </Button>
                <Button variant="outline-secondary" size="sm">
                  <FaEye style={{ fontSize: "23px" }} /> Quick View
                </Button>
              </div>
            )}
          </Col>

          <Col className="p-2 courseCardMeta">
            <div>
              <FaCreditCard />
              <span> Credits: {credits}</span>
            </div>
            <div>
              <FaCalendar />
              <span>
                {moment(course?.time?.range?.start).format("Do MMM, YYYY")}
              </span>
            </div>
            <div>
              <FaUser />
              <span>{instructors}</span>
            </div>
          </Col>
        </Row>
      </Card>
    </LinkContainer>
  );
};

export default CourseCard;
