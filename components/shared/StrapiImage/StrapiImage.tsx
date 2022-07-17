import React, { useState } from "react";
import Image from "next/future/image";
import { ComponentSharedImage } from "../../../types/generated/schema";
import Modal from "../../Modal/Modal";
import cx from "classnames";
import { BarLoader } from "react-spinners";

type Props = ComponentSharedImage & {
  className?: string;
  modalClassName?: string;
  showLoading?: boolean;
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
  showLoading = true,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [allowLoadBar, setAllowLoadBar] = useState(false);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [isModalContentLoaded, setIsModalContentLoaded] = useState(false);

  const maxWidth = 1280;
  let unoptimizedWidth = width;
  let unoptimizedHeight = height;
  while (unoptimizedWidth < maxWidth) {
    unoptimizedWidth *= 2;
    unoptimizedHeight *= 2;
  }

  const toggleModalVisibility = () => {
    if (allowExpand) {
      setModalVisibility(!modalVisibility);
    }
  };
  if (!image?.data?.attributes?.url) return null;

  const url = image?.data?.attributes?.url;
  const imageFileName = url.split("/").pop();

  const cdnUrl = `https://cdn.austinhou.com/image/${width}/${imageFileName}`;

  setTimeout(() => {
    setAllowLoadBar(true);
  }, 250);

  const imageElement = (
    <Image
      src={cdnUrl}
      width={width}
      height={height}
      alt={alt || ""}
      className={className}
      {...(priority && { priority })}
      unoptimized={true}
      onLoadingComplete={() => {
        setIsImageLoaded(true);
      }}
    />
  );

  return (
    <>
      <div
        onClick={toggleModalVisibility}
        className={cx("relative", {
          "cursor-pointer": allowExpand,
        })}
      >
        {showLoading && allowLoadBar && !isImageLoaded && (
          <div className="mx-auto absolute flex justify-items-center items-center w-full h-full">
            <BarLoader
              color="#ffffff"
              cssOverride={{
                margin: "auto",
                backgroundColor: "rgba(0,0,0,0.5)",
                borderRadius: "9999px",
              }}
            />
          </div>
        )}
        {imageElement}
      </div>
      {modalVisibility && (
        <Modal
          handleToggleModal={toggleModalVisibility}
          isModalContentLoaded={isModalContentLoaded}
        >
          <Image
            src={url}
            alt={alt || ""}
            width={unoptimizedWidth}
            height={unoptimizedHeight}
            onLoadingComplete={() => {
              setIsModalContentLoaded(true);
            }}
            className={modalClassName}
            {...(priority && { priority })}
            unoptimized={true}
          />
        </Modal>
      )}
    </>
  );
};

export default StrapiImage;
