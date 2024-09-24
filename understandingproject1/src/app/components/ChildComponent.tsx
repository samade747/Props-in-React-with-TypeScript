import React from "react";

// Defining the type of props 
interface childProps {
    greeting: string
}


const ChildComponent: React.FC<childProps> = ({ greeting }) => {
    return(
        <div>
            <h1>{greeting}</h1>
        </div>
    )

}

export default ChildComponent
