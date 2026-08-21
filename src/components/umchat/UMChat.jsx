import { useState, useRef, useEffect } from 'react'
import { MdOutlineEmojiEmotions, MdMoreVert, MdPhone, MdVideocam } from 'react-icons/md'
import { BsMic, BsSend, BsPaperclip } from 'react-icons/bs'
import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import './UMChat.css'

const initialContacts = [
  { id: 1, name: "Rafaela Silva", role: "Jardineira Paisagista", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", time: "10:42", unread: 2, lastMsg: "Podemos agendar a visita?" },
  { id: 2, name: "Luciana Oliveira", role: "Especialista em Rosas", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", time: "Ontem", unread: 0, lastMsg: "Muito obrigada!" },
  { id: 3, name: "Joana Santos", role: "Manutenção", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", time: "Ontem", unread: 0, lastMsg: "Os insumos já chegaram." },
  { id: 4, name: "Mariana Almeida", role: "Paisagismo Indoor", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80", time: "Segunda", unread: 0, lastMsg: "Perfeito, até lá." },
]

export default function UMChat() {
  const [mensagem, setMensagem] = useState('')
  const [mensagens, setMensagens] = useState([
    { id: 1, texto: "Olá Rafaela! Gostaria de um orçamento para meu jardim de inverno.", enviado: true, time: "10:30" },
    { id: 2, texto: "Claro! Pode me enviar algumas fotos do espaço?", enviado: false, time: "10:35" },
    { id: 3, texto: "Podemos agendar a visita?", enviado: false, time: "10:42" }
  ])
  const [activeContact, setActiveContact] = useState(initialContacts[0])
  
  const messagesEndRef = useRef(null)
  const navigate = useNavigate()

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [mensagens])

  const handleSend = () => {
    if (mensagem.trim()) {
      const now = new Date()
      const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
      setMensagens([...mensagens, { id: Date.now(), texto: mensagem, enviado: true, time: timeString }])
      setMensagem('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <div className="chatLayout">
      {/* Sidebar de Contatos */}
      <aside className="chatSidebar glass">
        <div className="sidebarHeader">
          <button className="btnVoltarChat" onClick={() => navigate('/painelcontrole')}>
            <FaArrowLeft />
            <span>Voltar</span>
          </button>
          <h2>Mensagens</h2>
        </div>

        <div className="searchBar">
          <input type="text" placeholder="Buscar conversas..." />
        </div>

        <div className="contactsList">
          {initialContacts.map(contact => (
            <div 
              key={contact.id} 
              className={`contactCard ${activeContact.id === contact.id ? 'active' : ''}`}
              onClick={() => setActiveContact(contact)}
            >
              <div className="contactAvatarWrapper">
                <img src={contact.avatar} alt={contact.name} />
                <div className="statusDot online"></div>
              </div>
              <div className="contactInfo">
                <div className="contactTop">
                  <h4>{contact.name}</h4>
                  <span className="contactTime">{contact.time}</span>
                </div>
                <div className="contactBottom">
                  <p className="lastMessage">{contact.lastMsg}</p>
                  {contact.unread > 0 && <span className="unreadBadge">{contact.unread}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Área Principal de Chat */}
      <main className="chatMain">
        {/* Chat Header */}
        <header className="chatHeader glass">
          <div className="activeContactInfo">
            <img src={activeContact.avatar} alt={activeContact.name} className="headerAvatar" />
            <div className="headerContactDetails">
              <h3>{activeContact.name}</h3>
              <span>{activeContact.role} • Online agora</span>
            </div>
          </div>
          <div className="headerActions">
            <button className="iconBtn"><MdVideocam /></button>
            <button className="iconBtn"><MdPhone /></button>
            <button className="iconBtn"><MdMoreVert /></button>
          </div>
        </header>

        {/* Mensagens */}
        <div className="messagesArea">
          <div className="dateSeparator">
            <span>Hoje</span>
          </div>
          
          {mensagens.map((msg) => (
            <div key={msg.id} className={`messageRow ${msg.enviado ? 'sentRow' : 'receivedRow'}`}>
              {!msg.enviado && (
                <img src={activeContact.avatar} alt="Avatar" className="messageAvatar" />
              )}
              <div className={`messageBubble ${msg.enviado ? 'sentBubble' : 'receivedBubble'}`}>
                <p>{msg.texto}</p>
                <span className="messageTime">{msg.time}</span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <footer className="chatFooter glass">
          <button className="attachBtn">
            <BsPaperclip />
          </button>
          <div className="inputWrapper">
            <button className="emojiBtn"><MdOutlineEmojiEmotions /></button>
            <input
              type="text"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua mensagem..."
            />
          </div>
          {mensagem.trim() ? (
            <button className="sendBtn pulse" onClick={handleSend}>
              <BsSend />
            </button>
          ) : (
            <button className="voiceBtn">
              <BsMic />
            </button>
          )}
        </footer>
      </main>
    </div>
  )
}
