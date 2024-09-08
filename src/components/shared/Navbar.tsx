import React from 'react';
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
} from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { useDarkMode } from '../../context/DarkModeContext';

// Define props type for CustomNavLink component
interface CustomNavLinkProps {
    to: string;
    children: React.ReactNode;
    [key: string]: any; // Allows for other props to be passed
}

// Custom link component to preserve styles
const CustomNavLink: React.FC<CustomNavLinkProps> = ({ to, children, ...props }) => {
    return (
        <NavLink
            to={to}
            {...props}
            className={({ isActive }) =>
                `block py-2 px-4 rounded-md transition-colors ${isActive ? 'bg-gray-200 dark:bg-gray-800' : 'hover:bg-gray-100 dark:hover:bg-gray-700'} ${isActive ? 'text-gray-800 dark:text-white' : 'text-gray-700 dark:text-gray-200'}`
            }
        >
            {children}
        </NavLink>
    );
};

// Define types for DarkMode context
interface DarkModeContextType {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
}

export default function NavbarComponent() {
    const { isDarkMode, toggleDarkMode } = useDarkMode() as DarkModeContextType; // Use dark mode context

    return (
        <Navbar
            fluid
            rounded
            className={`fixed top-0 left-0 right-0 z-30 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
        >
            <NavbarBrand href="https://flowbite-react.com">
                <img
                    src="https://flowbite-react.com/favicon.svg"
                    className="mr-3 h-6 sm:h-9"
                    alt="Flowbite React Logo"
                />
                <span className="self-center whitespace-nowrap text-xl font-semibold">
                    Flowbite React
                </span>
            </NavbarBrand>
            <div className="flex md:order-2 items-center">
                <button
                    onClick={toggleDarkMode}
                    className={`p-2 rounded-md transition-colors ${isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? (
                        <span className="text-xl">🌞</span> // Light mode icon
                    ) : (
                        <span className="text-xl">🌙</span> // Dark mode icon
                    )}
                </button>
                <Dropdown
                    arrowIcon={false}
                    inline
                    label={
                        <Avatar
                            alt="User settings"
                            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                            rounded
                        />
                    }
                >
                    <DropdownHeader>
                        <span className="block text-sm">Bonnie Green</span>
                        <span className="block truncate text-sm font-medium">
                            name@flowbite.com
                        </span>
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
