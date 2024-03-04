import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { useState } from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';

function App() {

  const [openSidebarTogle, setopenSidebarTogle] = useState(false)

  const OpenSidebar= () =>{
    setopenSidebarTogle(!openSidebarTogle)
  }
  return (
    <div className="container">
  <Header OpenSidebar={OpenSidebar}/>
  <Sidebar openSidebarTogle={openSidebarTogle} OpenSidebar={OpenSidebar}/>
  <Home/>
    </div>
  );
}

export default App;
