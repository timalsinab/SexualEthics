export const Button = ({ children, onClick, className, variant = "primary" }) => {
  const baseClasses =
    "py-2 px-4 rounded focus:outline-none transition-all duration-200 font-semibold shadow-sm";
  const variants = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 focus:ring-2 focus:ring-blue-300",
    outline:
      "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100 focus:ring-2 focus:ring-blue-300",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
