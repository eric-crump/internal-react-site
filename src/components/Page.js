import {useState, useEffect} from "react";
import Stack from "../sdk/cstack";
import { onEntryChange } from "../sdk/utils.js";

function Page(props){
    const [entry, setEntry] = useState({});

    async function getEntry(){
        let theEntry = await Stack.getElement(props.pageId, 'page');
        setEntry(theEntry); 
    }
    
    useEffect(() => {
        if(!props.pageId)
            return;
        getEntry();

        onEntryChange(getEntry);
    }, [props.pageId]);

    return (
        <div>
            <h1>{entry.title}</h1>
        </div>
    )
}

export default Page;