interface ButtonProps {
  text: string;
  label?: string | React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}
export const Button = ({
  text,
  label,
  onClick,
  variant = 'primary',
}: ButtonProps) => {
  const baseStyle =
    'font-semibold py-2 px-4 rounded flex items-center justify-center gap-2';
  const variantStyles = {
    primary: 'bg-gray-950 text-white hover:bg-gray-900',
    secondary: 'border border-black hover:bg-gray-100',
  };
  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]}`}
      onClick={onClick}
    >
      {label && <span>{label}</span>}
      <span>{text}</span>
    </button>
  );
};
