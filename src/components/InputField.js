import React, { Component } from 'react';

class InputField extends Component {

    constructor()
    {
        super();
        this.state = {
            userName : "",
            password : null,
            errMgs : ""
        }
    }

    userData = (event) =>
    {
        
        let inputData = event.target.name;
        let inputValue = event.target.value;
        this.setState({[inputData] : inputValue});  
        if(inputData=="password")
        {
            if(!Number(inputValue))
            {
                this.setState({errMgs : <strong>!invalid, Must Be a Number</strong>})
            }else
            {
                this.setState({errMgs : ""})
            }
        }
    }

    userDataSend = (event) => 
    {
        // this event previous value are stay in input box *
        event.preventDefault();
        alert("I will Send Data to Server, Once Check and Click Ok");
    }


    render() {
        return (
            <div>
                <form onSubmit={this.userDataSend}>
                    Your User Name : {this.state.userName} <br/>
                    Your Password : {this.state.password} <br />
                    username : <input type="text" name="userName" onChange={this.userData}/> <t/>
                    password : <input type="text" name="password" onChange={this.userData}/> {this.state.errMgs}
                    <input type="submit" />
                </form>
            </div>
        );
    }
}

export default InputField;
