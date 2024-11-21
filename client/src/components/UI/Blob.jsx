import React from "react";
import "./Blob.css";

const Blob = () => {
  return (
    <svg
      className="blob-animation absolute blur-3xl right-[30%] z-[-99] opacity-40"
      width="50%"
      height="100%"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_17_60)">
        <g filter="url(#filter0_f_17_60)">
          <path d="M128.6 0H0V322.2L332.5 211.5L128.6 0Z" fill="#F51664"></path>
          <path
            d="M0 322.2V400H240H320L332.5 211.5L0 322.2Z"
            fill="#F53AE8"
          ></path>
          <path
            d="M320 400H400V78.75L332.5 211.5L320 400Z"
            fill="#7fcef3"
          ></path>
          <path d="M400 0H128.6L332.5 211.5L400 78.75V0Z" fill="#F53AE8"></path>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f_17_60"
          x="-159.933"
          y="-159.933"
          width="719.867"
          height="719.867"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="79.9667"
            result="effect1_foregroundBlur_17_60"
          ></feGaussianBlur>
        </filter>
        <clipPath id="clip0_17_60">
          <rect width="400" height="400" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default Blob;
