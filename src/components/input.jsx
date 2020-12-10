import React, { Component } from "react";

class Input extends Component {
    render() {
        const { onEdgeAdd, nodes } = this.props;
        return (
            <div>
            <h5 className="shift" id="edge-msg"> </h5>
            <div className="btn-toolbar mb-3 shift" role="toolbar">
            <div className="btn-group mr-2" role="group">
            <select
                className="btn btn-sm btn-secondary"
                name="input1"
                id="input1">
            <option value="DEFAULT">Select</option>
            {[...Array(nodes).keys()].map(x => (
                <option key={"input1-"+x} value={x+1}>{x+1}</option>
            ))}
            </select>
            </div>
            <div className="btn-group mr-2" role="group">
            <select
                className="btn btn-sm btn-secondary"
                name="input2"
                id="input2">
            <option value="DEFAULT">Select</option>
            {[...Array(nodes).keys()].map(x => (
                <option key={"input2-"+x} value={x+1}>{x+1}</option>
            ))}
            </select>
            </div>
            <div className="btn-group mr-2" role="group">
            <input
                className="btn btn-sm btn-primary"
                type="submit"
                onClick={() => onEdgeAdd()}
                value="Add Edge">
            </input>
            </div>
            </div>
            </div>
        );
    }
}

export default Input;
