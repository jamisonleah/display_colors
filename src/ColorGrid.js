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
    {/* First group of colors */}
    {Object.entries(colors)
        .slice(0, 5) // Slice the first 5 colors
        .map(([name, hex]) => (
            <div key={name} className="flex flex-row items-center mt-20">
                <div
                    className={`w-10 h-10 rounded-full mb-2 shadow-inner border-pink-outline hover:ring-2 hover:ring-pink-200 hover:border-pink-200 flex items-center justify-center p-10 ${determineTextColor(hex)}`}
                    style={{ backgroundColor: hex }}
                ></div>
            </div>
        ))}
        
    {/* Button in the middle */}
    <span> </span> 
    <button
        className="col-span-3 mt-4 px-20 py-1 bg-pink-outline text-black rounded-xl"
    >
        Export Json 
    </button>
    <span> </span>
    
    {/* Second group of colors */}
    {Object.entries(colors)
        .slice(5) // Slice from the 6th color to the end
        .map(([name, hex]) => (
            <div key={name} className="flex flex-row items-center mt-5">
                <div
                    className={`w-10 h-10 rounded-full mb-2 shadow-inner border-pink-outline hover:ring-2 hover:ring-pink-200 hover:border-pink-200 flex items-center justify-center p-10 ${determineTextColor(hex)}`}
                    style={{ backgroundColor: hex }}
                ></div>
            </div>
        ))}
</div>

  );
};

export default ColorGrid;
