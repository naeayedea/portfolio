import React, {useState} from "react";
import Template from './Template'
import Item from './PortfolioItem'
import data from './../content/data/foliodata.json'



let [selected, setSelected] = [];
const Portfolio = () => {
    [selected, setSelected] = useState(data[0]);
    return (
        <Template title={"Portfolio"} content ={
            <div id={"work-container"}>
                <PortfolioView data={data} display={selected}/>
            </div>
        } />
    )
}

const PortfolioView = (props) => {
    const entry = props.display;
    return (
        <>
            <div id={"folio-buttons"} className={"wrapper"}>
                <div  className={"unwrapper"}>
                    <ButtonBar data={props.data}/>
                </div>
            </div>
            <div id={"folio-view"}>
                <Item key={entry.title+"container"} title={entry.title} image={entry.image} alt={entry.alt} content={entry.content} links={entry.links}/>
            </div>
        </>
    )
}

const ButtonBar = (props) => {
    let index = 0;
    return (
        <>
            {(props.data.map((entry) => { return (<ButtonIcon key={"button-bar"+index} image={entry.image} alt={entry.alt} title={entry.title} index={index++} class={entry.title === selected.title ? "selected-icon folio-icon" : "folio-icon"}/>)}))}
        </>
    )
}

const ButtonIcon = (props) => {
    return (
        <>
            <button  className={props.class} onClick={() => setSelected(data[props.index])}>
                <img  src={process.env.PUBLIC_URL+props.image} alt={props.alt} title={props.title}/>
            </button>
        </>
    )
}

export default Portfolio
