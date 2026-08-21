import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import logotipo from '../../assets/Umbu.png'
import './header.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/umblog', label: 'UMblog' },
    { to: '/planos', label: 'Planos' },
    { to: '/faleconosco', label: 'Fale conosco' },
  ]

  return (
    <div className={`containerHeader ${scrolled ? 'headerScrolled' : ''}`}>
      <header>
        <Link to="/" className="logotipo">
          <img src={logotipo} alt="UMBU Logo" />
        </Link>

        <nav className={`navegacao ${menuOpen ? 'navOpen' : ''}`}>
          <ul className="listNav">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="buttomLogin">
          <button className="btn-outline" onClick={() => navigate('/login')}>
            Entrar
          </button>
          <button className="btn-primary" onClick={() => navigate('/registro')}>
            Registre-se
          </button>
        </div>

        <button
          className="menuToggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <IoCloseOutline /> : <HiOutlineMenuAlt3 />}
        </button>

        {/* Mobile overlay */}
        {menuOpen && (
          <div className="mobileOverlay" onClick={() => setMenuOpen(false)} />
        )}

        {/* Mobile menu */}
        <div className={`mobileMenu ${menuOpen ? 'mobileMenuOpen' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={location.pathname === link.to ? 'active' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mobileMenuDivider" />
            <li>
              <Link to="/sobrenos">Sobre nós</Link>
            </li>
            <li className="mobileMenuButtons">
              <button className="btn-outline" onClick={() => navigate('/login')}>
                Entrar
              </button>
              <button className="btn-primary" onClick={() => navigate('/registro')}>
                Registre-se
              </button>
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}