import React, { useState } from 'react';

const MenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center justify-center p-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300"
        onClick={toggleMenu}
      >
        <svg
          className="h-12 w-12"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M2 6h16v2H2zm0 5h16v2H2zm0 5h16v2H2z"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-lg">
          {/* Menu items */}
          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Account settings
            </div>
          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            Support
            </div>
          <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
            License
            </div>
        </div>
      )}
    </div>
  );
};

export default MenuButton;
