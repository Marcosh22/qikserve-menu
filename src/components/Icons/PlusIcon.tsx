import IconProps from "./IconProps";

function PlusIcon({ width = 16, height = 16, color = "#FFFFFF" }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19 19"
      width={width}
      height={height}
      fill={color}
    >
      <path
        d="M8,17c0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5v-6h6c.83,0,1.5-.67,1.5-1.5s-.67-1.5-1.5-1.5h-6V2c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5,1.5v6H2c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5h6v6Z"
        fill="currentColor"
        fillRule="evenodd"
        strokeWidth="0px"
      />
    </svg>
  );
}

export default PlusIcon;
