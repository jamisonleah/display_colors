import BoxComponent from "./BoxComponent";
import InputBox from "./InputBox";
import ColorBox from "./ColorBox";
import { useState } from "react";

const MainApp = () => {

    const [jsonColors, setJsonColors] = useState({
        'Deep Purple': '#6A0DAD',
        'Royal Purple': '#8C19C6',
        'Lavender': '#BB9AF7',
        'Goldenrod': '#DAA520',
        'Mustard Yellow': '#FFD700',
        'Ivory White': '#F8F8F8',
        'Cream': '#FDF5E6',
        'Charcoal Black': '#333333',
        'Muted Gray': '#808080',
        'Soft Pink': '#FFB6C1',
      }); 

    return (
        <div className="flex bg-gradient-to-b from-black to-purple-900 min-h-screen w-full">
            <div> 
            <InputBox setJsonColors={setJsonColors} jsonColors={jsonColors}/>
            <ColorBox jsonColors={jsonColors}/>
            </div> 

        </div>

    );
}



export default MainApp;