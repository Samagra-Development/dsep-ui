import { FC } from "react";

import { Navbar, Nav, Form, Container, Button, Row } from "react-bootstrap";
import { FaGratipay, FaHome } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import Burger from "./BurgerMenu";

const Header: FC<{
  isSearchVisible?: boolean;
  handleChange?: (ev: any) => void;
  applyFilter?: any;
  mode?: any;
}> = ({ isSearchVisible = false, handleChange, applyFilter, mode }) => {
  return (
    <div className="">
      <Navbar className="navbar-cont">
        <Burger applyFilter={applyFilter} mode={mode} />
        <Container fluid>
          <LinkContainer to={`/`}>
            <span className="dseplogo">DSEP</span>
          </LinkContainer>
          <Nav className="ms-auto my-2 my-lg-0 nav" navbarScroll>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 searchForm"
                aria-label="Search"
                onChange={handleChange}
              />
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
