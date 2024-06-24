export interface MenuProps {
  label: string;
  color: string;
  onClick?: () => void;
  underline: boolean;
}

export const Menu = ({
  label = 'About',
  color = 'white',
  underline = true,
  ...props
}: MenuProps) => {
  return (
    <div
      className="menu"
      style={{
        color,
        textDecorationLine: underline ? 'underline' : 'none'
      }}
      {...props}
    >
      {label}
    </div>
  )
}