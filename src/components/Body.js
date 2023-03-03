import SideBar from "./SideBar";
import Page from "./Page";
import { useState } from "react";

function Body(props) {
    const [page, setPage] = useState('');

    return (
        <div className="container-fluid">
            <div className="row">
                <SideBar setPage={setPage} nav_items={props?.content?.nav}/>
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                        <Page pageId={page}/>
                </main> 
            </div>
        </div>
    );
}

export default Body;