import React,{useState} from 'react';


const AutoComplete = () => {

    const fruitsArr = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
   
    const [inputVal,setInputVal]=useState("");

    const filteredFruits = fruitsArr.filter((item)=> item.toLowerCase().includes(inputVal.toLowerCase()));


    return (
        <div>
            <h2>Search Item</h2>
            <input type='text' value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
            <ul>
                {filteredFruits.map((item,index)=> <li key={index}>{item}</li>)}
            </ul>
                   

        </div>
    );
};

export default AutoComplete;