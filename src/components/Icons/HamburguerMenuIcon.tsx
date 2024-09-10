function HamburguerMenuIcon({ width = 16, height = 16, color = "#FFFFFF" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width={width}
      height={height}
      fill={color}
    >
      <g>
          <path
            style={{ fill: "currentcolor", strokeWidth: "0px" }}
            d="M1,0h14c.6,0,1,.4,1,1v0c0,.6-.4,1-1,1H1c-.6,0-1-.4-1-1v0c0-.6.4-1,1-1Z"
          />
          <path
            style={{ fill: "currentcolor", strokeWidth: "0px" }}
            d="M1,6.1h14c.6,0,1,.4,1,1v0c0,.6-.4,1-1,1H1c-.6,0-1-.4-1-1v0c0-.6.4-1,1-1Z"
          />
          <path
            style={{ fill: "currentcolor", strokeWidth: "0px" }}
            d="M1,13.1h14c.6,0,1,.4,1,1v0c0,.6-.4,1-1,1H1c-.6,0-1-.4-1-1v0c0-.6.4-1,1-1Z"
          />
      </g>
    </svg>
  );
}

export default HamburguerMenuIcon;
