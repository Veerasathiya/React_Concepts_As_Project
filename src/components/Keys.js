import React from 'react'


const myValue = [
    {id : 1, name : "First", content : "React Key"},
    {id : 2, name : "Second", content : "React Key"}
]

const myValue2 = [1, 2, 3, 4, 5];

function Keys() {

    const getData = myValue;
    const getData2 = myValue2;


    //obj type
    const listValue = getData.map((value, index)=>
    {
        return <li>{index} : {value.id} : {value.name} : {value.content}</li>
    });

    //Arr type and index as key
    //Short method to value as key
    const listValue2 = getData2.map((value)=>
    {
        return(
            <li>key : {value} : value : {value} </li>
        );
    });
    return (
        <div>
            <ul>{listValue}<br />{listValue2}</ul>
        </div>
    )
}

export default Keys
