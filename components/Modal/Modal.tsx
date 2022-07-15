import React from "react";

export default function Modal({ visible, handleToggleModal, children }) {
  if (visible) {
    return (
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          backgroundColor: "black",
          top: 0,
          left: 0,
          zIndex: 1,
        }}
        // className="absolute mx-auto py-4 px-4"
        onClick={(event) => handleToggleModal(event)}
      >
        <div>{children}</div>
      </div>
    );
  } else return <></>;
}
