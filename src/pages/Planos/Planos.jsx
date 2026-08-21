import { useNavigate } from 'react-router-dom'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './plano.css'

function Planos() {
  const navigate = useNavigate()

  const plans = [
    {
      name: 'Mensal',
      desc: 'Jardine com Paixão Mês a Mês: Seu Jardim, Sua Beleza, Sem Compromissos de Longo Prazo.',
      price: 'R$38,90',
      period: '/mês',
      recommended: false,
    },
    {
      name: 'Semestral',
      desc: 'Florindo a Longo Prazo: Economize com Nosso Plano Semestral e Desfrute de Seu Jardim.',
      price: 'R$224,90',
      period: '/semestral',
      recommended: true,
    },
    {
      name: 'Anual',
      desc: 'Jardim em Flor o Ano Inteiro: Maximize suas Economias com Nosso Plano Anual Exclusivo.',
      price: 'R$398,90',
      period: '/anual',
      recommended: false,
    },
  ]

  return (
    <div>
      <Header />
      <div className="planosUmbu">
        <div className="testeGratis">
          <h2>TESTE NOSSA PLATAFORMA</h2>
          <h2>POR <span className="planosTextColor">2 MESES GRATUITOS</span></h2>
        </div>

        <div className="umbuPremium">
          <h3>Planos UMBU <span className="planosTextColor2">Premium</span></h3>
          <p>Após o período de teste, escolha o plano que melhor se adapte a você e colha os frutos de uma experiência premium.</p>
        </div>

        <div className="cardsPlanos">
          {plans.map((plan, i) => (
            <div key={i} className={`planCard ${plan.recommended ? 'planCardRecommended' : ''}`}>
              {plan.recommended && <span className="planoRecomendado">recomendado</span>}
              <h3>{plan.name}</h3>
              <p className="planDesc">{plan.desc}</p>
              <div className="planPrice">
                <span className="priceValue">{plan.price}</span>
                <span className="pricePeriod">{plan.period}</span>
              </div>
              <button className="planButton" onClick={() => navigate('/registro')}>
                Assinar
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Planos