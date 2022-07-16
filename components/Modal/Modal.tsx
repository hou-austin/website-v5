import React from "react";
import { createPortal } from "react-dom";
import Button from "../Button";
import { HiX } from "react-icons/hi";

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
      className="flex items-center justify-center fixed w-full h-full top-0 left-0 right-0 bottom-0 bg-black/80 z-50 overflow-hidden"
      onClick={handleToggleModal}
    >
      <div className="mx-auto max-w-7xl py-4 px-4">
        <div className="flex justify-end pb-4">
          <Button
            colorStyle={{ color: "whiteS400O40" }}
            className="backdrop-blur-lg cursor-pointer"
            buttonStyles={{
              textTransform: "uppercase",
              fontSize: "sm",
              fontWeight: "sm",
              radiusStyle: "full",
            }}
          >
            Close <HiX />
          </Button>
        </div>

        <div className={"cursor-default"} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalElement, container);
};

export default Modal;
