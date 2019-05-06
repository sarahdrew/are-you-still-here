import React, { Component } from "react";
import './ViewTwo.css';

class ViewTwo extends Component {

    render() {

        return (
            <div className="overlay">
                <div className="viewone">
                    <h3>You've been logged out</h3>
                    <button className="closemodal" onClick={() => this.props.activateModal()}>
                        Back to home
                </button>

                </div>
            </div>

        );
    }
}
export default ViewTwo;