function SearchIcon({ width = 16, height = 16, color = "#FFFFFF" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.71 19.71"
      width={width}
      height={height}
      fill={color}
    >
      <path
        d="M8,16C3.58,16,0,12.42,0,8S3.58,0,8,0s8,3.58,8,8c0,1.85-.63,3.55-1.68,4.91l5.39,5.39-1.41,1.41-5.39-5.39c-1.35,1.05-3.06,1.68-4.91,1.68ZM14,8c0,3.31-2.69,6-6,6s-6-2.69-6-6,2.69-6,6-6,6,2.69,6,6Z"
        style={{
          fill: "currentColor",
          fillRule: "evenodd",
          strokeWidth: 0,
        }}
      />
    </svg>
  );
}

export default SearchIcon;
