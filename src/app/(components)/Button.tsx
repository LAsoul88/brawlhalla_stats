
const Button = ({ children, variant, onClick }: ButtonProps) => {
  return (
    <button
      className='border p-2 rounded'
      onClick={onClick}
    >
      { children }
    </button>
  )
}

export default Button