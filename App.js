import React from 'react';
import ReactDOM from 'react-dom/client';

const Title = () => (
    <h1 className="head">Namaste React Component</h1>
)
const titleElement = (
    <h1 className="head">Namaste React Component</h1>
)
const HeadingComponent = () => (
    <div id = "container">
        <Title/>
        <Title></Title>
        {titleElement}
    <h1>React Functional Component</h1>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);