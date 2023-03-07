import Header from "./Header";
import Body from "./Body";
import Stack, {onEntryChange} from "../sdk/cstack";
import {useState, useEffect} from "react";

function MainPage(){
    const [entry, setEntry] = useState({});

    async function getEntry(){
        let theEntry = await Stack.getElement('blt7c5ea8ef2fe3ec39', 'mainpage');
        setEntry(theEntry); 
    }

    useEffect(() => {
        onEntryChange(getEntry);
    }, []);
    

    return (
        <div>
            <Header headertitle={entry?.header?.headertitle} signout={entry?.header?.signout} />
            <Body content={entry}/>
        </div> 
    );
}

export default MainPage;