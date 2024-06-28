import { useState } from "react";
import axios from "axios";
import { fetchJson } from "./Controllers/OpenAiRequest";

const InputBox = (props) => {
    const [inputText, setInputText] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);
    const [formated, setFormated] = useState({});

    const tester =
        { "snow-white": "#FFFFFF", 
        "holly-green": "#22741C", 
        "mistletoe-red": "#A61C3C", 
        "silver-bells": "#C0C0C0", 
        "midnight-blue": "#191970", 
        "icy-blue": "#B0E0E6", 
        "frosty-pine": "#2E8B57", 
        "winter-sky": "#87CEEB", 
        "holiday-gold": "#FFD700", 
        "sparkling-snow": "#E0FFFF"
     }

    //format openai response to an object with color name and hex value
    const formatResponse = (response) => {
        // Split the response into an array of colors and remove new lines
        const colorsArray = response.replace(/\s/g, '').replace(/\n/g, '').replace('{', '').replace('}', '').replace(/"/g, '').split(',');
    
        console.log(JSON.parse(colorsArray));
    };
    const cleanAndFormatText = (input) => {
        // Replace hyphens with spaces
        const cleanedText = input.replace(/-/g, ' ');
      
        // Capitalize the first letter of each word
        const formattedText = cleanedText.replace(/\b\w/g, (match) => match.toUpperCase());
      
        return formattedText;
      }

    const handleSubmit = async () => {
        setLoading(true);
        setError(null);

        try {
            const data = await fetchJson(inputText);
            props.setJsonColors(JSON.parse(data));
        }
        catch (error) {
            setError(error);
        }
        finally {
            setLoading(false);

        }
    };

    return (
        <div className="flex flex-col items-center border-solid border-2 text-white border-pink-outline m-5 p-5 rounded-t-3xl w-full">
        <textarea
            id="message"
            rows="4"
            className="p-2 w-full text-sm text-white bg-pink-outline/50 rounded-t-xl border border-pink-outline focus:ring-2 focus:ring-pink-200 focus:border-pink-200 focus:outline-none"
            placeholder="Write your thoughts here..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
        />
        <button
            className="mt-4 px-20 py-1 bg-pink-outline text-black rounded-xl"
            onClick={handleSubmit}
            disabled={loading}
        >
            {loading ? <i className="fa-solid fa-circle-notch fa-spin mr-2"></i> : 'Generate'}
        </button>

        <div className="flex flex-col items-center bg-black/50 w-full p-2 rounded-xl m-2 text-white/50">
            <p> 
                {
                    //if theres a response, display it, otherwise display 'No response yet'
                }
                {response ? response: 'No response yet'}

            </p> 
        </div> 
    </div>
    
    );

}
export default InputBox;