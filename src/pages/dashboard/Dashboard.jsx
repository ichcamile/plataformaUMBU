import BarraLateral from '../../components/barraLateral/BarraLateral'
import { useNavigate } from 'react-router-dom'
import { BiMessage } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { IoMdPhotos } from 'react-icons/io'
import { MdOutlineWorkOutline, MdDashboard } from 'react-icons/md'
import './dashboard.css'

function Dashboard() {
  const navigate = useNavigate()

  const cards = [
    {
      icon: <BiMessage />,
      title: 'UMChat',
      desc: 'Comunique-se em tempo real com segurança',
      route: '/chat',
      img: 'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?w=600&q=80',
    },
    {
      icon: <CgProfile />,
      title: 'Seu Perfil',
      desc: 'Gerencie sua vitrine profissional',
      route: '/perfil',
      img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80',
    },
    {
      icon: <IoMdPhotos />,
      title: 'Portfólio',
      desc: 'Encante clientes com seus projetos',
      route: '/perfil',
      img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80',
    },
    {
      icon: <MdOutlineWorkOutline />,
      title: 'Serviços Ativos',
      desc: 'Acompanhe seus requerimentos',
      route: '/requerimentos',
      img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80',
    }
  ]

  return (
    <div className="layoutDashboard">
      <div className="sidebarFixed">
        <BarraLateral />
      </div>
      
      <main className="conteudoDashboard">
        <header className="dashHeader animate-fade-in-up">
          <div className="dashWelcome">
            <h1><MdDashboard className="titleIcon" /> Bem-vindo de volta! 🌿</h1>
            <p>Seu centro de controle para prosperar na plataforma UMBU.</p>
          </div>
          <div className="dashStats">
            <div className="statItem glass">
              <span className="statLabel">Visualizações</span>
              <span className="statValue">124</span>
            </div>
            <div className="statItem glass">
              <span className="statLabel">Avaliação</span>
              <span className="statValue">4.9 ★</span>
            </div>
          </div>
        </header>

        <section className="funcionalidadesDashboard animate-fade-in-up">
          {cards.map((card, i) => (
            <div
              key={i}
              className="servicoDashCard"
              onClick={() => navigate(card.route)}
              style={{ backgroundImage: `url(${card.img})` }}
            >
              <div className="cardOverlay"></div>
              <div className="cardContent">
                <span className="dashCardIcon">{card.icon}</span>
                <div className="cardText">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="parceriaDash animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="parceriaBanner">
            <div className="parceriaText">
              <h3>Precisa de insumos para seus projetos?</h3>
              <p>Conecte-se com nossos fornecedores certificados e garanta a qualidade das suas ferramentas e materiais botânicos.</p>
              <a
                href="https://wa.me/5511989107716?text=Ol%C3%A1%21+Vim+pela+%40sejaumbu"
                target="_blank"
                rel="noopener noreferrer"
                className="btnPremium"
              >
                Falar com Fornecedor
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard
