import React from 'react'
import LogoTrademap from 'assets/image/Favicon-TradeMap-69x75.png'
import style from './style.module.scss'
const Logo = () => {
  return (
    <div>
      <img className={style.logo} src={LogoTrademap} alt="icone Trademap" />
    </div>
  )
}

export default Logo