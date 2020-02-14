import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import questions from "./mocks/questions.js";


ReactDOM.render(
    <App
      errorCount={3}
      questions={questions}
    />,
    document.getElementById(`root`)
);
