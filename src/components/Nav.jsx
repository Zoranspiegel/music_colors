import s from './Nav.module.css'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <div className={s.nav}>
      <NavLink to='/gamma' className={({isActive}) => isActive ? s.activeLink : s.link }>gamma</NavLink>
      <NavLink to='/diatonic' className={({isActive}) => isActive ? s.activeLink : s.link }>diatonic</NavLink>
      <NavLink to='/chromatic' className={({isActive}) => isActive ? s.activeLink : s.link }>chromatic</NavLink>
    </div>
  )
}