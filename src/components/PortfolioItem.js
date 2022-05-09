import React, {Component} from "react";

class PortfolioItem extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className={"folio-item "+this.props.pos}>
                <div className={"title"}>
                    {this.props.title}
                </div>
                <div className={"folioImage"}>
                    <img src={this.props.image} alt={this.props.alt} className={"folioImage"} />
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
