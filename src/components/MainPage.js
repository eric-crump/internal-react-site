import Header from "./Header";
import Body from "./Body";
import Stack from "../sdk/cstack";
import {useState, useEffect} from "react";
import { onEntryChange } from "../sdk/utils.js";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
const contentstack = require("contentstack");

function MainPage(){
    const [entry, setEntry] = useState({});

    async function getEntry(){
        let theEntry = await Stack.getMainPage();
        setEntry(theEntry); 
        //console.log(theEntry);
    }

    useEffect(() => {
        getEntry();

        onEntryChange(getEntry);
    }, []);
    
    /*useEffect(() => {
        onEntryChange(getEntry);
    }, []);*/

    return (
        <div>
            <Header headertitle={entry?.header?.headertitle} signout={entry?.header?.signout} />
            <Body content={entry}/>
        </div> 
    );
}

export default MainPage;