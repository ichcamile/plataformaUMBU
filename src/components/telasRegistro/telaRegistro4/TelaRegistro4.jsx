import { useState } from "react"
import { FaRegCircleCheck, FaCircleCheck } from "react-icons/fa6"
import { CiLock } from "react-icons/ci"
import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import './telaRegistro4.css'

export default function TelaRegistro4() {
  const navigate = useNavigate()
  const [selectedSkills, setSelectedSkills] = useState([])

  const skillsList = [
    "Remoção de árvores",
    "Podas",
    "Manutenção",
    "Construção de Jardim",
    "Paisagismo",
    "Adubação",
    "Remoção de ervas orgânicas",
    "Plantio e Transplante",
    "Irrigação",
    "Adubação e Nutrição",
    "Manutenção de Gramados",
    "Instalação de Sistemas de Drenagem"
  ]

  const toggleSkill = (skill) => {
    setSelectedSkills(prev => 
      prev.includes(skill) 
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    )
  }

  const aoEnviar = (evento) => {
    evento.preventDefault()
    // Simulated API call since there's no real backend running
    console.log("Saving skills:", selectedSkills)
    console.log("Full data:", JSON.parse(localStorage.getItem("dataUser")))
    
    // Simulating success
    setTimeout(() => {
      alert('Usuário cadastrado com sucesso!')
      localStorage.clear()
      navigate('/painelcontrole')
    }, 1000)
  }

  return (
    <div className="telaRegistro4">
      <div className="headerRT4">
        <button className="btnVoltaRegistro" onClick={() => window.history.back()}>
          <IoIosArrowBack /> Voltar
        </button>
        <div className="etapaRegistro">
          <p>Etapa 03/03</p>
          <p>Habilidades</p>
        </div>
      </div>
      
      <div className="containerTelaRegistro4">
        <div className="completeRt4">
          <h3>Complete o seu perfil!</h3>
          <span>Agora, selecione as suas habilidades</span>
        </div>
        
        <p className="skillsSubtitle">Insira suas etiquetas</p>
        
        <div className="arvore-de-habilidadesRt4">
          {skillsList.map((skill, index) => {
            const isSelected = selectedSkills.includes(skill)
            return (
              <button 
                key={index}
                className={`skillBtn ${isSelected ? 'skillBtnSelected' : ''}`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
                {isSelected ? <FaCircleCheck className="checkIcon" /> : <FaRegCircleCheck />}
              </button>
            )
          })}
        </div>
        
        <div className="enviarHabilidades">
          <button className="btnSubmitSkills" onClick={aoEnviar}>
            Salvar & Continuar
          </button>
          <span><CiLock /> Suas informações estão protegidas com segurança</span>
        </div>
      </div>
    </div>
  )
}