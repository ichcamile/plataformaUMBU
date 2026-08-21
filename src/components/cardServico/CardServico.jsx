import './cardServico.css'

function CardServico({ servico, descricao, iconeCard }) {
  return (
    <div className="CardServico">
      <div className="cardServicoInner">
        <span className="iconesServicos">{iconeCard}</span>
        <h3 className="servicoTitulo">{servico}</h3>
        {descricao && <p className="descricaoTitulo">{descricao}</p>}
      </div>
    </div>
  )
}

export default CardServico