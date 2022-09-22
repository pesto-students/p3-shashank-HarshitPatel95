import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import store from "./store";
import "./index.css";

const Room = ({ isLightOn, dispatch }) => {
  const flipLight = () => {
    dispatch({ type: "SWITCH" });
  };

  const lightedness = isLightOn ? "lit" : "dark";
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isLightOn: state.isLightOn,
});
const ConnectedRoom = connect(mapStateToProps)(Room);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ConnectedRoom />
  </Provider>
);
