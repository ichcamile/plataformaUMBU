import { IoStar } from 'react-icons/io5'
import './avaliacoesCliente.css'

function AvaliacoesCliente({ fotoJard, nomeAvaliacao, descricaoAvaliacao, descricaoTipoUsuario }) {
  return (
    <div className="cardAvaliacao">
      <div className="cardInformacoes">
        <img src={fotoJard} alt={nomeAvaliacao} />
        <h3>{nomeAvaliacao}</h3>
        <p className="tipoUsuario">{descricaoTipoUsuario}</p>
        <div className="estrelas">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="estrelaUnica"><IoStar /></span>
          ))}
        </div>
      </div>
      <div className="cardFundo">
        <p>&ldquo;{descricaoAvaliacao}&rdquo;</p>
      </div>
    </div>
  )
}

export default AvaliacoesCliente