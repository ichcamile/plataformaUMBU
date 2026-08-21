import { useState } from 'react'
import Mensagens from './itemChat/Mensagens.jsx'
import Contatos from './itemChat/Contatos.jsx'
import { MdOutlineEmojiEmotions } from 'react-icons/md'
import { BsMic, BsSend } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import './UMChat.css'

export default function UMChat() {
  const [mensagem, setMensagem] = useState('')
  const [mensagens, setMensagens] = useState([])
  const navigate = useNavigate()

  const handleSend = () => {
    if (mensagem.trim()) {
      setMensagens([...mensagens, { texto: mensagem, enviado: true }])
      setMensagem('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <div className="umchat">
      <div className="listaContatos">
        <button
          type="button"
          className="btnVolta"
          onClick={() => navigate('/painelcontrole')}
        >
          <FaArrowLeft /> Voltar
        </button>
        <div className="inclusaoSimbolo">
          <h2 className="umChatTitle">UmChat</h2>
        </div>
        <Contatos
          iconesContatos="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
          nomeContato="Rafaela Silva"
          dataMensagem="Há 30 minutos"
        />
        <Contatos
          iconesContatos="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80"
          nomeContato="Luciana Oliveira"
          dataMensagem="Há 1 hora"
        />
        <Contatos
          iconesContatos="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
          nomeContato="Joana Santos"
          dataMensagem="Há 2 horas"
        />
        <Contatos
          iconesContatos="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
          nomeContato="Mariana Almeida"
          dataMensagem="Há 3 horas"
        />
        <Contatos
          iconesContatos="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
          nomeContato="Rodrigo Pereira"
          dataMensagem="Há 4 horas"
        />
      </div>

      <div className="chatArea">
        <Mensagens infoMensagem={mensagens} />
        <div className="footerMessage">
          <div className="inputMessage">
            <MdOutlineEmojiEmotions />
            <input
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Escreva para o prestador de serviço..."
            />
            <button className="sendButton" onClick={handleSend}>
              <BsSend />
            </button>
          </div>
          <button className="voiceButton">
            <BsMic />
          </button>
        </div>
      </div>
    </div>
  )
}
