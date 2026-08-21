import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import './Faleconosco.css'

function Faleconosco() {
  const [state, handleSubmit] = useForm('xbjverjr')

  if (state.succeeded) {
    return (
      <div className="divFuncional">
        <Header />
        <div className="divFaleconosco">
          <div className="bodyFaleconosco">
            <div className="successMessage">
              <div className="successIcon">✓</div>
              <h2>Mensagem Enviada!</h2>
              <p>Obrigado por entrar em contato! Em breve retornaremos sua mensagem.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="divFuncional">
      <Header />
      <div className="divFaleconosco">
        <div className="bodyFaleconosco">
          <div className="lateralEsquerdaFale">
            <h1 className="faleconosco-title">Fale conosco</h1>
            <h2 className="faleconosco-subtitle">Deixe sua mensagem</h2>
            <p className="faleconosco-text">
              Preencha o formulário abaixo e entraremos em contato o mais breve possível.
            </p>
            <form className="faleconosco-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Insira seu email:</label>
              <input
                id="email"
                type="email"
                name="email"
                className="faleconosco-input"
                placeholder="seu@email.com"
                required
              />
              <ValidationError prefix="Email" field="email" errors={state.errors} />

              <label htmlFor="message">Deixe sua mensagem:</label>
              <textarea
                id="message"
                name="message"
                className="faleconosco-textarea"
                placeholder="Escreva sua mensagem aqui..."
                required
              />
              <ValidationError prefix="Message" field="message" errors={state.errors} />

              <button type="submit" disabled={state.submitting} className="faleconosco-button">
                {state.submitting ? 'Enviando...' : 'Enviar'}
              </button>
            </form>
          </div>
        </div>
        <div className="ladoDireitoFaleconosco" />
      </div>
      <Footer />
    </div>
  )
}

export default Faleconosco
