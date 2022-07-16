import React, { useState } from "react";
import Image from "next/future/image";
import { ComponentSharedImage } from "../../../types/generated/schema";
import Modal from "../../Modal/Modal";
import cx from "classnames";

type Props = ComponentSharedImage & {
  className?: string;
  modalClassName?: string;
};

const StrapiImage: React.FC<Props> = ({
  width,
  height,
  alt = "",
  image,
  priority = false,
  allowExpand = false,
  className = "",
  modalClassName = "",
}) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const [isModalContentLoaded, setIsModalContentLoaded] = useState(false);

  const toggleModalVisibility = () => {
    if (allowExpand) {
      setModalVisibility(!modalVisibility);
    }
  };
  if (!image?.data?.attributes?.url) return null;

  return (
    <>
      <div
        onClick={toggleModalVisibility}
        className={cx({ "cursor-pointer": allowExpand })}
      >
        <Image
          src={image?.data?.attributes?.url}
          width={width}
          height={height}
          alt={alt || ""}
          className={className}
          {...(priority && { priority })}
        />
      </div>
      {modalVisibility && (
        <Modal
          handleToggleModal={toggleModalVisibility}
          isModalContentLoaded={isModalContentLoaded}
        >
          <Image
            src={image?.data?.attributes?.url}
            alt={alt || ""}
            onLoadingComplete={() => setIsModalContentLoaded(true)}
            className={modalClassName}
            {...(priority && { priority })}
            {...(allowExpand && { unoptimized: true })}
          />
        </Modal>
      )}
    </>
  );
};

export default StrapiImage;
