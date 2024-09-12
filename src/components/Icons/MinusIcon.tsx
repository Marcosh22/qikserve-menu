import IconProps from "./IconProps";

function MinusIcon({ width = 16, height = 16, color = "#FFFFFF" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
      width={width}
      height={height}
      fill={color}
    >
      <rect
        x=".5"
        y="8"
        width="18"
        height="3"
        rx="1.5"
        ry="1.5"
        fill="currentColor"
        strokeWidth="0px"
      />
    </svg>
  );
}

export default MinusIcon;
