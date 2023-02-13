import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import HomeIllustartion from "../assets/images/illustration.svg";
import LoginIllustration from "../assets/images/cuatelanding.svg";

const Home = (props: any) => {
  const socket = props.socket;
  const navigate = useNavigate();
  const FILTERS = [
    "Username",
    "Password",
    // "course_level",
    // "query",
    // "rating",
    // "max_price",
    // "min_price",
    // "competency",
    // "exams",
    // "subjects",
    // "isCertified",
    // "course_type",
    // "seller_name",
    // "seller_email",
  ];

  const [filters, setFilters] = useState({});
  const [connected, setIsConnected] = useState<boolean>(false);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("socket connected");
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("response");
    };
  }, []);

  const handleSubmit = () => {
    props.socket.emit("search", filters);
    navigate("/courses");
  };
  return (
    <Container>
      <Row>
        <Col xs={5} style={{ position: "relative" }}>
          <Container className="login-form">
            <Row>
              <Col>
                <p
                  style={{
                    fontWeight: "700",
                    fontSize: "29px",
                    color: "#1E293B",
                  }}
                >
                  Login to get the courses
                </p>
              </Col>
            </Row>
            <p
              style={{
                fontWeight: "700",
                fontSize: "40px",
                color: "#1E293B",
                letterSpacing: "-0.8px",
                lineHeight: "125%",
              }}
            >
              Welcome Back
            </p>
            <p style={{ fontSize: "16px", color: "#64748B" }}>
              Welcome back! Please enter your details.
            </p>
            <Form>
              {FILTERS.map((filter, index): any => {
                return (
                  <>
                    <Form.Group
                      className="mb-3"
                      controlId="formBasicPassword"
                      key={index}
                    >
                      <Form.Label>{filter}</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder={`Enter your ${filter}`}
                        name={filter}
                        onChange={(e) => {
                          setFilters({ ...filters, [filter]: e.target.value });
                          console.log("filters: ", filters);
                        }}
                      />
                    </Form.Group>
                  </>
                );
              })}

              <Row>
                <Col>
                  {" "}
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember for 14 days" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <div className="d-grid gap-2">
                  <Button
                    variant="dark"
                    size="sm"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Sign In
                  </Button>
                </div>
              </Row>
            </Form>
          </Container>
        </Col>
        <Col xs={7}>
          <Container>
            <Card.Img src={LoginIllustration} />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
