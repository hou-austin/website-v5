import React from "react";
import { Slice } from "../../../types/generated/schema";
import SliceManager from "../../SliceManager";

const Slice: React.FC<Slice> = ({ slices }) => {
  return (
    <div className="flex flex-col sm:gap-8 gap-4">
      {slices && <SliceManager slices={slices} />}
    </div>
  );
};

export default Slice;
