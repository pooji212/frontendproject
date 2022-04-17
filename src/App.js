import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import Logout from './components/Logout';
import {useState} from 'react';
function App() {
  const [data,setData] = useState([])
  const onFormSubmit = (dataObj) => {
    setData([...data,dataObj.data])
  }
  return (  
  <div className="App ">
    {/*creating navigation bar*/}
    <nav className="navbar navbar-expand-sm navbar-light bg-warning">
  <div className="container-fluid">
    <Link className="navbar-brand" to="#"><b>CHATTER BOX</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-3">
        <li className="nav-item">
          <Link className="nav-link active" to="login"><b>Login</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="home"><b>Home</b></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="login"><b>Logout</b></Link>
        </li>
      </ul>
    </div>
  </div>
   </nav>
    {/*defining routes*/}
    <Routes>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/home" element = {<Home/>}/>
      <Route path="/login" element = {<Logout/>}/>
    </Routes>
    {/*Footer*/}
    <Footer/>
  </div>
 );
}

export default App;
