import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { LinkContainer } from 'react-router-bootstrap';
import { FC } from 'react';
import { BsSearch } from 'react-icons/bs';

const Header: FC<{ isSearchVisible?: boolean; handleChange?: (ev: any) => void }> = ({ isSearchVisible = false, handleChange }) => {

    return (
        <Navbar
            fluid={true}
            rounded={true}
            style={{ background: '#149BFC' }}
        >
            <LinkContainer to={`/`} style={{ cursor: 'pointer' }}>
                <Navbar.Brand href="#">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-6 sm:h-9"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        DSEP
                    </span>
                </Navbar.Brand>
            </LinkContainer>
            {/* <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline={true}
                    label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                >
                    <Dropdown.Header>
                        <span className="block text-sm">
                            Bonnie Green
                        </span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
                    </Dropdown.Header>                   
                    <Dropdown.Divider />
                    <Dropdown.Item>
                        Sign out
                    </Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
            </div>  */}


            <Navbar.Collapse>
                {/* <Navbar.Link
                    href="/navbars"
                    active={true}
                >
                    Home
                </Navbar.Link>
                <Navbar.Link href="/navbars">
                    About
                </Navbar.Link> */}
               {isSearchVisible &&  (<div className="flex md:order-2">
                    <form className="flex items-center  justify-end w-screen">
                        <div className="relative w-1/5 mx-8">
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
                    </form></div>)
                    }
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header