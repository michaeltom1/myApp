function Base({
  children,
  className,
  pad = "p-6",
  radius = "rounded-2xl",
  bg = "bg-[#21232c]",
}) {
  return (
    <div className={`${bg} ${radius} ${pad} ${className}`}>{children}</div>
  );
}

export default Base;
