interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  variant?: 'primary' | 'danger' | 'success' | 'outline';
  onClick?: () => void;
}

export default function Button({
  children,
  type = "button",
  disabled = false,
  variant = 'primary',
  onClick
}: ButtonProps) {
  const baseClasses = "font-bold rounded-lg py-2 px-8 transition-colors";
  
  const variantClasses = {
    primary: disabled 
      ? 'bg-gray-400 text-white cursor-not-allowed hover:bg-gray-400' 
      : 'bg-primary text-white cursor-pointer hover:bg-primary/90',
    danger: disabled 
      ? 'bg-gray-400 text-white cursor-not-allowed hover:bg-gray-400' 
      : 'bg-[#FF5151] text-white cursor-pointer hover:bg-[#FF5151]/90',
    success: disabled 
      ? 'bg-gray-400 text-white cursor-not-allowed hover:bg-gray-400' 
      : 'bg-[#47B960] text-white cursor-pointer hover:bg-[#47B960]/90',
    outline: disabled 
      ? 'bg-gray-400 text-white cursor-not-allowed hover:bg-gray-400' 
      : 'bg-white text-primary border border-primary cursor-pointer hover:bg-gray-50'
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </button>
  )
}