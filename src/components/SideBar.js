import "./css/sidebar.css";

import Stack from "../sdk/cstack";
import {useState, useEffect} from "react";

function SideBar({setPage, nav_items}) {
    let navItems = [];
    //console.log('props', nav_items);
    let props = {nav_items}

    function changePage(event){
        setPage(event.target.getAttribute('data-page'));
    }

    if(props.nav_items){
        props.nav_items.nav_section.forEach((section) => {
            navItems.push(
                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase" key={section.title}>
                    <span {...section.$.title}>{section.title}</span>
                    <a className="link-secondary" href="#" aria-label="">
                        <span data-feather="plus-circle" className="align-text-bottom"></span>
                    </a>
                </h6>
            );
            section.nav_item.forEach((item) => {
                navItems.push(
                    <li className="nav-item" key={item.label}>
                        <a className="nav-link" aria-current="page" data-page={item.reference[0].uid} onClick={changePage} {...item.$.label}>
                            <span data-feather="home" className="align-text-bottom"></span>
                            {item.label}
                        </a>
                    </li>
                )
            })
        });
    }
    
    return (
        
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    {navItems}
                </ul>

            </div>
        </nav>
    )
}

export default SideBar;