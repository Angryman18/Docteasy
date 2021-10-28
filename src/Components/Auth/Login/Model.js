import React from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";

const Model = ({ children }) => {
  const dispatch = useDispatch();
  const closeOverlay = () => {
    return dispatch({ type: "reset" });
  };

  const BackdropOverlay = () => {
    return <Backdrop onClick={closeOverlay}></Backdrop>;
  };

  const ModelOverlay = () => {
    return (
      <ModelComp>
        <div className="Close">
          <i onClick={closeOverlay} className="fas fa-times"></i>
        </div>
        {children}
      </ModelComp>
    );
  };

  return (
    <React.Fragment>
      {createPortal(<BackdropOverlay />, document.getElementById("backdrop"))}
      {createPortal(<ModelOverlay />, document.getElementById("model"))}
    </React.Fragment>
  );
};

export default Model;

const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  background: transparent;
  z-index: 900;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModelComp = styled.div`
  width: 500px;
  border-radius: 10px;
  background-color: #fff;
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: modelAnimation 0.2s ease-out;

  .Close {
    position: absolute;
    right: 20px;
    top: 10px;
  }

  .Close i {
    cursor: pointer;
  }

  @keyframes modelAnimation {
    0% {
      top: 47%;
    }
    100% {
      top: 50%;
    }
  }
`;
