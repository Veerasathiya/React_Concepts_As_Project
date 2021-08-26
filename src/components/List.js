import React from 'react'


const glData = ["A", "B", "C", "D", "E", "F"];

export default function List() {

    const listData = [1,2,3,4,5];
    const listControl = listData.map((value) =>
    {
        return(
            <li>{value}</li>
        )
    });
    return (
        <ul>
            {listControl}
            <Method1 getData={glData}/>
            <Method2 />
            </ul>
    )
}



function Method1(props) {

    const listData = props.getData;
    const dataControl = listData.map((data) => {
        return(
            <li>{data}</li>
        )
    });
    return(
        <>{dataControl}</>
    )
}

function Method2() {
    
    const valueArr = glData;
    const diviLineByLine = valueArr.map((data)=>
    {
        return(
            <>
                <li>{data} m2</li>
            </>
        );
    });

    return(
        <>
            {diviLineByLine}
        </>
    );
}