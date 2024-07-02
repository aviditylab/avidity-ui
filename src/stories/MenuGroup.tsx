import { Menu, MenuProps } from "./Menu"
import './menuGroup.css'
export interface MenuGroupProps {
  items: MenuProps[];
}

export const MenuGroup = ({ items, ...props }: MenuGroupProps) => {
  return (
    <div className="menuGroup" {...props}>
      {items.map((item, index) => (
        <Menu {...item} key={index} />
      ))}
    </div>
  )
}