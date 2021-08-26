import React from 'react';
import './App.css';


class Child1 extends React.Component
{

  componentWillUnmount()
  {
    alert('Comp Unmouted Successfully')
  }
    render()
    {
      return (<h1>Child</h1>);
    }
}
class App extends React.Component
{
  state = {
    name : "Great",
    value : ' ',
    display : true
  }

  componentWillUpdate()
  {
    alert('do u want update')
  }


  handleClick = () =>
  {
    this.setState({name:"King", display:false})
  }

  render(){
    let comp;
    if(this.state.display)
    {
      comp = <Child1 />
    }
    return(<div>
        {comp}
      <h1>Hello ,{this.state.name}  {this.state.value} </h1>
      <button type='button' onClick={this.handleClick}>Change</button>
      </div>
    )
  }
}
export default App; 

// constructor()
// {
//   super();
//   this.state = {
//     username : ' ',
//     age : null,
//     err : ' '
//   }
// }


// userValue=(event)=>{

//   let n = event.target.name;
//   let v = event.target.value;
//   this.setState({[n] : v});

//   if(n==="age")
//   {
//     if(v !==" " && !Number(v))
//     {
//       this.setState({err : <strong>!Invalid value, Age Must Be a Number</strong>})
//     }else
//     {
//       this.setState({err : ''})
//     }
      
//   }
// }

// submitBtn = (event) =>{
//     event.preventDefault();
//     alert("Your Name : " + this.state.username );
    
// }

// render()
// {
//   return(
//     <div>
//       <form onSubmit={this.submitBtn}>
//       <h1>Your Name Is : {this.state.username}</h1>
//       <h1>Your Age Is : {this.state.age}</h1>
//         Enter Your Name : <input type="text" name="username" onChange={this.userValue} />
//         Enter Your Age : <input type="text" name="age" onChange={this.userValue}  /> {this.state.err}
//         <input type="submit" />
//       </form>
        
//     </div>
//   )
// }