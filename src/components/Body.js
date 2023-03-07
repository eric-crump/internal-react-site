import SideBar from "./SideBar";
import Page from "./Page";
import { useEffect, useState } from "react";

function Body(props) {
    const [page, setPage] = useState('');
    
    let pageId;
    if(props?.content?.landing_page && !page)
        pageId = props.content.landing_page[0].uid;
    else
        pageId = page;
    
    return ( 
        <div className="container-fluid">
            <div className="row">
                <SideBar setPage={setPage} nav_items={props?.content?.nav}/>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Page pageId={pageId}/>
                </main> 
            </div>
        </div>
    );
}

export default Body;