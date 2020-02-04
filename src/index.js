import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


ReactDOM.render(
    <App
      errorCount={3}
    />,
    document.getElementById(`root`)
);
