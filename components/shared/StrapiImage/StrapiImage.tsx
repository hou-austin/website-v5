import React, { useEffect, useRef, useState } from "react";
import { ComponentSharedImage } from "../../../types/generated/schema";
import Modal from "../../Modal/Modal";
import cx from "classnames";
import { BarLoader } from "react-spinners";

const CDN_ENDPOINT = process.env.NEXT_PUBLIC_CDN_ENDPOINT;

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
  allowExpand = false,
  className = "",
  modalClassName = "",
  showLoading = true,
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [allowLoadBar, setAllowLoadBar] = useState(false);

  const [modalVisibility, setModalVisibility] = useState(false);
  const [isModalContentLoaded, setIsModalContentLoaded] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const handleLoad = () => setIsImageLoaded(true);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) setIsImageLoaded(true);
  }, []);

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
  const imageUrlComponents = imageFileName?.split(".");
  const originalImageExtension = imageUrlComponents?.pop();
  const avifUrl = `${CDN_ENDPOINT}image/${width}/${originalImageExtension}/${imageUrlComponents?.join(
    "."
  )}.avif`;
  const webpUrl = `${CDN_ENDPOINT}image/${width}/${originalImageExtension}/${imageUrlComponents?.join(
    "."
  )}.webp`;
  const cdnUrl = `${CDN_ENDPOINT}image/${width}/source/${imageFileName}`;

  setTimeout(() => {
    setAllowLoadBar(true);
  }, 250);

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
        <picture>
          <source srcSet={webpUrl} type="image/webp" />
          <source srcSet={avifUrl} type="image/avif" />
          <img
            ref={imageRef}
            src={cdnUrl}
            alt={alt || ""}
            width={width}
            height={height}
            onLoad={handleLoad}
            className={className}
          />
        </picture>
      </div>
      {modalVisibility && (
        <Modal
          handleToggleModal={toggleModalVisibility}
          isModalContentLoaded={isModalContentLoaded}
        >
          <picture>
            <img
              src={url}
              alt={alt || ""}
              width={unoptimizedWidth}
              height={unoptimizedHeight}
              onLoad={() => {
                setIsModalContentLoaded(true);
              }}
              className={modalClassName}
            />
          </picture>
        </Modal>
      )}
    </>
  );
};

export default StrapiImage;
