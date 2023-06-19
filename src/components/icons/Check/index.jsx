export const Check = ({ width = 12, height = 9, color = "#2F80ED", ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.50001 6.68951L2.03026 4.21976L0.969757 5.28026L4.50001 8.81051L11.7803 1.53026L10.7198 0.469757L4.50001 6.68951Z"
        fill={color}
      />
    </svg>
  );
};
