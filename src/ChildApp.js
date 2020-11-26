import React from "react";

function ChildApp(props){
    return(
        <div>
            <h1>Hey! this is a child component from {props.propsVal}.</h1>
            <h1>This is another h1 tag in child component by {props.anotherPropsVal}.</h1>
            <hr />
        </div>
    );
}
export default ChildApp;