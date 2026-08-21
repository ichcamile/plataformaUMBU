import { IoPersonOutline } from "react-icons/io5"
import { LuShovel } from "react-icons/lu"
import { SlArrowRight } from "react-icons/sl"
import { Link } from "react-router-dom"
import './telaRegistro1.css'

export default function TelaRegistro1({ avancarRegistroContratante, avancarRegistro1 }) {
  return (
    <div className="ConteudoDireito">
      <div className="headerRegistro">
        <p>Já possui uma conta? <Link className="entrarBtn" to="/login">Entrar</Link></p>
      </div>

      <div className="container-conteudoDireito">
        <div className="tituloRegistro">
          <h3>Junte-se a nós!</h3>
          <p>Para começar esta jornada, diga-nos que tipo de conta<br />você estaria abrindo</p>
        </div>

        <button className="botaoCompletoRegistro" onClick={avancarRegistroContratante}>
          <span className="iconeTipoConta"><IoPersonOutline /></span>
          <div className="descricaoTextoRegistro">
            <h4>Contratante</h4>
            <p>Encontre os melhores profissionais para o seu jardim!</p>
          </div>
          <SlArrowRight className="arrowRegistro" />
        </button>

        <button className="botaoCompletoRegistro" onClick={avancarRegistro1}>
          <span className="iconeTipoConta"><LuShovel /></span>
          <div className="descricaoTextoRegistro">
            <h4>Jardineiro</h4>
            <p>Transforme um jardim!</p>
          </div>
          <SlArrowRight className="arrowRegistro" />
        </button>
      </div>
    </div>
  )
}