import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { FaFacebook } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"
import "../../telasRegistro/telaRegistro2/telaRegistroT2.css"

function TelaRegistroContratanteT2({ avancarRegistroContratante }) {
  const [usuario, setUsuario] = useState({
    email: '',
    senha: ''
  })

  const aoMudar = (evento) => {
    setUsuario({ ...usuario, [evento.target.name]: evento.target.value })
  }

  const handleNext = (e) => {
    e.preventDefault()
    avancarRegistroContratante()
  }

  return (
    <div className="containerT2">
      <form onSubmit={handleNext} className="formT2">
        <div className="headerT2">
          <button type="button" className="btnVoltaRegistro" onClick={() => window.history.back()}>
            <IoIosArrowBack /> Voltar
          </button>
          <div className="etapaRegistro">
            <p>Etapa 01/02</p>
            <p>Informações Pessoais</p>
          </div>
        </div>

        <div className="tituloFormRegistro">
          <h2>Registre uma conta!</h2>
          <h4>Comece a cultivar oportunidades de sucesso!</h4>
        </div>

        <div className="inputsContainer">
          <label className="labelRegistro2" htmlFor="email">Email*</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            value={usuario.email} 
            onChange={aoMudar} 
            className="inputRegistro" 
            placeholder="Seu melhor email"
            required
          />

          <label className="labelRegistro2" htmlFor="senha">Crie sua senha*</label>
          <input 
            type="password" 
            id="senha"
            name="senha" 
            value={usuario.senha} 
            onChange={aoMudar} 
            className="inputRegistro" 
            placeholder="Mínimo de 8 caracteres"
            required
          />
        </div>

        <div className="botoesRegistro">
          <div className="termos-de-uso">
            <input type="checkbox" name="Termos" id="termos" className="checkboxRegistro" required />
            <label htmlFor="termos">Eu concordo com os termos e condições</label>
          </div>
          
          <button type="submit" className="btnRegistroPrincipal">
            Continuar
          </button>
          
          <span className="ouDivisor">OU</span>
          
          <div className="responsividadeBotoesRegistro">
            <button type="button" className="btnFacebookRegistro">
              <FaFacebook /> 
              <span>Continuar com Facebook</span>
            </button>
            <button type="button" className="btnGoogleRegistro">
              <FcGoogle />
              <span>Continuar com Google</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default TelaRegistroContratanteT2
