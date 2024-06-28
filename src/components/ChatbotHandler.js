import React, { useState } from 'react';
import axios from 'axios';

const ChatbotHandler = (props) => {
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const apiKey = process.env.REACT_APP_API_KEY;

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    try {
      const headers = {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json', // Explicitly request JSON response
      };

      const requestBody = {
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'user',
          content: `Give me 10 hex colors for a web application based on the following description: ${inputText}`
        }],
        temperature: 0.8,
      };

      const response = await axios.post('https://api.openai.com/v1/chat/completions', requestBody, { headers });

      if (response.headers['content-type'].includes('application/json')) {
        const jsonResponse = response.data.choices[0].message.content;
        props.setJsonColors(JSON.parse(jsonResponse));
        console.log(jsonResponse);
      } else {
        throw new Error('Non-JSON response received');
      }
    } catch (err) {
      console.error('Error calling API:', err);
      setError(err.message || 'Error calling API');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Aesthetic Description</label>
      <textarea
        id="message"
        rows="4"
        className="p-2.5 w-1/2 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 focus:outline-none"
        placeholder="Write your thoughts here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <i className="fa-solid fa-circle-notch fa-spin mr-2"></i> : 'Submit'}
      </button>
      {error && <p className="text-red-500">{error}</p>}
      <br></br>
    </div>
  );
};

export default ChatbotHandler;
