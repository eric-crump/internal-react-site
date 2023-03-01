import SideBar from "./SideBar";

function Body(props) {
    return (
        <div className="container-fluid">
            <div className="row">
                <SideBar nav_items={props?.content?.nav}/>
            </div>
        </div>
    );
}

export default Body;