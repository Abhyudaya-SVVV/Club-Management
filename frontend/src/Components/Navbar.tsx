import React, { useState } from 'react';
import { FiSearch, FiMenu, FiChevronDown } from 'react-icons/fi';

type DropdownName = 'dashboard' | 'settings';
type MobileDropdownProps = {
  isOpen: boolean;
  title?: string;
  children: React.ReactNode;
  onClose:boolean;
};

const MobileDropdown = ({ isOpen, title, children }:MobileDropdownProps) => {
  return (
    <div className={`${isOpen ? 'block' : 'hidden'}`}>
      <div className="pl-4">
        {children}
      </div>
    </div>
  );
};

const MobileMenu = ({ isOpen, onClose }:MobileDropdownProps) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({ dashboard: false, settings: false });

  const toggleDropdown = (dropdown:DropdownName) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <div
      className={`fixed top-16 left-0 right-0 z-10 bg-white shadow-lg rounded-b-[8px] p-4 mx-5 ${
        isOpen ? 'block transition-all duration-300 ease-in-out' : 'hidden'
      }`}
    >
      <ul className="flex flex-col gap-2">
        <li>
          <div className="flex justify-between items-center">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Dashboard
            </a>
            <button onClick={() => toggleDropdown('dashboard')}>
              <FiChevronDown className={`${isDropdownOpen.dashboard ? 'rotate-180' : ''} transition-transform`} />
            </button>
          </div>
          <MobileDropdown isOpen={isDropdownOpen.dashboard} title="Dashboard">
            <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Profile</a>
            <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Logout</a>
            <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Security</a>
            <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Notification update</a>
            <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Language Prefrences</a>
          </MobileDropdown>
        </li>
        <li>
          <div className="flex justify-between items-center">
            <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
              Settings
            </a>
            <button onClick={() => toggleDropdown('settings')}>
              <FiChevronDown className={`${isDropdownOpen.settings ? 'rotate-180' : ''} transition-transform`} />
            </button>
          </div>
          <MobileDropdown isOpen={isDropdownOpen.settings} title="Settings">
            <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Contact Admin</a>
            <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">FAQ</a>
            <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Feedback</a>
          </MobileDropdown>
        </li>
        <li>
          <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">
            Help
          </a>
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [isHovering, setIsHovering] = useState<Record<DropdownName, boolean>>({
    dashboard: false,
    settings: false,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (dropdown: DropdownName) => {
    setIsHovering({ ...isHovering, [dropdown]: true });
  };

  const handleMouseLeave = (dropdown: DropdownName) => {
    setIsHovering({ ...isHovering, [dropdown]: false });
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mt-2 w-full flex justify-between items-center rounded-[4px] p-4 shadow-lg">
      <div className="ml-4 text-blue-500 font-bold">
        <span className="bg-blue-500 py-1 px-2 text-white rounded-full mr-1">T</span>
        TASK
      </div>
      <div className="flex items-center bg-black/5 h-8 w-full rounded-3xl px-8 gap-2 mx-8">
        <div>
          <FiSearch />
        </div>
        <input type="text" placeholder="search anything" className="w-full bg-transparent outline-none" />
      </div>
      <div className="mr-4 hidden md:block">
        <ul className="flex gap-8">
          <li
            className="text-blue-500 font-medium relative"
            onMouseEnter={() => handleMouseEnter('dashboard')}
            onMouseLeave={() => handleMouseLeave('dashboard')}
          >
            <a href="#" className="flex items-center">
              Dashboard
            </a>
            <div
              className={`absolute top-full left-0 bg-white shadow-md text-sm ${isHovering.dashboard ? 'block' : 'hidden'}`}
            >
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Profile</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Logout</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Security</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Notification update</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Language Prefrences</a>
            </div>
          </li>
          <li
            className="text-blue-500 font-medium relative"
            onMouseEnter={() => handleMouseEnter('settings')}
            onMouseLeave={() => handleMouseLeave('settings')}
          >
            <a href="#" className="flex items-center">
              Settings
            </a>
            <div
              className={`absolute top-full left-0 bg-white shadow-md text-sm ${isHovering.settings ? 'block' : 'hidden'}`}
            >
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Contact Admin</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">FAQ</a>
              <a href="#" className="block px-4 py-1 text-gray-700 hover:bg-gray-200">Feedback</a>
            </div>
          </li>
          <li className="text-blue-500 font-medium">
            <a href="#">Help</a>
          </li>
        </ul>
      </div>
      <div className="md:hidden">
        <button onClick={handleMenuToggle}>
          <FiMenu className="text-blue-500" />
        </button>
      </div>
      <MobileMenu isOpen={isMenuOpen} onClose={handleMenuToggle} />
    </div>
  );
};

export default Navbar;