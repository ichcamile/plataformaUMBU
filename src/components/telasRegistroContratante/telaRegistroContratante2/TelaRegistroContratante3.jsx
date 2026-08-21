import { useState } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { MdLockOutline } from "react-icons/md"
import { useNavigate } from "react-router-dom"
import "../../telasRegistro/telaRegistro3/telaRegistro3.css"

export default function TelaRegistroContratante3() {
  const navigate = useNavigate()
  const [dataUser, setDataUser] = useState({
    telefone: '',
    endereco: '',
    cidade: ''
  })

  const setUpdateAndress = (evento) => {
    setDataUser({ ...dataUser, [evento.target.name]: evento.target.value })
  }

  const handleNext = (e) => {
    e.preventDefault()
    alert('Cadastro concluído com sucesso!')
    navigate('/painelcontrole')
  }

  const cidades = [
    "São Paulo", "Rio de Janeiro", "Brasília", "Fortaleza", 
    "Salvador", "Belo Horizonte", "Manaus", "Curitiba", 
    "Recife", "Goiânia", "Porto Alegre", "Belém", 
    "Guarulhos", "Campinas", "São Luís", "Maceió", 
    "Campo Grande", "São Gonçalo", "Teresina", "João Pessoa"
  ]

  return (
    <div className="containerT3">
      <form onSubmit={handleNext} className="formT3">
        <div className="headerT3">
          <button type="button" className="btnVoltaRegistro" onClick={() => window.history.back()}>
            <IoIosArrowBack /> Voltar
          </button>
          <div className="etapaRegistro">
            <p>Etapa 02/02</p>
            <p>Informações Pessoais</p>
          </div>
        </div>

        <div className="topoRegistroT3">
          <h3>Complete seu perfil</h3>
          <p>Para fins de regulamentação do setor, seus dados são necessários.</p>
        </div>

        <div className="inputsContainerT3">
          <label className="labelRegistroT3" htmlFor="telefone">Número de Telefone</label>
          <input 
            type="tel" 
            name="telefone" 
            id="telefone" 
            placeholder="(00) 00000-0000" 
            className="inputRegistroT3"  
            value={dataUser.telefone} 
            onChange={setUpdateAndress}
            required  
          />

          <label className="labelRegistroT3" htmlFor="endereco">Endereço Completo</label>
          <input 
            type="text"  
            name="endereco" 
            id="endereco"
            placeholder="Rua, Número, Bairro" 
            className="inputRegistroT3" 
            value={dataUser.endereco} 
            onChange={setUpdateAndress}
            required 
          />

          <label className="labelRegistroT3" htmlFor="cidade">Cidade</label>
          <select 
            name="cidade"
            id="cidade"
            className="inputRegistroT3" 
            value={dataUser.cidade}
            onChange={setUpdateAndress}
            required
          >
            <option value="" disabled>Selecione sua cidade</option>
            {cidades.map((cidade, i) => (
              <option key={i} value={cidade}>{cidade}</option>
            ))}
          </select>
        </div>

        <div className="botao-salvar">
          <button type="submit" className="btnRegistroPrincipal">
            Salvar & Continuar
          </button>
          <span className="msgSeguranca">
            <MdLockOutline /> Suas informações estão protegidas com segurança
          </span>
        </div>
      </form>
    </div>
  )
}
