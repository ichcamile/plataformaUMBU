import LadoEsquerdoRegistro from '../../components/telasRegistro/swiperRegistro/SwiperRegistro'
import TelaLogin from '../../components/telaLogin/TelaLogin'
import './login.css'

export default function Login() {
  return (
    <div className="conteudoLogin">
      <div className="loginCard">
        <LadoEsquerdoRegistro />
        <TelaLogin />
      </div>
    </div>
  )
}
