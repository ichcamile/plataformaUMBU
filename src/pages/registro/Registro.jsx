import { useState } from 'react'
import LadoEsquerdoRegistro from '../../components/telasRegistro/swiperRegistro/SwiperRegistro.jsx'
import TelaRegistro1 from '../../components/telasRegistro/telaRegistro1/TelaRegistro1.jsx'
import TelaRegistro2 from '../../components/telasRegistro/telaRegistro2/TelaRegistroT2.jsx'
import TelaRegistro3 from '../../components/telasRegistro/telaRegistro3/TelaRegistro3.jsx'
import TelaRegistro4 from '../../components/telasRegistro/telaRegistro4/TelaRegistro4.jsx'
import TelaRegistroContratanteT2 from '../../components/telasRegistroContratante/telaRegistroContratante1/TelaRegistroContratanteT2.jsx'
import TelaRegistroContratante3 from '../../components/telasRegistroContratante/telaRegistroContratante2/TelaRegistroContratante3.jsx'

import './registro.css'

const STEPS = {
  telaRegistro1: 'telaRegistro1',
  telaRegistro2: 'telaRegistro2',
  telaRegistro3: 'telaRegistro3',
  telaRegistro4: 'telaRegistro4',
  telaRegistroContratanteT2: 'telaRegistroContratanteT2',
  telaRegistroContratante3: 'telaRegistroContratante3',
}

export default function Registro() {
  const [currentStep, setCurrentStep] = useState(STEPS.telaRegistro1)

  const renderStep = () => {
    switch (currentStep) {
      case STEPS.telaRegistro1:
        return (
          <TelaRegistro1
            avancarRegistroContratante={() => setCurrentStep(STEPS.telaRegistroContratanteT2)}
            avancarRegistro1={() => setCurrentStep(STEPS.telaRegistro2)}
          />
        )
      case STEPS.telaRegistro2:
        return <TelaRegistro2 avancarRegistro2={() => setCurrentStep(STEPS.telaRegistro3)} />
      case STEPS.telaRegistro3:
        return <TelaRegistro3 avancarRegistro3={() => setCurrentStep(STEPS.telaRegistro4)} />
      case STEPS.telaRegistro4:
        return <TelaRegistro4 />
      case STEPS.telaRegistroContratanteT2:
        return <TelaRegistroContratanteT2 avancarRegistroContratante={() => setCurrentStep(STEPS.telaRegistroContratante3)} />
      case STEPS.telaRegistroContratante3:
        return <TelaRegistroContratante3 />
      default:
        return <TelaRegistro1 avancarRegistroContratante={() => setCurrentStep(STEPS.telaRegistroContratanteT2)} avancarRegistro1={() => setCurrentStep(STEPS.telaRegistro2)} />
    }
  }

  return (
    <div className="conteudoRegistro1">
      <div className="registroCard">
        <LadoEsquerdoRegistro />
        {renderStep()}
      </div>
    </div>
  )
}