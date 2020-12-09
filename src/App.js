import React, { Component } from "react";
import "./App.css";
import Canvas from "./components/canvas";

var locations, visited, R=20;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            graph: [[], [2, 3], [1], [1]]
        };
    }

    dfs = (index, parent) => {
        visited[index] = 1;
        if (parent == null) {
            locations[index][0] = 0;
            locations[index][1] = 0;
        }
        else {
            var j = 1;
            var x=locations[parent][0], y=locations[parent][1];
            var used = [];
            for(var k=0; k<locations.length; k++) {
                if (locations[k][1] === y + 5*R)
                    used.push(locations[k][0]);
            }
            while (true) {
                if (!used.includes(x-5*R*j)) {
                    locations[index][0] = x - 5*R*j;
                    break;
                }
                else if (!used.includes(x+5*R*j)) {
                    locations[index][0] = x + 5*R*j;
                    break;
                }
                j += 1;
            }
            locations[index][1] = y + 5*R;
        }
        for(var i=0; i<this.state.graph[index].length; i++) {
            if (!visited[this.state.graph[index][i]]) {
                this.dfs(this.state.graph[index][i], index);
            }
        }
    };

    componentDidMount() {
        locations = Array.from(Array(this.state.graph.length),
                                () => new Array(2));
        visited = new Array(this.state.graph.length).fill(0);
        this.dfs(1, null);
        console.log(locations);
    }

    render() {
    return (
      <React.Fragment>
        <main role="main" className="container">
          <Canvas/>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
