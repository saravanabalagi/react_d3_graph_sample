import { useEffect, useRef, useState } from "react";
import { Graph } from "react-d3-graph";

// graph payload (with minimalist structure)
const data = {
  nodes: [{ id: "Harry" }, { id: "Sally" }, { id: "Alice" }],
  links: [
    { source: "Harry", target: "Sally" },
    { source: "Harry", target: "Alice" },
  ],
};

// the graph configuration, just override the ones you need
const myConfig = {
  nodeHighlightBehavior: true,
  node: {
    color: "lightgreen",
    size: 120,
    highlightStrokeColor: "blue",
  },
  link: {
    highlightColor: "lightblue",
  },
};

const onClickNode = function (nodeId) {
  window.alert(`Clicked node ${nodeId}`);
};

const onClickLink = function (source, target) {
  window.alert(`Clicked link between ${source} and ${target}`);
};

const MyGraph = () => {
  const [config, setConfig] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const { current } = ref;
    if (!current) return;
    const { clientWidth, clientHeight } = current;
    const configNew = { ...myConfig, width: clientWidth, height: clientHeight };
    setConfig(configNew);
  }, [ref]);

  return (
    <div ref={ref} style={{height: '100%'}}>
      {config && (
        <Graph
          id="graph-id" // id is mandatory
          data={data}
          config={config}
          onClickNode={onClickNode}
          onClickLink={onClickLink}
        />
      )}
    </div>
  );
};

export default MyGraph;
