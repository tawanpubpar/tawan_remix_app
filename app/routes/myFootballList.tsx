import {useState} from "react";
import { sculptureList } from "./data";

export default function Gallery () {
    const[index , setIndex] = useState (0);
    function handleClick() {
        setIndex(index + 1 );
        
    }
    function handleClickback() {
    setIndex(index - 1 );
        
    }

    let sculpture = sculptureList[index];
    return (
      <>
         <button onClick={handleClick} disabled ={index ===sculptureList.length -1}>Next</button>
         
         <h2>
            <i>{sculpture.name}</i> by {sculpture.artist}
         </h2>
         <h3>
            ({index + 1} of {sculptureList.length})
         </h3>
         <img
         src={sculpture.url}
         alt={sculpture.alt}
         />
         <p>
           <h2> {sculpture.description}</h2>
            <button onClick={handleClickback} disabled= {index===0}>back</button>
         </p>
       
      </>
    );
}