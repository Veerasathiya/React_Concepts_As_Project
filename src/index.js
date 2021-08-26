import ReactDOM from 'react-dom';
import InputField from './components/InputField';
import Fragment from './components/fragment';
import List from './components/List';
import Keys from './components/Keys';
import KeyMethod2 from './components/KeyMethod2';
import Hooks from './components/Hooks';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Contacts from './components/Pages/Contacts';
import SignUp from './components/Pages/SignUp';


const keyMethod2 = [1,2,3,4,5]
const links = [
  {link : "/", linkName : "Home"},
  {link : "contact", linkName : "Contacts"},
  {link : "signUp" , linkName : "SignUp"}
];
function Index() {

  const getLink = links.map((value)=>
  {
    return(<li><Link to={value.link}>{value.linkName}</Link></li>);
  })
  return(
    <Router>
      <h1>Router Concept</h1>
      <ul style={{display:'flex',gap :"2rem"}}>{getLink}</ul>
      <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/contact" component={Contacts} />
      <Route path="/signUp" component={SignUp} /> 
      </Switch>
    </Router>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))
