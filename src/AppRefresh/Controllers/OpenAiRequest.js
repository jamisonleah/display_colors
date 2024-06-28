import axios from 'axios';

export const fetchJson = async (props) => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        "model": "gpt-3.5-turbo",
        "messages": [
          {
            "role": "system",
            "content": "You are a color expert helping a web designer create a harmonious color palette with creative names for a new web application. Provide 10 hex colors that work well together and respond only with JSON in the format: {\"color-name\": \"hex-value\"}."
          },
          {
            "role": "user",
            "content": props
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + process.env.REACT_APP_OPENAI_API_KEY
        }
      }
    );

    return response.data.choices[0].message.content; 
  } catch (error) {
    return error.message; 
  }
};
