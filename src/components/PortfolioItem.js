import React, {Component} from "react";

class PortfolioItem extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        let i = 0;
        return (
            <div key={this.props.title} className={"folio-item "+this.props.pos}>
                <div key={this.props.title+"title"} className={"title"}>
                    {this.props.title}
                </div>
                <div key={this.props.title+"image"} className={"folioImage"}>
                    <img src={process.env.PUBLIC_URL+this.props.image} alt={this.props.alt} className={"folioImage"} />
                </div>
                <div className={"content"}>
                    {this.props.content.split('\n').map(paragraph => {return (<>{paragraph}<br/></>)})}
                    <br/><p><a href={this.props.url} target={"_blank"}>{this.props.linkName}</a></p>
                </div>
            </div>
        )
    }
}

export default PortfolioItem
