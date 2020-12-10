import React, { Component } from "react";

class Input extends Component {
    render() {
        return (
            <div className="btn-toolbar mb-3 shift" role="toolbar">
            <div className="btn-group mr-2" role="group">
            <select
                className="btn btn-sm btn-secondary"
                name="input1"
                id="input1">
            <option selected>Select</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            </select>
            </div>
            <div className="btn-group mr-2" role="group">
            <select className="btn btn-sm btn-secondary" name="input2" id="input2">
            <option selected>Select</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            </select>
            </div>
            <div className="btn-group mr-2" role="group">
            <input className="btn btn-sm btn-primary" type="submit" value="Add Edge">
            </input>
            </div>
            </div>
        );
    }
}

export default Input;
