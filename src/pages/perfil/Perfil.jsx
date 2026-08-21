import { useState } from 'react'
import Portfolio from '../../components/Portfolio/CodePortfolio/Portfolio'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import PerfilSuperior from '../../components/perfilSuperior/PerfilSuperior'
import AbaDeAvaliacoes from '../../components/AbaDeAvaliações/AbaDeAvaliacoes'
import './perfil.css'

function Perfil() {
  const [activeTab, setActiveTab] = useState('Portfolio')

  return (
    <div className="mainPerfil">
      <div className="barraLateralPerfil">
        <BarraLateral />
      </div>
      <div className="mainPerfilPerfil">
        <PerfilSuperior />
        <div className="AbaPortfolio">
          <div className="portfolio">
            <div className="itensFixo">
              <div className="opcoes">
                <p
                  onClick={() => setActiveTab('Portfolio')}
                  className={`pOpcoes ${activeTab === 'Portfolio' ? 'pOpcaoAtiva' : ''}`}
                >
                  Portfólio
                </p>
                <p
                  onClick={() => setActiveTab('Avaliacoes')}
                  className={`pOpcoes ${activeTab === 'Avaliacoes' ? 'pOpcaoAtiva' : ''}`}
                >
                  Avaliações
                </p>
              </div>
            </div>
            {activeTab === 'Portfolio' && <Portfolio />}
            {activeTab === 'Avaliacoes' && <AbaDeAvaliacoes />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Perfil
