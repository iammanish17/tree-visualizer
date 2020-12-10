import React, { Component } from "react";
import "./App.css";
import Canvas from "./components/canvas";
import Display from "./components/display";

var R = 20;
var locations, visited;
var minX, maxX, minY, maxY;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            graph: [[], [2, 3], [1, 6], [1,4,5, 7], [3], [3], [2], [3]],
            root: 1
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
                else if (!used.includes(x)) {
                    locations[index][0] = x;
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.globalCompositeOperation = "destination-over";
        ctx.globalCompositeOperation = "source-over";
        ctx.lineWidth = 4;
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(0, 0, canvas.width, canvas.height);
        this.plot(ctx, this.state.root);
    };

    plot = (ctx, node) => {
        this.drawNode(ctx, node);
        var edges = this.state.graph[node];
        for(var j=0; j<edges.length; j++) {
            if (locations[edges[j]][1] > locations[node][1]) {
                this.plot(ctx, edges[j]);
                this.drawEdge(ctx, node, edges[j]);
            }
        }
    };

    drawNode = (ctx, node) => {
        ctx.beginPath();
        const centerX = locations[node][0] + 5*R - minX;
        const centerY = 5*R + locations[node][1];
        ctx.arc(centerX, centerY, R, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'white';
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#0';
        ctx.textAlign = 'center';
        ctx.fillStyle = 'black';
        ctx.font = '19px Tahoma'
        ctx.fillText(node, centerX, centerY + 6);
        ctx.stroke();
    };

    drawEdge = (ctx, x, y) => {
        const cX1 = locations[x][0] + 5*R - minX;
        const cY1 = 5*R + locations[x][1];
        const cX2 = locations[y][0] + 5*R - minX;
        const cY2 = 5*R + locations[y][1];
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.moveTo(cX1, cY1 + R);
        ctx.lineTo(cX2, cY2 - R);
        ctx.stroke();
    }

    handleReroot = (id) => {
        console.log(id);
    };

    componentDidMount() {
        locations = Array.from(Array(this.state.graph.length),
                                () => new Array(2));
        visited = new Array(this.state.graph.length).fill(0);
        minX = maxX = minY = maxY = 0;
        this.dfs(this.state.root, null);
        this.updateCanvas();
    }

    render() {
    return (
      <React.Fragment>
      <nav className="navbar navbar-dark bg-primary">
      <a className="navbar-brand"
        href="https://github.com/iammanish17/tree-visualizer"
        >Tree Visualizer by manish</a>
      </nav>
        <main role="main" className="container">
          <Canvas/>
          <Display
            onReroot={this.handleReroot}
            nodes={this.state.graph.length-1}
            root={this.state.root}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
