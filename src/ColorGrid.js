import React from 'react';

const ColorGrid = ({ colors }) => {
  const determineTextColor = (hex) => {
    // Convert the hex color to RGB
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    // Calculate the brightness using the relative luminance formula
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // Return the appropriate text color based on the brightness
    return brightness > 128 ? 'text-black' : 'text-white';
  };

  const cleanAndFormatText = (input) => {
    // Replace hyphens with spaces
    const cleanedText = input.replace(/-/g, ' ');
  
    // Capitalize the first letter of each word
    const formattedText = cleanedText.replace(/\b\w/g, (match) => match.toUpperCase());
  
    return formattedText;
  }

  return (
    <div className="grid grid-cols-5 gap-1 mx-1">
      {Object.entries(colors).map(([name, hex]) => (
        <div key={name} className="flex flex-row items-center ">
          <div
            className={`w-44 h-44 rounded-full mb-2 shadow-inner flex items-center justify-center p-10 ${determineTextColor(hex)} `}
            style={{ backgroundColor: hex }}
          >
             <div className="text-center">
              <div className="text-md font-montserratAlt">{cleanAndFormatText(name)}</div>
              <div className="text-sm font-mitr">{hex}</div>
              </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColorGrid;
