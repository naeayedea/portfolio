import React from 'react';
import ExternalLink from './ExternalLink'
import DialogImage from './DialogImage'

const PortfolioItem = (props) => {
    let i = 0;
    return (
        <div key={props.title} className={"folio-item "+(props.pos != null ? props.pos : "pos-center")}>
            <div key={props.title+"title"} className={"title"}>
                {props.title}
            </div>
            <div key={props.title+"image"} className={"folioImage"}>
                <DialogImage src={process.env.PUBLIC_URL+props.image} alt={props.alt} className={"folioImage"} />
            </div>
            <div key={props.title+"content"} className={"content"}>
                {props.content.split('\n').map(paragraph => {return (<p key={props.title+"paragraph"+i++}>{paragraph}<br/></p>)})}
                <br/>
                <p>
                    {props.links.map(link => <>    |   <ExternalLink href={link.url} target={"_blank"} rel={"noreferrer"} content={link.linkName} key={link.linkName+"url"}/></>)}
                </p>
            </div>
        </div>
    )
}

export default PortfolioItem
