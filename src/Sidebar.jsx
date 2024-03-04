import React from "react";
import { BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, 
    BsMenuButtonWideFill, BsFillGearFill, BsFillHouseFill, BsBoxArrowRight } from "react-icons/bs";

const Sidebar = ({openSidebarTogle, OpenSidebar}) => {
    return (
        <aside id="sidebar" className={openSidebarTogle ? "sidebar_responsive": ""}>
            <div className="sidebar1">
                <div className="sidebar2">
                   <h1 className="icon_header"> Webreinvent</h1>
                </div> 
                <span className="icon close_icon" onClick={OpenSidebar}>x</span>           
            </div>
            <ul className="sidebar_list">
                <li className="sidebar_list_items">
                    <a href="#">
                        <BsGrid1X2Fill className="icon"/>Dashboard
                    </a>
                </li>
                <li className="sidebar_list_items">
                    <a href="#">
                        <BsFillHouseFill className="icon"/>Home
                    </a>
                </li>
                <li className="sidebar_list_items">
                    <a href="#">
                        <BsFillArchiveFill className="icon"/>Products
                    </a>
                </li>
                <li className="sidebar_list_items">
                    <a href="#">
                        <BsPeopleFill className="icon"/>Users
                    </a>
                </li>
                <li className="sidebar_list_items">
                    <a href="#">
                        <BsMenuButtonWideFill className="icon"/>Reports
                    </a>
                </li>
                <li className="sidebar_list_items">
                    <a href="#">
                        <BsBoxArrowRight className="icon"/>SignUp
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar;