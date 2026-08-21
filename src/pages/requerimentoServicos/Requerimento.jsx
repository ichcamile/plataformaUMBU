import { useState } from "react"
import { useNavigate } from "react-router-dom"
import BarraLateral from "../../components/barraLateral/BarraLateral"
import './requerimento.css'
import '../../components/requerimento-servicos/requerimentoServicos.css'

export default function Requerimento() {
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    servico: "",
    tamanho: "",
    local: "",
    paisagismo: "",
    prazo: "",
    cep: "",
    endereco: "",
    cidade: "",
    estado: "",
    descricao: "",
    observacao: ""
  })

  const handleNext = (e) => {
    e.preventDefault()
    if (step < 7) {
      setStep(step + 1)
    } else {
      alert("Requerimento de serviço enviado com sucesso!")
      navigate("/painelcontrole")
    }
  }

  const handlePrev = (e) => {
    e.preventDefault()
    if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <div className="layoutDashboard">
      <div className="sidebarFixed">
        <BarraLateral />
      </div>

      <div className="conteudoRequerimento">
        <div className="cardRequerimento">
          <div className="headerRequerimento">
            <h2>Requerimento de Serviço</h2>
            <div className="progressRequerimento">
              <span>Etapa {step} de 7</span>
              <div className="progressBar">
                <div className="progressFill" style={{ width: `${(step / 7) * 100}%` }}></div>
              </div>
            </div>
          </div>

          <form className="formRequerimento" onSubmit={handleNext}>
            {step === 1 && (
              <div className="stepContainer">
                <label className="perguntaPrincipal">Qual serviço você procura?</label>
                <select name="servico" value={formData.servico} onChange={handleChange} required className="inputPadrao">
                  <option value="" disabled>Selecione um serviço</option>
                  <option value="manutencao">Manutenção</option>
                  <option value="poda">Poda</option>
                  <option value="fertilizacao">Fertilização</option>
                  <option value="ControleDePragas">Controle de pragas</option>
                  <option value="Grama">Grama</option>
                  <option value="jardimDeInverno">Jardim de inverno</option>
                  <option value="sistemaIrrigacao">Sistema de irrigação</option>
                </select>
              </div>
            )}

            {step === 2 && (
              <div className="stepContainer">
                <label className="perguntaPrincipal">Qual é o tamanho do jardim?</label>
                <div className="opcoesRadio">
                  {['Pequeno (até 50m²)', 'Médio (50m² a 100m²)', 'Grande (100m² a 200m²)', 'Muito grande (200m² ou mais)'].map(opcao => (
                    <label key={opcao} className="opcaoCard">
                      <input type="radio" name="tamanho" value={opcao} checked={formData.tamanho === opcao} onChange={handleChange} required />
                      <span>{opcao}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="stepContainer">
                <label className="perguntaPrincipal">Qual é o local do serviço?</label>
                <div className="opcoesRadio">
                  {['Casa', 'Comércio/escritório', 'Condomínio/prédio', 'Outro'].map(opcao => (
                    <label key={opcao} className="opcaoCard">
                      <input type="radio" name="local" value={opcao} checked={formData.local === opcao} onChange={handleChange} required />
                      <span>{opcao}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="stepContainer">
                <label className="perguntaPrincipal">É um projeto de paisagismo?</label>
                <div className="opcoesRadio">
                  {['Sim', 'Não'].map(opcao => (
                    <label key={opcao} className="opcaoCard">
                      <input type="radio" name="paisagismo" value={opcao} checked={formData.paisagismo === opcao} onChange={handleChange} required />
                      <span>{opcao}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div className="stepContainer">
                <label className="perguntaPrincipal">Quando você pretende realizar o serviço?</label>
                <div className="opcoesRadio">
                  {['Urgente (o quanto antes possível)', 'Nos próximos 7 dias', 'Nos próximos 15 dias', 'Nos próximos 30 dias'].map(opcao => (
                    <label key={opcao} className="opcaoCard">
                      <input type="radio" name="prazo" value={opcao} checked={formData.prazo === opcao} onChange={handleChange} required />
                      <span>{opcao}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {step === 6 && (
              <div className="stepContainer">
                <label className="perguntaPrincipal">Endereço do serviço</label>
                <div className="gridInputs">
                  <div className="inputGroup fullWidth">
                    <label>CEP</label>
                    <input type="text" name="cep" value={formData.cep} onChange={handleChange} placeholder="00000-000" required className="inputPadrao" />
                  </div>
                  <div className="inputGroup fullWidth">
                    <label>Endereço</label>
                    <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} placeholder="Rua, Número, Bairro" required className="inputPadrao" />
                  </div>
                  <div className="inputGroup">
                    <label>Cidade</label>
                    <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} placeholder="Ex: São Paulo" required className="inputPadrao" />
                  </div>
                  <div className="inputGroup">
                    <label>Estado</label>
                    <select name="estado" value={formData.estado} onChange={handleChange} required className="inputPadrao">
                      <option value="" disabled>Selecione</option>
                      <option value="SP">São Paulo</option>
                      <option value="RJ">Rio de Janeiro</option>
                      <option value="MG">Minas Gerais</option>
                      <option value="BA">Bahia</option>
                      <option value="PR">Paraná</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {step === 7 && (
              <div className="stepContainer">
                <label className="perguntaPrincipal">Observações do serviço</label>
                <div className="gridInputs">
                  <div className="inputGroup fullWidth">
                    <label>Descrição do serviço</label>
                    <textarea name="descricao" value={formData.descricao} onChange={handleChange} rows="4" placeholder="Descreva o que precisa ser feito..." required className="inputPadrao"></textarea>
                  </div>
                  <div className="inputGroup fullWidth">
                    <label>Observações/Comentários extras</label>
                    <textarea name="observacao" value={formData.observacao} onChange={handleChange} rows="3" placeholder="Restrições de horário, cuidados com pets, etc." className="inputPadrao"></textarea>
                  </div>
                </div>
              </div>
            )}

            <div className="acoesRequerimento">
              {step > 1 && (
                <button type="button" className="btnVoltar" onClick={handlePrev}>
                  Voltar
                </button>
              )}
              <button type="submit" className="btnAvancar">
                {step === 7 ? 'Finalizar' : 'Avançar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}