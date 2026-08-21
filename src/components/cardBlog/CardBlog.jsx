import { useNavigate } from 'react-router-dom'
import "./cardCompleto.css"

function CardBlog({ image, tituloMateria, dataPublicacao, descricao, materia, externalLink }) {
  const navigate = useNavigate()

  const handleNavigate = () => {
    if (externalLink) {
      window.open(externalLink, '_blank', 'noopener noreferrer')
    } else {
      navigate(materia)
    }
  }

  return (
    <div className="cardCompleto">
      <div className="cardImagem">
        <img src={image} alt={`Capa da matéria: ${tituloMateria}`} className="imagem" loading="lazy" />
        <div className="cardTextos">
          <h2 className="tituloMateria">{tituloMateria}</h2>
          <p className="dataPublicacao">{dataPublicacao}</p>
          <p className="descricaoCard">{descricao}</p>
        </div>
      </div>
      <div className="restanteCard">
        <button className="botaoClica" onClick={handleNavigate}>Saiba mais</button>
      </div>
    </div>
  )
}

export default CardBlog
