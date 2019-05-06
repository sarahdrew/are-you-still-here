import React, { Component } from "react";
import './ViewOne.css';

class ViewOne extends Component {
    static t;
    componentDidMount() {
        this.t = setTimeout(this.props.dismissedModal, 5000);
    }

    componentWillUnmount() {
        clearTimeout(this.t);
    }

    render() {

        return (
            <div className="overlay">
                <div className="viewone">
                    <h3>Are you still there?</h3>
                    <button className="closemodal" onClick={() => this.props.closeModal()}>
                        I'm still here
                </button>

                </div>
            </div>

        );
    }
}

export default ViewOne;


