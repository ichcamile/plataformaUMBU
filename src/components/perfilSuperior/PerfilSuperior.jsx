import { IoStar } from "react-icons/io5"
import { useNavigate } from 'react-router-dom'
import "./perfilSuperior.css"

function PerfilSuperior({ nota = "5.0" }) {
  const navigate = useNavigate()

  return (
    <div className="cardPerfilSuperior">
      <div className="cardFundoPS"></div>

      <div className="cardPrincipalConteudo">
        <aside className="fotoCardPerfil">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Foto do Jardineiro" />
        </aside>
        
        <div className="conteudoPrincipalPS">
          <div className="meioConteudo">
            <div className="parteCimaConteudo">
              <h4 className="cardTexto">José Ferreira</h4>
              <div className="estrelasPerfil">
                <span className="estrelaUnica"><IoStar /></span>
                <span className="estrelaUnica"><IoStar /></span>
                <span className="estrelaUnica"><IoStar /></span>
                <span className="estrelaUnica"><IoStar /></span>
                <span className="estrelaUnica"><IoStar /></span>
                <p className="nota"><strong>{nota}</strong></p>
              </div>
            </div>
            
            <div className="habilidadesConjunto">
              <span className="habilidades">Plantio</span>
              <span className="habilidades">Poda</span>
              <span className="habilidades">Manutenção</span>
              <span className="verMaisPerfil">Ver mais...</span>
            </div>
          </div>

          <div className="conteudoLadoDireito">
            <button className="btnContrate" onClick={() => navigate('/chat')}>Contrate</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PerfilSuperior
