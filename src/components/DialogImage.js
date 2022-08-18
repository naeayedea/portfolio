import React, { Component } from 'react';

class DialogImage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          display: false
        };
    }

    toggleDisplay = () => {
        this.setState({display: !this.state.display});
    }

    render() {
        return (
            <>
                <img src={this.props.src} alt={this.props.alt} className={this.props.className} onClick={this.toggleDisplay}/>
                {this.state.display && (
                    <dialog onClick={this.toggleDisplay} className={"imageDialog"} open>
                        <div className={"imageDialogContainer"}>
                            <img src={this.props.src} alt={this.props.alt} />
                        </div>
                    </dialog>
                )}
            </>
        )
    }

}

export default DialogImage;
