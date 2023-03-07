import {useState, useEffect} from "react";
import Stack, {onEntryChange} from "../sdk/cstack";
import Headline from "./elements/Headline";

function Page(props){
    const [entry, setEntry] = useState({});

    async function getEntry(){
        let theEntry = await Stack.getElement(props.pageId, 'page');
        setEntry(theEntry); 
    }
    
    useEffect(() => {
        if(!props.pageId)
            return;

        onEntryChange(getEntry);
    }, [props.pageId]);

    let content = [];
    if(entry.content_blocks){
        entry.content_blocks.forEach(item => {
            if('headline' in item){
                content.push(<Headline options={item.headline} key={item.headline.text}/>);
            } 
            else if('text_block' in item){

            }
        })
    }
    console.log(content);    

    return (
        <div className="mt-3">
            {content}
        </div>
    )
}

export default Page;