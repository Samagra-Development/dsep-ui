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
    <div style={{ backgroundColor: "white" }}>
      <Header />
      <Container>
        <Row className="" style={{
          flexWrap:"nowrap"
        }}>
          <Col md={8}>
            <CourseAbout course={selected} />
          </Col>
          <Col md={4} className="d-none d-md-block mx-auto">
            <div className="mx-auto" style={{
              width:"15rem",
            }}>
            <CourseSummary course={selected} />
            </div>
          </Col>
        </Row>

        <Row className="d-md-none mb-4">
          <Col xs={12}>
            <CourseSummary course={selected} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseDetails;
