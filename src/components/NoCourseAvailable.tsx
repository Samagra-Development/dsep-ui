import { FC } from "react";
import NotAvailable from "../assets/images/not-available.jpeg";
import { Card, Col, Row } from "react-bootstrap";


const NoCourseAvailable: FC = () => {
  return (
    <Card className="p-2">
      <Row>
        <Col>
          <Row>
            <Col xs={3}>
              <Card.Img src={NotAvailable} />
            </Col>
            <Col xs={7}>No Courses Available</Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default NoCourseAvailable;
