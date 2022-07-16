import React from "react";
import { createPortal } from "react-dom";

type Props = {
  handleToggleModal: () => void;
  children: React.ReactElement;
};

const Modal: React.FC<Props> = ({ handleToggleModal, children }) => {
  const [container] = React.useState(() => {
    return document.createElement("div");
  });

  React.useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  const modalElement = (
    <div
      className="flex items-center justify-center fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black/80 z-50 cursor-pointer overflow-hidden"
      onClick={handleToggleModal}
    >
      <div className="mx-auto max-w-7xl py-4 px-4">
        <div className={"cursor-default"} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, container);
};

export default Modal;
