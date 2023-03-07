
function Headline(props){
    console.log(props);
    return(
        <h1 {...props.options.$.text} key={props.options.text}>{props.options.text}</h1>
    )
}

export default Headline;