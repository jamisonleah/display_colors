import React, { useState } from 'react';

const JsonUploader = () => {
  const [jsonList, setJsonList] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const text = e.target.result;
      try {
        const parsedJson = JSON.parse(text);
        setJsonList((prevList) => [...prevList, parsedJson]);
      } catch (error) {
        console.error('Invalid JSON file');
      }
    };

    reader.readAsText(file);
  };

  const handleTextChange = (event) => {
    setInputText(event.target.value);
  };

  const handleTextSubmit = () => {
    try {
      const parsedJson = JSON.parse(inputText);
      setJsonList((prevList) => [...prevList, parsedJson]);
      setInputText('');
    } catch (error) {
      console.error('Invalid JSON text');
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <label className="block mb-2 font-bold">Upload JSON File:</label>
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-bold">Enter JSON Text:</label>
        <textarea
          value={inputText}
          onChange={handleTextChange}
          className="border border-gray-300 rounded px-4 py-2 w-full"
        ></textarea>
      </div>

      <button
        type="button"
        onClick={handleTextSubmit}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add JSON
      </button>

      <ul className="mt-4">
        {jsonList.map((json, index) => (
          <li key={index} className="border border-gray-300 rounded px-4 py-2 mt-2">
            {JSON.stringify(json)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JsonUploader;
