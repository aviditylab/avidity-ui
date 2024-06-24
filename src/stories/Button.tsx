import './button.css'

interface ButtonProps {
  label: string;
  backgroundColor?: string;
  color?: string;
  onClick?: () => void;
}

export const Button = ({
  label = 'button',
  backgroundColor = '#377DFF',
  color = 'white',
  ...props

}: ButtonProps) => {
  return (
    <button
      type='button'
      className='button'
      style={{ backgroundColor, color }}
      {...props}
    >
      {label}
    </button>
  )
}