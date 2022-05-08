import React, {Component} from "react";
import Template from './Template'
import Item from './PortfolioItem'
import data from './../content/data/foliodata.json'
import './../styles/folio.css'
// import image from '../../public/images/bostonmetro.png'
global.Buffer = global.Buffer || require('buffer').Buffer

let HOME = './../../'

// let data = JSON.parse(dataFile);

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


// const getImageData = async (image) => {
//     const fileReader = new FileReader();
//     new FileReader().onload = () => {
//         return fileReader.result;
//     }
//     fileReader.readAsDataURL(image)
//
//     //return new Buffer.from(FileReader.readAsDataURL(image)).toString("base64");
// }

export default Portfolio
