import React,{useState, useEffect} from 'react'

export default function Hooks() {

    const [count, setCount] = useState(0);
    const [open , setOpen] = useState(false);

    function handleClick()
    {
        setCount(count + 1)
    }

    function openClose() {

        setOpen(!open);
        
    }
    
    useEffect(() => {
        alert("UseEffect are DidMount , DidUpdate, WillUnmount");   
    });

    return (
        <div>
            <h1 style={open ? {} : {display : 'none'}} >{count}</h1>
            <button onClick={handleClick}>Add Count</button>
            <button onClick={openClose}>{open ? "Close" : "Open"}</button>
        </div>
    )
}
