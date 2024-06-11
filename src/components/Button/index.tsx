import { ButtonProps } from "../../types";

const Button = ({
  title,
  designs,
  type,
  icon,
  disabled,
  handleClick,
}: ButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={type}
      disabled={disabled}
      className={`${designs} custom-btn bg-primary-cyan rounded-full hover:bg-cyan-800 text-white`}
    >
      <span className="flex-1">{title}</span>
      {icon && <img className="relative w-6 h-6" src={icon} />}
    </button>
  );
};

export default Button;
