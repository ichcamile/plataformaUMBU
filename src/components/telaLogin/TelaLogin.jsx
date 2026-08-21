import './telaLogin.css'
import { IoIosArrowBack } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa6'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate, Link } from 'react-router-dom'

export default function TelaLogin() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/painelcontrole')
  }

  return (
    <div className="containerLogin">
      <form className="formLogin" onSubmit={handleSubmit}>
        <div className="headerLogin">
          <Link to="/registro">
            <span><IoIosArrowBack /> Voltar</span>
          </Link>
        </div>

        <h2>Entre na sua conta!</h2>

        <div className="divisaoLogin">
          <label className="labelRegistro2">Email*</label>
          <input type="email" className="Inputs" placeholder="Email" required />
          <label className="labelRegistro2">Insira a sua senha</label>
          <input type="password" className="Inputs" placeholder="Senha" required />
        </div>

        <button type="submit" className="btnLogar">Entrar</button>

        <span className="ouDivisor">OU</span>

        <div className="responsividadeBotoes">
          <button type="button" className="Cadastro-Facebook">
            <FaFacebook />
            <span>Continuar com Facebook</span>
          </button>
          <button type="button" className="Cadastro-Google">
            <FcGoogle />
            <span>Continuar com Google</span>
          </button>
        </div>
      </form>
    </div>
  )
}