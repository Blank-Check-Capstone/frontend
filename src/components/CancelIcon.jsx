const CancelIcon = ({ width, height, stokeWidth, color }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width={width}
      height={height}
      fill="none"
      stroke="currentColor"
      stroke-width={stokeWidth}
      color={color}
      stroke-linecap="round"
      stroke-linejoin="round"
      class="lucide lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export default CancelIcon;
 