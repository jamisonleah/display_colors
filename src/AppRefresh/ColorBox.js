import ColorGrid from "../ColorGrid";
import { useState } from "react";

const ColorBox = (props) => {
    
    return (
        <div className="flex flex-col w-full h-4/6 rounded-b-3xl border-solid border-2 items-center text-white border-pink-outline m-5 p-5">
        <div className="flex flex-col items-center"> 
            <ColorGrid colors={props.jsonColors} />
        </div> 
    </div>
    );

}
export default ColorBox;