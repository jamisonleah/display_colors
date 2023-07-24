import React from 'react';

const JsonMaker = (props) => {
  const beautifyJSON = (jsonObj) => {
    try {
      return JSON.stringify(jsonObj, null, 2); // The third argument (2) specifies the number of spaces for indentation
    } catch (error) {
      console.error('Error beautifying JSON:', error);
      return '';
    }
  };

  const formattedJSON = beautifyJSON(props.jsonColors);

  const copyToClipboard = () => {
    try {
      navigator.clipboard.writeText(formattedJSON);
      alert('JSON copied to clipboard!');
    } catch (error) {
      console.error('Error copying to clipboard:', error);
      alert('Failed to copy JSON to clipboard.');
    }
  };

  return (
    <div className="flex flex-col items-center m-2 w-11/12 h-full border-2 border-gray-400 bg-gray-200 rounded-lg">
      <h1 className="text-2xl font-montserratAlt mb-8 text-center p-5">JSON Output</h1>
      <textarea
        id="message"
        rows="4"
        value={formattedJSON} // Use the formatted JSON string
        className="p-2 w-5/6 h-1/2 m-5 text-sm text-gray-600 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none "
        placeholder="Write your thoughts here..."
        readOnly // Add the readOnly attribute to make it non-editable
      />
     
    </div>
  );
};

export default JsonMaker;
