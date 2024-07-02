import { useEffect, useState, useRef } from "react"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './buttonHeader.css'
import { Menu } from "./Menu"

interface ButtonHeaderProps {
  showMenu: boolean
}
export const ButtonHeader = ({ showMenu = false, ...props }: ButtonHeaderProps) => {
  gsap.registerPlugin(useGSAP);

  const container = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const { contextSafe } = useGSAP({ scope: container });

  const [configuration, setConfiguration] = useState({
    buttonStyle: {
      backgroundColor: '#377DFF',
      color: 'white',
    }
  })
  const onChangeWidth = contextSafe(() => {
    if (container.current?.clientWidth === 142) {
      gsap.to('.button-header', { width: 504, duration: 1 });
      gsap.to('.menuheaderItem', { width: "100%", duration: 1 });
    } else {
      gsap.to('.button-header', { width: 142, duration: 1 });
      gsap.to('.menuheaderItem', { width: 0, duration: 1 });
    }
  });
  useEffect(() => {
    if (showMenu) {
      setConfiguration({
        buttonStyle: {
          backgroundColor: 'rgba(0,0,0,0)',
          color: '#377DFF',
        }
      })
    } else {
      setConfiguration({
        buttonStyle: {
          backgroundColor: '#377DFF',
          color: 'white',
        }
      })
    }
    onChangeWidth()
  }, [showMenu])
  return (
    <div ref={container}>
      <div {...props} className="button-header"  >
        <div className="menuheaderItem">
          {menuGroupItem.map((item, index) => (
            <Menu {...item} key={index} />
          ))}
        </div>

        <button
          type='button'
          className='button'
          style={{ ...configuration.buttonStyle }}
          {...props}
          ref={buttonRef}
        >
          Start for Free
        </button>
      </div>
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