interface ButtonProps {
   className?: string;
   label: string;
   variant?: 'primary' | 'secondary'; // New variant prop
   onClick?: () => void; // Click handler
   disabled?: boolean; // Disabled state
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', onClick, disabled = false, className }) => {
   const baseStyle = `${className} px-6 py-3 rounded font-semibold transition duration-300`;
   const primaryStyle = "bg-slate-800 text-white hover:bg-slate-800";
   const secondaryStyle = "border border-orange-600 text-orange-600 hover:bg-orange-50";

   const disabledStyle = "opacity-50 cursor-not-allowed";

   const buttonClass = `${baseStyle} ${variant === 'primary' ? primaryStyle : secondaryStyle} ${disabled ? disabledStyle : ''}`;

   return (
      <button
         className={buttonClass}
         onClick={onClick}
         disabled={disabled}
      >
         {label}
      </button>
   );
};

export default Button;
