# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Setting Up API Key

To use the ChatGPT API, you'll need to set up an API key and store it securely in a `.env` file. The API key is required for making authenticated requests to the OpenAI API.

Follow these steps to set up the `.env` file:

1. Create a new file named `.env` in the root directory of your project.

2. Open the `.env` file in a text editor.

3. Add the following line to the `.env` file:
    REACT_APP_CHATGPT_API_KEY=YOUR_API_KEY_HERE


Replace `YOUR_API_KEY_HERE` with your actual ChatGPT API key.

4. Save the `.env` file. Make sure not to share your API key with others or commit it to version control systems like Git.

With the `.env` file set up, your React application can access the API key as an environment variable using `process.env.REACT_APP_CHATGPT_API_KEY`. This way, the API key remains secure and separate from your codebase, making it easier to manage and update when needed.

Make sure to restart your development server after creating or updating the `.env` file to apply the changes. The environment variable will be available in your application, and you can use it to make authenticated requests to the ChatGPT API.

