import React, { useState } from 'react';
import axios from 'axios';

const ChatbotHandler = (props) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false); // Add a loading state
  const apiKey = process.env.REACT_APP_API_KEY;

  const convertObjectToJSON = (obj) => {
    const cleanedText = obj.replace(/\n/g, "").replace(/\\/g, "");
    props.setJsonColors(JSON.parse(cleanedText));
  }

  const handleSubmit = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      };

      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'user',
            content: `
            Give me 10 hex colors for a web application based on the following description and return it as JSON like { colorname: hex, colorname: hex ... }:${inputText} `
          },
        ],
        temperature: 0.8,
      };

      setLoading(true); // Set loading to true while fetching data
      const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, { headers });
      setLoading(false); // Set loading to false when data fetching is complete

      convertObjectToJSON(response.data.choices[0].message.content);
      console.log(response.data.choices[0].message.content);
    } catch (error) {
      setLoading(false); // Set loading to false if there's an error during data fetching
      console.error('Error calling API:', error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Asthetic Description</label>
      <textarea
        id="message"
        rows="4"
        className="p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
        placeholder="Write your thoughts here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded" onClick={handleSubmit}>
        {loading ? <i class="fa-solid fa-circle-notch fa-spin mr-2"> </i>: null}
        Submit
      </button>

      <br></br>
    </div>
  );
};

export default ChatbotHandler;
