import { useNavigate } from 'react-router-dom'

function BoxNotificacao({ imgPerfil, nomeContratante, comentario, data }) {
  const navigate = useNavigate()
  
  return (
    <div className="notificacaoCard">
      <img className="imgPerfilNotif" src={imgPerfil} alt={`Foto de ${nomeContratante}`} />
      <div className="boxContent">
        <div className="headerBoxNotif">
          <div className="nomeContratanteNotif">
            {nomeContratante}
          </div>
          <div className="dataNotif">
            {data}
          </div>
        </div>
        <div className="comentarioNotif">
          {comentario}
        </div>
        <div className="actionsBoxNotif">
          <button className="btnResponder" onClick={() => navigate('/chat')}>
            Responder
          </button>
        </div>
      </div>
    </div>
  )
}

export default BoxNotificacao