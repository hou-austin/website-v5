import React, { useState } from "react";
import Image from "next/future/image";
import { ComponentSharedImage } from "../../../types/generated/schema";
import Modal from "../../Modal/Modal";
import cx from "classnames";

type Props = ComponentSharedImage & {
  className?: string;
};

const StrapiImage: React.FC<Props> = ({
  width,
  height,
  alt = "",
  image,
  className = "",
  priority = false,
  allowExpand = true,
}) => {
  const [modalVisibility, setModalVisibility] = useState(false);

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
          {...(allowExpand && { unoptimized: true })}
        />
      </div>
      {modalVisibility && (
        <Modal handleToggleModal={toggleModalVisibility}>
          <Image
            src={image?.data?.attributes?.url}
            alt={alt || ""}
            className={className}
            {...(priority && { priority })}
            {...(allowExpand && { unoptimized: true })}
          />
        </Modal>
      )}
    </>
  );
};

export default StrapiImage;
