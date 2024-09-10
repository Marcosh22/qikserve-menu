function BackArrowIcon({
  width = 16,
  height = 16,
  color = "#FFFFFF",
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      fill={color}
    >
      <path
        d="M14.97,7.08H3.5l5.01-4.5c.4-.36.4-.95,0-1.31-.4-.36-1.05-.36-1.45,0L.3,7.35c-.4.36-.4.94,0,1.3l6.77,6.08c.4.36,1.05.36,1.45,0,.4-.36.4-.94,0-1.3l-5.01-4.5h11.47c.56,0,1.03-.42,1.03-.92s-.46-.92-1.03-.92Z"
        style={{ fill: "currentcolor", fillRule: "evenodd", strokeWidth: "0px" }}
      />
    </svg>
  );
}

export default BackArrowIcon;
