import React from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent: React.FC = () => {
    return (
        <div>
            <h1>Parent Component</h1>
            <ChildComponent greeting="Hello" />
        </div>
    );
};