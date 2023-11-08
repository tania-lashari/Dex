import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" width="46" height="46">
      <title>icon</title>
      <defs>
        <image
          width="46"
          height="46"
          id="img1"
          href="data:image/png;base64,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"
        />
      </defs>
      <style></style>
      <use id="Background" href="#img1" x="0" y="0" />
    </svg>
  );
};

export default Icon;
