
import './Portfolio.css'

function ItensFixo({ funcaoComponent }) {
  return (
    <div>
    <div className="itensFixo">
        <div className="opcoes">
            <p onClick={funcaoComponent('Portfolio')} className='pOpcoes'>Portfólio</p>
            <p onClick={funcaoComponent('Avaliacoes')} className='pOpcoes'>Avaliações</p>
        </div>
        <hr />
    </div>
</div>
  )
}

export default ItensFixo