import React from "react";
import './../styles/general.css'

const Template = (props) => {
    return (
        <>
            <div id={"main-container"}>
                {/*Title text*/}
                <div id={"title"}>

                </div>
                {/*Content of the page passed through by props */}
                <div id={"content"}>
                    {props.content}
                </div>
            </div>
        </>
    );
}

export default Template;
