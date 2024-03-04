import React from "react";
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify, BsEnvelope, BsBoxArrowInLeft} from 'react-icons/bs';

const Header = (OpenSidebar) => {
    return (
        <header className="header">
            <div className="menu-icon">
                <BsJustify className="icon" onClick={OpenSidebar}/>
            </div>
            <div className="header-left">
                <BsSearch className="icon"/>
            </div>
            <button>SignIn</button>
            {/* <div className="header-right">
                <a href="#" className="sign">
                <BsBoxArrowInLeft className="icon"/>SignIn
                </a>
            </div> */}
        </header>
    )
}

export default Header;