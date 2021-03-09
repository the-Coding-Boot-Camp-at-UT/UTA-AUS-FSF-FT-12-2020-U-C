import React, { useContext } from "react";
import Alert from "./Alert";
import AlertContext from "./AlertContext";

function Content() {
  const { onClick, theme, display} = useContext(AlertContext)
  return (
        <div className="text-center">
          <button onClick={() => onClick("success", true)} className="btn btn-success mx-3">
            Success
          </button>
          <button onClick={() => onClick("warning", true)} className="btn btn-warning mx-3">
            Warning
          </button>
          <button onClick={() => onClick("danger", true)} className="btn btn-danger mx-3">
            Danger
          </button>
          <Alert style={{ opacity: display ? 1 : 0 }} type={theme}>
            You pressed a {theme} button!
          </Alert>
        </div>

  );
}

export default Content;
