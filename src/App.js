import React, { Component } from "react";
import "./App.css";
import Canvas from "./components/canvas";

var R = 20;
var locations, visited;
var minX, maxX, minY, maxY;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            graph: [[], [2, 3], [1], [1]]
        };
    }

    dfs = (index, parent) => {
        visited[index] = 1;
        if (parent === null) {
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

        minX = Math.min(locations[index][0], minX);
        maxX = Math.max(locations[index][0], maxX);
        minY = Math.min(locations[index][1], minY);
        maxY = Math.max(locations[index][1], maxY);

        for(var i=0; i<this.state.graph[index].length; i++) {
            if (!visited[this.state.graph[index][i]]) {
                this.dfs(this.state.graph[index][i], index);
            }
        }
    };

    updateCanvas = () => {
        const canvas = document.querySelector("#canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = maxX - minX + 10*R;
        canvas.height = maxY - minY + 10*R;
        ctx.fillStyle = "black";
        ctx.globalCompositeOperation = "destination-over";
        ctx.globalCompositeOperation = "source-over";
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
    };

    componentDidMount() {
        locations = Array.from(Array(this.state.graph.length),
                                () => new Array(2));
        visited = new Array(this.state.graph.length).fill(0);
        minX = maxX = minY = maxY = 0;
        this.dfs(1, null);
        this.updateCanvas();
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
