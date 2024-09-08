import {
    Avatar,
    Dropdown,
    DropdownDivider,
    DropdownHeader,
    DropdownItem,
    Navbar,
    NavbarBrand,
    NavbarCollapse,
    NavbarToggle,
    NavbarLink,
} from "flowbite-react";
import { NavLink } from "react-router-dom";

// Custom link component to preserve styles
const CustomNavLink = ({ to, children, ...props }) => {
    return (
        <NavLink
            to={to}
            {...props}
            className={({ isActive }) =>
                `block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 ${isActive ? 'bg-gray-200 dark:bg-gray-800' : ''
                }`
            }
        >
            {children}
        </NavLink>
    );
};

export default function NavbarComponent() {
    return (
        <Navbar fluid rounded className="fixed top-0 left-0 right-0 z-30">
            <NavbarBrand href="https://flowbite-react.com">
                <img src="https://flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
            </NavbarBrand>
            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                    </DropdownHeader>
                    <DropdownItem>Dashboard</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Earnings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem>Sign out</DropdownItem>
                </Dropdown>
                <NavbarToggle />
            </div>
            <NavbarCollapse>
                <NavbarLink as={CustomNavLink} to="/" end>
                    Home
                </NavbarLink>
                <NavbarLink as={CustomNavLink} to="/about">
                    About
                </NavbarLink>
                <NavbarLink as={CustomNavLink} to="/services">
                    Services
                </NavbarLink>
                <NavbarLink as={CustomNavLink} to="/pricing">
                    Pricing
                </NavbarLink>
                <NavbarLink as={CustomNavLink} to="/contact">
                    Contact
                </NavbarLink>
            </NavbarCollapse>
        </Navbar>
    );
}
