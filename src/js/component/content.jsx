import React from "react";
import Cards from "./card.jsx";

const Content = ({children}) => {
    return <div className="container-fluid d-flex">
        {children}

    </div>
};

export default Content