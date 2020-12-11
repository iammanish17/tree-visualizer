import React, { Component } from "react";

class Info extends Component {
    render() {
        const text = [
            "This is a tool designed to plot trees by adding nodes and edges. A tree is an undirected, acyclic graph.",
            "To add a new node, click on the + button.",
            "Then select any two vertices and click on the Add Edge button to add an edge between them.",
            "Clicking on any node button will re-root the tree at that node.",
            "You can also toggle the color of any node by clicking the button below it."
        ]
        return (
            <div className="alert alert-info" role="alert">
            <h2 class="alert-heading"><a id="info">Info</a></h2>
            {text.map(x => (
                <h6 className="mb-2">{x}</h6>
            ))}

            </div>
        );
    }
}

export default Info;
