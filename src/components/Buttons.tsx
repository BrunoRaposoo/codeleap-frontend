interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
}

export default function Button({ children, type = "button", disabled = false, onClick }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        text-white font-bold rounded-lg py-2 px-8 transition-colors
        ${disabled 
          ? 'bg-gray-400 cursor-not-allowed hover:bg-gray-400'
          : 'bg-primary cursor-pointer hover:bg-primary/90'
        }
      `}
    >
      {children}
    </button>
  )
}