
const Button = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <button
      className={variant}
      onClick={onClick}
    >
      { children }
    </button>
  )
}