import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { forEach, find } from "lodash";
import { coursesSelector } from "../store/slices/coursesSlice";
import Header from "../components/NewHeader";

import "video-react/dist/video-react.css";

import TabBar from "../components/CourseDetails/TabBar";
import CourseSummary from "../components/CourseDetails/CourseSummary";
import CourseAbout from "../components/CourseDetails/CourseAbout";
import { Col, Container, Row } from "react-bootstrap";

const CourseDetails: FC<{ socket: any; mode: any }> = ({ socket, mode }) => {
  let { id } = useParams();
  const courses = useSelector(coursesSelector);
  const selected = useMemo(() => {
    const dtp: Array<any> = [];
    forEach(courses?.["providers"], (categories: any, index: number) => {
      forEach(categories?.items, (category: any, index: number) => {
        dtp.push(category);
      });
    });
    return find(dtp, { id });
  }, [courses, id]);

  console.log("bnm:", { selected });

  return (
    <div className="bg-white">
      <Header />
      <Container>
        <Row className="">
          <Col xs={8}>
            <CourseAbout course={selected} />
          </Col>
          <Col xs={3}>
            <CourseSummary course={selected} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;
