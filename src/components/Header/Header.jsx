import React from 'react'
import '../Header/header.css'
import { NavLink} from 'react-router-dom'

const nav__links = [
    {
      path: '/home',
      display: 'Home',
    },
    {
      path: '/guns',
      display: 'Quem somos',
    },
    {
      path: '/guns',
      display: 'Produtos',
    },
    {
      path: '/guns',
      display: 'Downloads',
    },
]

const Header = () => {
  return <header>
    <div className="navbar">
        <ul className="menu">
            {nav__links.map((item, index) => (
                <li key={index} className="nav__item">
                <NavLink
                    to={item.path} 
                >
                    {item.display}
                </NavLink>
                </li>
            ))}
        </ul>
    </div>
</header>
}

export default Header