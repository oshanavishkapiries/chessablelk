"use client";
import React from "react";
import "@lottiefiles/lottie-player";

const Loader = (props: any) => {
  return (
    <lottie-player
      src="/lottie/loader.json"
      background="transparent"
      speed="1"
      style={{ width: props.size || "300px", height: props.size || "300px" }}
      loop
      autoplay
    ></lottie-player>
  );
};

export default Loader;
