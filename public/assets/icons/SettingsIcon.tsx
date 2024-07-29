import React from "react";

interface SettingsIconProps {
    width?: string;
    height?: string;
}

function SettingsIcon({width = '24px', height = '24px'}: SettingsIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 33 33"
    >
      <mask
        id="mask0_70_732"
        style={{ maskType: "alpha" }}
        width="33"
        height="33"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="currentColor" d="M0 0H33V33H0z"></path>
      </mask>
      <g mask="url(#mask0_70_732)">
        <path
          fill="currentColor"
          d="M14.977 29.563c-.469 0-.874-.156-1.215-.467a1.933 1.933 0 01-.623-1.15l-.336-2.572a6.32 6.32 0 01-1.133-.518 7.33 7.33 0 01-1.037-.714L8.25 25.155c-.432.19-.866.208-1.302.055a1.88 1.88 0 01-1.017-.835l-1.55-2.687a1.683 1.683 0 01-.208-1.281c.102-.45.336-.822.703-1.115l2.06-1.547a6.946 6.946 0 01-.068-.616 9.581 9.581 0 010-1.212c.014-.202.036-.423.068-.662l-2.06-1.547a1.91 1.91 0 01-.697-1.122 1.72 1.72 0 01.216-1.287L5.93 8.652c.242-.395.58-.671 1.017-.829a1.69 1.69 0 011.302.049l2.37 1a8.828 8.828 0 011.061-.721 7.012 7.012 0 011.11-.525l.348-2.573c.074-.455.282-.838.623-1.149a1.742 1.742 0 011.215-.466h3.046c.469 0 .874.155 1.215.466.341.311.549.694.623 1.15l.336 2.585c.412.15.785.325 1.12.525.333.2.67.436 1.01.707l2.436-1a1.69 1.69 0 011.302-.048c.437.158.776.434 1.017.829l1.537 2.66c.241.404.31.83.208 1.281-.102.45-.336.822-.703 1.115l-2.113 1.586c.05.222.076.43.081.623.004.193.007.387.007.583 0 .187-.005.377-.014.57-.009.193-.04.414-.095.662l2.073 1.56c.367.293.603.664.71 1.115.107.45.04.877-.202 1.28l-1.558 2.674a1.877 1.877 0 01-1.023.836c-.44.153-.877.135-1.309-.056l-2.353-1.012c-.34.271-.688.511-1.042.72-.354.209-.717.38-1.09.512l-.335 2.586a1.932 1.932 0 01-.623 1.149 1.742 1.742 0 01-1.215.466h-3.046zm1.539-8.938c1.144 0 2.117-.401 2.92-1.204.803-.803 1.205-1.777 1.205-2.921s-.402-2.117-1.205-2.92c-.803-.803-1.776-1.205-2.92-1.205-1.158 0-2.135.402-2.931 1.204-.796.803-1.194 1.777-1.194 2.921s.398 2.117 1.194 2.92c.795.803 1.773 1.205 2.93 1.205z"
        ></path>
      </g>
    </svg>
  );
}


export default SettingsIcon;
