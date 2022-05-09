import React, {Component} from "react";
import Template from './Template'
import Item from './PortfolioItem'
import data from './../content/data/foliodata.json'
import './../styles/folio.css'

class Portfolio extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let left = false;
        return (
            <Template title={<h1>Portfolio</h1>} content ={
                <div id={"work-container"}>
                    {data.map((entry) => {left=!left; return (<Item key={entry.title} title={entry.title} image={entry.image} alt={entry.alt} content={entry.content} pos={left ? "pos-left" : "pos-right"}/>)})}
                </div>
            } />
        )
    }
}

export default Portfolio
