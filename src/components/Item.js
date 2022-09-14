import React from "react";

const Item = (props) => {
    return (
        <div key={props.title+"container"} className={"folio-item-no-image folio-item " + (props.pos != null ? props.pos : "pos-center")}>
            <div key={props.title+"title"} className={"title"}>
                {props.title}
            </div>
            <div key={props.title+"content"} className={"content"}>
                {props.content}
            </div>
        </div>
    )
}

export default Item;
