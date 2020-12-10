import React, { Component } from "react";

class Display extends Component {
    render() {
        const {nodes, root} = this.props;
        return (
            <div>
            <div class="btn-toolbar mb-3" role="toolbar">
            {[...Array(nodes).keys()].map(x => (
                <div class="btn-group btn-group-lg mr-2" role="group">
                <button
                    type="button"
                    id={x+1}
                    class={x+1 === root ?
                        "btn btn-outline-secondary" :
                        "btn btn-secondary"}
                >{x+1}
                </button>
                </div>
            ))}
            <div class="btn-group mr-2" role="group">
            <button type="button" class="btn btn-success">+</button>
            </div>
            </div>
            </div>
        );
    }
}

export default Display;
