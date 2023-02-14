import { FC, useMemo } from "react";
import Books from "../assets/images/books.jpg";
import { LinkContainer } from "react-router-bootstrap";
import { CourseType } from "../types/courses";
import Rating from "./Ratings";
import { Button, Card, Col, Row } from "react-bootstrap";
import { find } from "lodash";
import { FaBookmark, FaCalendar ,FaCreditCard,FaEye,FaUser} from "react-icons/fa";
import { BiListPlus} from "react-icons/bi";
import moment from "moment";
const CourseCard: FC<{ course: CourseType;isMyCourse?:boolean }> = ({ course,isMyCourse }) => {

  const imageUrl = useMemo(
    () => course?.descriptor?.images?.[0]?.url ?? Books,
    [course, Books]
  );

  const [offeringInstitue,credits,instructors] = useMemo(
    () => [
      find(course?.tags, { name: "offeringInstitue" })?.value,
      find(course?.tags, { name: "credits" })?.value,
      find(course?.tags, { name: "instructors" })?.value,
    ],
    [course?.tags]
  );
  return (
    <LinkContainer
      to={`/courses/${course?.id}`}
      style={{ cursor: "pointer", marginBottom: "10px" }}
    >
      <Card className="p-2">
        <Row>
          <Col>
            <Row>
              <Col xs={3}>
                <Card.Img src={imageUrl} />
              </Col>
              <Col xs={7}>
                <Row>
                  <h6>{offeringInstitue}</h6>
                </Row>
                <Row>
                  <strong>
                     {course?.descriptor?.name}
                  </strong>
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
            {isMyCourse ? (<Row className="mt-2">
               <Col>
               
               <Button variant="outline-danger" size="sm"  style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px',marginRight:'15px'}}> Svayam - NCERT</Button>
               <Button variant="outline-success" size="sm"  style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px',marginRight:'15px'}}> 0 INR</Button>
               <Button variant="outline-primary" size="sm"  style={{borderTopRightRadius:'20px',borderTopLeftRadius:'20px',borderBottomRightRadius:'20px',borderBottomLeftRadius:'20px',marginRight:'15px'}}> Start Course</Button>
 
               </Col>
             </Row>):(
               <Row className="mt-2">
               <Col>
               <FaBookmark color="blue" style={{fontSize:'23px',marginRight:'15px'}}/>
               <Button variant="outline-secondary" size="sm" style={{marginRight:'15px'}}> <BiListPlus style={{fontSize:'23px'}}/> Add to List</Button>
               <Button variant="outline-secondary"  size="sm"><FaEye style={{fontSize:'18px'}}/> Quick View</Button>
               </Col>
             </Row>
            )}
           
          </Col>
         
            <Col
              xs={3}
              style={{ borderLeft: "1px solid lightgray" }}
              className="p-2 container-fluid"
            >
              <div
                style={{ borderBottom: "1px solid lightgray" }}
                className="py-1"
              >
                <FaCreditCard /> <span style={{fontSize:'12px',color:'gray'}}> Credits :{credits}</span>
               </div>
              <div style={{ borderBottom: "1px solid lightgray" }} className="py-2">
              <FaCalendar /> <span style={{fontSize:'12px',color:'gray'}}> {moment(course?.time?.range?.start).format('Do MMM, YYYY')}</span>
              </div>
              <div>
                <FaUser />  <span style={{fontSize:'12px',color:'gray'}}>{instructors}</span>
              </div>
            
          </Col>
        </Row>
      </Card>
    </LinkContainer>
  );
};

export default CourseCard;
