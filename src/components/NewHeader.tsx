import { FC } from "react";

import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { FaGratipay, FaHome } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";

const Header: FC<{
  isSearchVisible?: boolean;
  handleChange?: (ev: any) => void;
}> = ({ isSearchVisible = false, handleChange }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setUser({}));
    navigate("/");
  };

  return (
    <>
      <Navbar style={{ background: "#159bfc" }} expand="lg">
        <Container fluid>
          <LinkContainer to={`/`} style={{ cursor: "pointer" }}>
            <Navbar.Brand href="#">
              <span className="self-center whitespace-nowrap text-xl font-semibold text-white pt-2">
                DSEP
              </span>
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            <Nav.Link href="/" className="text-white">
              {" "}
              <FaHome /> Home
            </Nav.Link>
            {/* <Nav.Link href="/my_courses" className="text-white"><FaGratipay /> My Courses</Nav.Link> */}
          </Nav>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "30vw" }}
                onChange={handleChange}
              />
            </Form>
          </Nav>
          <Button variant="outline-light" onClick={handleLogout}>
            Logout
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
