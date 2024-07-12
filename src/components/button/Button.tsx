interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large' | "extraLarge";
  onClick?: () => void;
}
export const Button = ({
  primary = false,
  size = 'medium', children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type="button"
      className={`${primary ? "bg-blue-700 text-white font-bold border-blue-700" : "bg-transparent border-black"} border-2 border-solid rounded-md 
      ${size == "small" ? "min-w-8 max-w-16 p-0.5" : size == "medium" ? "min-w-16 max-w-20 p-1" : size == "large" ? "min-w-20 max-w-24 px-2 py-1": "min-w-24 px-3 py-1"}
      ${props.className}`}
    >
      {children}
    </button>
  );
};