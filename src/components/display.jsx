import React, { Component } from "react";

class Display extends Component {
    render() {
        const {onReroot, nodes, root} = this.props;
        return (
            <div>
            <div className="btn-toolbar mb-3" role="toolbar">
            {[...Array(nodes).keys()].map(x => (
                <div
                key={"group"+x}
                className="btn-group btn-group-lg mr-2"
                role="group">
                <button
                    type="button"
                    onClick={() => onReroot(x+1)}
                    id={x+1}
                    className={x+1 === root ?
                        "btn btn-outline-secondary" :
                        "btn btn-secondary"}
                >{x+1}
                </button>
                </div>
            ))}
            <div className="btn-group mr-2" role="group">
            <button id="add" key="add" type="button" className="btn btn-success">
            +</button>
            </div>
            </div>
            </div>
        );
    }
}

export default Display;
