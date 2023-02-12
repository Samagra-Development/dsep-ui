import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { LinkContainer } from "react-router-bootstrap";
import { FC } from "react";
import { BsSearch } from "react-icons/bs";

const Header: FC<{
  isSearchVisible?: boolean;
  handleChange?: (ev: any) => void;
}> = ({ isSearchVisible = false, handleChange }) => {
  return (
    <Navbar fluid={true}  style={{ background: "#149BFC" }}>
      <LinkContainer to={`/`} style={{ cursor: "pointer" }}>
        <Navbar.Brand href="#">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mx-4 h-6 sm:h-9 pt-2"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold text-white pt-2">
            DSEP
          </span>
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Collapse>
        {isSearchVisible && (
          <div className="flex md:order-2">
            <form className="flex items-center  justify-end w-screen">
              <div className="relative w-1/5 mr-32 mt-[-34px]">
                <input
                  type="text"
                  id="simple-search"
                  className="text-black search outline-none rounded-[37px] block w-full py-4 px-8 h-[50px] border border-gray-300"
                  placeholder="Search"
                  onChange={handleChange}
                  required
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 my-3 pointer-events-none">
                  <BsSearch />
                </div>
              </div>
            </form>
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
