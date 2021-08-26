import React, { Component } from 'react';

//General Fragment
function Method1() {
    return(<React.Fragment>
    <td>Data 1</td>
    <td>Data2</td>
    </React.Fragment>)
}


//Shortcut or ShortMethod Fragment
function Method2()
{
    return(<>
        <td>Data 3</td>
        <td>Data 4</td>
    </>)
}

class Fragment extends Component {
    render() {
        return (
            <table>
                <tr>
                    <Method1 />
                </tr>
                <tr>
                    <Method2 />
                </tr>
            </table>
        );
    }
}


export default Fragment;
