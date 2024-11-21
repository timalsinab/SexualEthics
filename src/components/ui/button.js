export const Button = ({ children, onClick, className, variant = "primary" }) => {
  const baseClasses = "py-2 px-4 rounded text-white focus:outline-none";
  const variants = {
    primary: "bg-blue-500 hover:bg-blue-600",
    outline: "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-50",
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
