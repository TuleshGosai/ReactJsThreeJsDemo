import React from 'react';

const CommonIcons = (icon) => {
  const {
    type,
  } = icon;
  const getIcon = {
    moonIcn() {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          fill="currentColor"
          viewBox="0 0 256 256"
          tyle={{ height: "1.25rem", width: "1.25rem" }}
        >
          <rect width="256" height="256" fill="none"></rect>
          <path d="M240,80H224V64a8,8,0,0,0-16,0V80H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V96h16a8,8,0,0,0,0-16Z"></path>
          <path d="M152,48h8v8a8,8,0,0,0,16,0V48h8a8,8,0,0,0,0-16h-8V24a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Z"></path>
          <path d="M216.5,144.6l-2.2.4A84,84,0,0,1,111,41.6a5.7,5.7,0,0,0,.3-1.8,8,8,0,0,0-5-7.9,7.8,7.8,0,0,0-5.2-.2A100,100,0,1,0,224.3,154.9a7.9,7.9,0,0,0,0-4.8A8.2,8.2,0,0,0,216.5,144.6Z"></path>
        </svg>
      );
    },
    sunIcn() {
      return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        fill="currentColor"
        viewBox="0 0 256 256"
        style={{ height: "1.25rem", width: "1.25rem" }}
      >
        <rect width="256" height="256" fill="none"></rect>
        <circle
          cx="128"
          cy="128"
          r="60"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <line
          x1="128"
          y1="36"
          x2="128"
          y2="16"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="62.9"
          y1="62.9"
          x2="48.8"
          y2="48.8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="36"
          y1="128"
          x2="16"
          y2="128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="62.9"
          y1="193.1"
          x2="48.8"
          y2="207.2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="220"
          x2="128"
          y2="240"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="193.1"
          y1="193.1"
          x2="207.2"
          y2="207.2"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="220"
          y1="128"
          x2="240"
          y2="128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="193.1"
          y1="62.9"
          x2="207.2"
          y2="48.8"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </svg>
      );
    },
  };
  return (
    getIcon[type]()
  );
};

export default CommonIcons;
