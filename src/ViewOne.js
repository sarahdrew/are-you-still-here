import React, { Component } from "react";
import './ViewOne.css';

class ViewOne extends Component {

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
    // ViewOne.propTypes = {
    //     onClose: PropTypes.func.isRequired,
    //     show: PropTypes.bool,
    //     children: PropTypes.node
    // };
}

export default ViewOne;


