import { AiOutlineMore } from 'react-icons/ai'
import { format } from 'date-fns'

export default function Mensagens({ infoMensagem }) {
  return (
    <>
      <div className="headerMensagens">
        <div className="infoContato">
          <img
            className="fotoConversa"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
            alt="Foto do Contato"
          />
          <p>Rafaela Silva</p>
        </div>
        <button className="messageActions">
          <AiOutlineMore />
        </button>
      </div>
      <div className="areaChat">
        <p className="data-do-chat">Hoje</p>
        
        {/* Histórico estático de exemplo */}
        <Enviar enviar="Boa tarde, gostaria de solicitar um serviço de Poda" />
        <Receber receber="Boa tarde, qual seria o nível do trabalho?" />
        
        {/* Mensagens dinâmicas enviadas pelo usuário */}
        {infoMensagem && infoMensagem.map((msg, idx) => (
          msg.enviado 
            ? <Enviar key={idx} enviar={msg.texto} time={msg.time} /> 
            : <Receber key={idx} receber={msg.texto} time={msg.time} />
        ))}
      </div>
    </>
  )
}

export function Enviar({ enviar, time }) {
  const displayTime = time || format(new Date(), 'HH:mm')
  
  return (
    <div className="enviado-content">
      <div className="enviadoContainer">
        <div className="enviado">{enviar}</div>
        <p style={{ fontSize: '0.75rem', color: 'var(--neutral-400)', marginTop: '4px' }}>{displayTime}</p>
      </div>
    </div>
  )
}

export function Receber({ receber, time }) {
  const displayTime = time || format(new Date(), 'HH:mm')
  
  return (
    <div className="receber-content">
      <div className="receberContainer">
        <div className="receber">{receber}</div>
        <p style={{ fontSize: '0.75rem', color: 'var(--neutral-400)', marginTop: '4px', textAlign: 'right' }}>{displayTime}</p>
      </div>
    </div>
  )
}
