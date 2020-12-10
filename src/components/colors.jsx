import React, { Component } from "react";

class Colors extends Component {
    render() {
        const {onColorChange, color} = this.props;
        return (
            <div>
            <div className="btn-toolbar mb-3" role="toolbar">
            {color.map((name, index) => (
                <div
                    key={"color"+index}
                    className="btn-group mr-2 bbrd"
                    role="group"
                >
                <button
                    type="button"
                    className="btn btn-light"
                    style={{backgroundColor: name,
                            color: (name=="white") ? "black": "white"
                        }}
                    onClick={() => onColorChange(index)}
                >
                </button>
                </div>
            ))}
            </div>
            </div>
        );
    }
}

export default Colors;
