import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './menu.scss'

function Menu({ active, setActive }) {
  const location = useLocation()

  useEffect(() => {
    setActive(false);
  }, [location, setActive])

  return (
    <ul className={ `menu ${active ? 'active' : ''}` }>
      <li>
        <Link to='/'>About me</Link>
      </li>
      <li>
        <Link to='/experience'>Experience</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
    </ul>
  )
}

export default Menu