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
    let left = false;
    const entry = props.display;
    return (
        <>
            <div>
                <ButtonBar data={props.data}/>
            </div>
            <div>
                <Item key={entry.title+"container"} title={entry.title} image={entry.image} alt={entry.alt} content={entry.content} links={entry.links}/>
            </div>
        </>
    )
}

const ButtonBar = (props) => {
    let index = 0;
    return (
        <>
            {(props.data.map((entry) => { return (<ButtonIcon image={entry.image} alt={entry.alt} index={index++} class={entry.title === selected.title ? "selected-icon folio-icon" : "folio-icon"}/>)}))}
        </>
    )
}

const ButtonIcon = (props) => {
    return (
        <>
            <button className={props.class} onClick={() => setSelected(data[props.index])}>
                <img  src={process.env.PUBLIC_URL+props.image} alt=""/>
            </button>
        </>
    )
}

export default Portfolio
