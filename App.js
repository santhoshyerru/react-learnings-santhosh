const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child1"},  React.createElement("h1", {}, "i'm first child")), 
    React.createElement("div", {id: "child2"}, React.createElement("h1", {}, "i'm second child"))]);
const heading = React.createElement("h1", { id: "heading", xyz:"abc"}, "Hello World from react!");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);