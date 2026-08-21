import UMChat from "../../components/umchat/UMChat.jsx"
import BarraLateral from "../../components/barraLateral/BarraLateral.jsx"

export default function ChatPage() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--neutral-50)' }}>
      {/* BarraLateral on the left */}
      <div style={{ position: 'fixed', zIndex: 'var(--z-sticky)' }}>
        <BarraLateral />
      </div>

      {/* Main chat layout */}
      <main style={{ flex: 1, marginLeft: '260px', display: 'flex', overflow: 'hidden' }}>
        <UMChat />
      </main>
    </div>
  )
}
