# React D3 Graph Sample

This is a minimal example using react-d3-graph library. Demo [here](https://saravanabalagi.github.io/react_d3_graph_sample).

## Properties

- Graph SVG spans the entire width and height of the container div (by default, the library adds a static height 400px and width 800px ATTOW)
- Nodes and links are initiated, centered in graph, and distributed without overlaps

## Bugs:

- Starting position of nodes are not deterministic
- Does NOT work with React 18 due to `UNSAFE_componentWillReceiveProps` error
