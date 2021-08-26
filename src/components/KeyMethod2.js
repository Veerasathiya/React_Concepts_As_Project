import React from 'react';

function Method(props) {
    const item = props.item;
    const key = props.keys;
    return(
        <>
            <li>key : {key} Value : {item}</li>
        </>
    );
}
const KeyMethod2 = (props) => {

    const localValue = ["A", "B", "C", "D", "E","F"];
    const getData = localValue.map((listValue, index)=>
    {
        return(<Method key={index} keys={index} item={listValue} />)
    });

    const newValue = props.newData.map((value, index)=>
    {
        return(
            <Method key={index} keys={index} item={value} />
        );
    });
    return (
        <div>
            <ul><h1>Ace Player</h1>{getData}<br /><h1>Crown Player</h1>{newValue}</ul>
        </div>
    );
}

export default KeyMethod2;
