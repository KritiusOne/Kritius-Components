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
      className={`${primary ? "bg-blue-700 text-white font-bold border-blue-700" : "bg-transparent border-black"} border-2 border-solid rounded-md px-3 py-1 
      ${size == "small" ? "min-w-12 max-w-16" : size == "medium" ? "min-w-16 max-w-20" : size == "large" ? "min-w-20 max-w-24": "min-w-24"}
      ${props.className}`}
    >
      {children}
    </button>
  );
};