import { useState } from "react"
import { Menu, MenuProps } from "../Menu"
import './menuGroup.css'
export interface MenuGroupProps {
  items?: MenuProps[]
}

export const MenuGroup = ({ items = defaultMenuGroup }: MenuGroupProps) => {
  const [menuState, setMenuState] = useState<MenuProps[]>(items)

  const handleChangeMenu = (index: number) => {
    const newMenuState = menuState.map((menu, i) => {
      if (i === index) {
        return { ...menu, underline: true }
      }
      return { ...menu, underline: false }
    })
    setMenuState(newMenuState)
  }

  return (
    <div className="menu-group-header">
      {menuState.map((item, index) => (
        <Menu {...item} onClick={() => handleChangeMenu(index)} key={index} />
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