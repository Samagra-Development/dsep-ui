import { FC, useMemo } from "react";
import { CourseType } from "../../types/courses";
import DetailsHeader from "./DetailsHeader";
import Books from "../../assets/images/books.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import { find, map } from "lodash";
import Rating from "../Ratings";

const CourseAbout: FC<{ course: CourseType }> = ({ course }) => {
  console.log({ course });
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
  const [offeringInstitue, instructors] = useMemo(
    () => [
      find(normalisedTags, { name: "offeringInstitue" })?.value,
      find(normalisedTags, { name: "instructors" })?.value,
    ],
    [normalisedTags]
  );

  return (
    <Container>
      {/* <DetailsHeader course={course} /> */}
      <Row className="mt-4">
        <Col>
          <Card.Img src={imageUrl} className="rounded" />
        </Col>
      </Row>
      <Container className="mt-3">
        <Row>
          <span className="courseAboutText">{offeringInstitue}</span>
        </Row>
        <Row>
          <strong>{course?.descriptor?.name}</strong>
        </Row>
        <Row>
          <strong>By: {instructors}</strong>
        </Row>
        <Row>
          <Rating value={4} size={1} />
        </Row>
        <Row className="mt-3">
          <Col>
            <p className="courseAboutText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nam
              ipsum in est nostrum sunt impedit atque laborum officia quaerat?
            </p>
            <p className="mt-3 courseAboutText">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
              atque eos, quidem ex sed nam sunt voluptas officiis reiciendis
              delectus quo, assumenda veritatis deserunt possimus explicabo
              molestiae aut! Cumque pariatur ab enim fugit eius, quae voluptatum
              itaque totam vero tempora consequuntur harum modi architecto
              veniam voluptates. Rem quam veniam debitis.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CourseAbout;
