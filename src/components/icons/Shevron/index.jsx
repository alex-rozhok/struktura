export const Shevron = ({
  width = 8,
  height = 5,
  color = "#C0D4F3",
  ...props
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 8 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0.666667 0.000152588L4 3.57166L7.33333 0.000152588L8 0.714343L4 5.00015L0 0.714343L0.666667 0.000152588Z"
        fill={color}
      />
    </svg>
  );
};
