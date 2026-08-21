import BarraLateral from '../../components/barraLateral/BarraLateral'
import { useNavigate } from 'react-router-dom'
import { BiMessage } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { IoMdPhotos } from 'react-icons/io'
import './dashboard.css'

function Dashboard() {
  const navigate = useNavigate()

  const cards = [
    {
      icon: <BiMessage />,
      title: 'UMChat',
      desc: 'Negocie com segurança e facilidade',
      route: '/chat',
      img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    },
    {
      icon: <CgProfile />,
      title: 'Perfil',
      desc: 'Personalize seu perfil profissional',
      route: '/perfil',
      img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    },
    {
      icon: <IoMdPhotos />,
      title: 'Portfólio',
      desc: 'Mostre seus melhores trabalhos',
      route: '/perfil',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    },
  ]

  return (
    <div className="divisaoTelaDash">
      <div className="menuDash">
        <BarraLateral />
      </div>
      <div className="conteudoDashboard">
        <div className="dashWelcome">
          <h1>Bem-vindo de volta! 🌿</h1>
          <p>Explore as funcionalidades da plataforma UMBU</p>
        </div>

        <div className="funcionalidadesDashboard">
          {cards.map((card, i) => (
            <div
              key={i}
              className="servicoDashCard"
              onClick={() => navigate(card.route)}
              style={{ backgroundImage: `linear-gradient(rgba(0, 87, 46, 0.75), rgba(0, 50, 30, 0.85)), url(${card.img})` }}
            >
              <span className="dashCardIcon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="parceriaDash">
          <div className="parceriaBanner">
            <h3>Precisa de insumos para jardinagem?</h3>
            <p>Conheça nossos parceiros especializados em materiais de jardinagem</p>
            <a
              href="https://wa.me/5511989107716?text=Ol%C3%A1%21+Vim+pela+%40sejaumbu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Fale com Parceiro
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
