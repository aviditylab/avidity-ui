import { Menu, MenuProps } from "../Menu"
import './menuGroup.css'
export interface MenuGroupProps {
  items?: MenuProps[]
}

export const MenuGroup = ({ items = defaultMenuGroup }: MenuGroupProps) => {
  return (
    <div className="menu-group-header">
      {items.map((item, index) => (
        <Menu {...item} key={index} />
      ))}
    </div>
  )
}

export const defaultMenuGroup = [
  {
    label: "About",
    color: "white",
    underline: true,
  }, {
    label: "Portofolio",
    color: "white",
    underline: false,
  }, {
    label: "Service",
    color: "white",
    underline: false,
  }, {
    label: "Contact",
    color: "white",
    underline: false,
  }
]