import { FC, useEffect, useState } from "react"
import { Button } from "./Button"
import './buttonHeader.css'
import { Menu } from "./Menu"

interface ButtonHeaderProps {
  showMenu: boolean
}
export const ButtonHeader = ({ showMenu = false, ...props }: ButtonHeaderProps) => {
  const [configuration, setConfiguration] = useState({
    backgroundColor: '#377DFF',
    color: 'white',
    menuGroupWidth: 'auto',
  })
  useEffect(() => {
    if (showMenu) {
      setConfiguration({
        backgroundColor: 'rgba(0,0,0,0)',
        color: '#377DFF',
        menuGroupWidth: '100%'
      })
    } else {
      setConfiguration({
        backgroundColor: '#377DFF',
        color: 'white',
        menuGroupWidth: '0'
      })
    }
  }, [showMenu])

  return (
    <div {...props} className="button-header">
      <div className="menuheaderItem" style={{ width: configuration.menuGroupWidth }}>
        {menuGroupItem.map((item, index) => (
          <Menu {...item} key={index} />
        ))}
      </div>
      <Button label="Start for Free" backgroundColor={configuration.backgroundColor} color={configuration.color} />
    </div>
  )
}

const menuGroupItem = [
  {
    label: "About",
    color: "white",
    underline: true,
  },
  {
    label: "Portofolio",
    color: "white",
    underline: false,
  },
  {
    label: "Service",
    color: "white",
    underline: false,
  },
  {
    label: "Contact",
    color: "white",
    underline: false,
  },
]