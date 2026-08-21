import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Loading component
function LoadingFallback() {
  return (
    <div className="loading-container">
      <div className="loading-spinner" />
      <span className="loading-text">Carregando...</span>
    </div>
  )
}

// Lazy-loaded pages
const LandingPage = lazy(() => import('./pages/landingPage/LandingPage'))
const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'))
const Escalabilidade = lazy(() => import('./pages/Escalabilidade/Escalabilidade'))
const IdentidadeVisual = lazy(() => import('./pages/IdentidadeVisual/IdentidadeVisualTela'))
const Login = lazy(() => import('./pages/login/Login'))
const Notificacoes = lazy(() => import('./pages/Notificacoes/Notificacoes'))
const Perfil = lazy(() => import('./pages/perfil/Perfil'))
const ChatPage = lazy(() => import('./pages/umchat/ChatPage'))
const BlogPage = lazy(() => import('./pages/umblog/BlogPage'))
const Registro = lazy(() => import('./pages/registro/Registro'))
const ElasPlantam = lazy(() => import('./pages/ElasPlantam/ElasPlantam'))
const Editarperfil = lazy(() => import('./pages/PerfilEdit/Editarperfil'))
const TesteCompetencia = lazy(() => import('./pages/testeCompetencia/TesteCompetencia'))
const Publi = lazy(() => import('./pages/Publicacao/Publicacao'))
const Faleconosco = lazy(() => import('./pages/faleconosco/Faleconosco'))
const Requerimento = lazy(() => import('./pages/requerimentoServicos/Requerimento'))
const SobreNos = lazy(() => import('./pages/SobreNos/Sobrenos'))
const Planos = lazy(() => import('./pages/Planos/Planos'))

// 404 Page
function NotFound() {
  return (
    <div className="loading-container" style={{ gap: '1rem' }}>
      <h1 style={{ fontSize: '5rem', color: 'var(--umbu-green-300)', fontWeight: 800 }}>404</h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--neutral-600)' }}>Página não encontrada</p>
      <a href="/" className="btn-primary" style={{ marginTop: '1rem' }}>
        Voltar ao Início
      </a>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/painelcontrole" element={<Dashboard />} />
          <Route path="/escalabilidade" element={<Escalabilidade />} />
          <Route path="/identidade" element={<IdentidadeVisual />} />
          <Route path="/login" element={<Login />} />
          <Route path="/notificacoes" element={<Notificacoes />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/umblog" element={<BlogPage />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/elasplantam" element={<ElasPlantam />} />
          <Route path="/editar" element={<Editarperfil />} />
          <Route path="/testeConhecimento" element={<TesteCompetencia />} />
          <Route path="/publicar" element={<Publi />} />
          <Route path="/faleconosco" element={<Faleconosco />} />
          <Route path="/editarperfil" element={<Editarperfil />} />
          <Route path="/requerimento" element={<Requerimento />} />
          <Route path="/sobrenos" element={<SobreNos />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
