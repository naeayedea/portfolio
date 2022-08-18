import React, {Component} from 'react';
import ExternalLink from './ExternalLink'
import DialogImage from './DialogImage'

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
                    <DialogImage src={process.env.PUBLIC_URL+this.props.image} alt={this.props.alt} className={"folioImage"} />
                </div>
                <div key={this.props.title+"content"} className={"content"}>
                    {this.props.content.split('\n').map(paragraph => {return (<p key={this.props.title+"paragraph"+i++}>{paragraph}<br/></p>)})}
                    <br/>
                    <p>
                        {this.props.links.map(link => <>    |   <ExternalLink href={link.url} target={"_blank"} rel={"noreferrer"} content={link.linkName} key={link.linkName+"url"}/></>)}
                    </p>
                </div>
            </div>
        )
    }
}

export default PortfolioItem
