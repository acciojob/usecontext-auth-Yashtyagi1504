import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import AuthContext from "./context/AuthContext.Provider";



ReactDOM.render(<AuthContext><App /></AuthContext>, document.getElementById("root"));
