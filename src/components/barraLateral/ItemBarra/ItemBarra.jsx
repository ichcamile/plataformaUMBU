import { Link, useLocation } from 'react-router-dom'

function ItemBarra({ iconUrl, nome, rota }) {
  const location = useLocation()
  const isActive = location.pathname === rota

  return (
    <li className={`container ${isActive ? 'containerActive' : ''}`}>
      <Link to={rota}>
        <span className="iconUrl">{iconUrl}</span>
        <span className="categories">{nome}</span>
      </Link>
    </li>
  )
}

export default ItemBarra
