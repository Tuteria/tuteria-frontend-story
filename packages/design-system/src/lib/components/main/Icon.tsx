import { Img } from "@chakra-ui/image";
import React, { useState, useEffect, useRef } from "react";
interface Window {
  isProduction: any;
}
declare let window: Window;

const Icon: React.FC<{ name: string; size?: number; [key: string]: any }> = ({
  name,
  size = 16,
  ...rest
}) => {
  if (name) {
    return (
      <Img
        src={`${
          window.isProduction === "true" ? "/static/_build" : ""
        }/originals/${name}.svg`}
        alt={name}
      />
    );
  }
  return null;
};

export default Icon;
