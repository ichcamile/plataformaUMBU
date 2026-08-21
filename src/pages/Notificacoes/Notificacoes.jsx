import { useState } from 'react'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import BoxNotificacao from '../../components/Notificações/BoxNotificacao/BoxNotificacao'
import './Notificacoes.css'

function Notificacoes() {
  const [activeTab, setActiveTab] = useState('Recentes')

  const tabs = ['Recentes', 'Pedidos', 'Avaliações']

  const notificacoesList = [
    {
      imgPerfil: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      nomeContratante: "Rafaela Silva",
      comentario: "Oi, estou pensando em criar um jardim vertical na minha varanda. Você tem alguma sugestão de plantas que funcionariam bem nesse espaço?",
      data: "Há 30 minutos",
      tipo: "Recentes"
    },
    {
      imgPerfil: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
      nomeContratante: "Luciana Oliveira",
      comentario: "Olá! Preciso de ajuda para identificar uma planta no meu jardim. Você poderia me orientar sobre como cuidar dela?",
      data: "Há 1 hora",
      tipo: "Recentes"
    },
    {
      imgPerfil: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
      nomeContratante: "Joana Santos",
      comentario: "Estou planejando renovar meu jardim. Alguma sugestão de design ou plantas que estão em alta?",
      data: "Há 2 horas",
      tipo: "Pedidos"
    },
    {
      imgPerfil: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
      nomeContratante: "Mariana Almeida",
      comentario: "Oi, gostaria de agendar uma visita para avaliação do meu jardim. Quando você estaria disponível?",
      data: "Há 3 horas",
      tipo: "Pedidos"
    },
    {
      imgPerfil: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      nomeContratante: "Rodrigo Pereira",
      comentario: "Oi, estou impressionado com o último trabalho que você fez no meu jardim. Muito obrigado pelo excelente serviço!",
      data: "Há 4 horas",
      tipo: "Avaliações"
    }
  ]

  const filteredNotificacoes = notificacoesList.filter(n => n.tipo === activeTab)

  return (
    <div className="layoutDashboard">
      <div className="sidebarFixed">
        <BarraLateral />
      </div>
      
      <div className="conteudoNotificacao">
        <div className="headerNotificacoes">
          <h2>Notificações</h2>
          <div className="tabsNotificacoes">
            {tabs.map(tab => (
              <button 
                key={tab} 
                className={`tabBtn ${activeTab === tab ? 'activeTab' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="listaNotificacoes">
          {filteredNotificacoes.length > 0 ? (
            filteredNotificacoes.map((notif, index) => (
              <BoxNotificacao
                key={index}
                imgPerfil={notif.imgPerfil}
                nomeContratante={notif.nomeContratante}
                comentario={notif.comentario}
                data={notif.data}
              />
            ))
          ) : (
            <div className="emptyState">
              <p>Nenhuma notificação encontrada para "{activeTab}".</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Notificacoes