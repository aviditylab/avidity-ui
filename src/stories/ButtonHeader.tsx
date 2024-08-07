import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react';
import { Menu } from './Menu';
import "./buttonHeader.css"
import { MenuGroup } from './LandingPages/MenuGroup';
interface ButtonHeaderProps {
  showMenu: boolean
}

export const ButtonHeader = ({ showMenu = false, ...props }: ButtonHeaderProps) => {
  gsap.registerPlugin(useGSAP);
  const container = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { contextSafe } = useGSAP();

  const [configuration, setConfiguration] = useState({
    buttonStyle: {
      backgroundColor: '#377DFF',
      color: 'white'
    }
  })

  const onChangeWidth = contextSafe(() => {
    if (showMenu) {
      gsap.to('.button-header', { width: 504, duration: 1 })
      gsap.to('.menuheaderItem', { width: "100%", duration: 1 })
    } else {
      gsap.to('.button-header', { width: 142, duration: 1 })
      gsap.to('.menuheaderItem', { width: 0, duration: 1 })
    }
  })

  useEffect(() => {
    if (showMenu) {
      setConfiguration({
        buttonStyle: {
          backgroundColor: 'rgba(0,0,0,0)',
          color: '#377DFF'
        }
      })
    } else {
      setConfiguration({
        buttonStyle: {
          backgroundColor: '#377DFF',
          color: 'white'
        }
      })
    }
    onChangeWidth()
  }, [showMenu]);

  const menuGroupItem = [
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
  return (
    <div ref={container} >
      <div {...props} className="button-header" >
        <div className="menuheaderItem">
          <MenuGroup type='button' />
        </div>
        <button
          style={{ ...configuration.buttonStyle }}
          type='button'
          className='button-start'
          {...props}
          ref={buttonRef}
        >
          Start for Free
        </button>
      </div>
    </div>
  )
}