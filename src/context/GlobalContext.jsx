import { createContext, useContext, useState, useEffect } from 'react'

const GlobalContext = createContext()

export function GlobalProvider({ children }) {
  // 1. Simulação de Usuário Logado
  const [user, setUser] = useState({
    id: 'usr_123',
    name: 'Mile Silva',
    role: 'Jardineiro Especialista',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    stats: {
      views: 124,
      rating: 4.9
    }
  })

  const [isAuthenticated, setIsAuthenticated] = useState(true)

  // 2. Simulação de Mensagens (Chat)
  const [chatContacts, setChatContacts] = useState([
    { id: 1, name: "Rafaela Silva", role: "Jardineira Paisagista", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80", time: "10:42", unread: 2, lastMsg: "Podemos agendar a visita?" },
    { id: 2, name: "Luciana Oliveira", role: "Especialista em Rosas", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", time: "Ontem", unread: 0, lastMsg: "Muito obrigada!" },
    { id: 3, name: "Joana Santos", role: "Manutenção", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", time: "Ontem", unread: 0, lastMsg: "Os insumos já chegaram." },
  ])

  const [chatMessages, setChatMessages] = useState({
    1: [
      { id: 1, texto: "Olá Rafaela! Gostaria de um orçamento para meu jardim de inverno.", enviado: true, time: "10:30" },
      { id: 2, texto: "Claro! Pode me enviar algumas fotos do espaço?", enviado: false, time: "10:35" },
      { id: 3, texto: "Podemos agendar a visita?", enviado: false, time: "10:42" }
    ]
  })

  // Funções de Ação Complexas
  const sendMessage = (contactId, text) => {
    const now = new Date()
    const timeString = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`
    
    setChatMessages(prev => ({
      ...prev,
      [contactId]: [
        ...(prev[contactId] || []),
        { id: Date.now(), texto: text, enviado: true, time: timeString }
      ]
    }))

    // Atualiza o lastMsg no contato
    setChatContacts(prev => prev.map(c => 
      c.id === contactId ? { ...c, lastMsg: text, time: timeString } : c
    ))
  }

  const markAsRead = (contactId) => {
    setChatContacts(prev => prev.map(c => 
      c.id === contactId ? { ...c, unread: 0 } : c
    ))
  }

  // Simulação de delay de carregamento de banco de dados
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])

  const contextValue = {
    user,
    setUser,
    isAuthenticated,
    setIsAuthenticated,
    chatContacts,
    chatMessages,
    sendMessage,
    markAsRead,
    isLoading
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobal() {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error('useGlobal deve ser usado dentro de um GlobalProvider')
  }
  return context
}
