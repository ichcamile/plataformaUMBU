import { CiCreditCard1, CiBarcode } from "react-icons/ci"
import { FcOk } from "react-icons/fc"
import { FaPix } from "react-icons/fa6"
import { useNavigate } from "react-router-dom"
import "./pagamento.css"

function Pagamento() {
  const navigate = useNavigate()

  const handleFinalizar = (e) => {
    e.preventDefault()
    alert('Pagamento processado com sucesso!')
    navigate('/painelcontrole')
  }

  return (
    <div className="layoutPagamento">
      <div className="containerPagamento">
        <h1 className="tituloPagamento">Forma de Pagamento</h1>
        
        <form className="formPagamento" onSubmit={handleFinalizar}>
          <div className="colunaPagamentoEsquerda">
            <div className="opcoesPagamento">
              <label className="opcaoMetodo active">
                <input type="radio" name="metodo" value="cartao" defaultChecked />
                <div className="conteudoMetodo">
                  <CiCreditCard1 className="iconMetodo" />
                  <span>Cartão de Crédito/Débito</span>
                </div>
              </label>

              <label className="opcaoMetodo">
                <input type="radio" name="metodo" value="boleto" />
                <div className="conteudoMetodo">
                  <CiBarcode className="iconMetodo" />
                  <span>Boleto</span>
                </div>
              </label>

              <label className="opcaoMetodo">
                <input type="radio" name="metodo" value="pix" />
                <div className="conteudoMetodo">
                  <FaPix className="iconMetodo pixIcon" />
                  <span>Pix</span>
                </div>
              </label>
            </div>

            <div className="dadosCartao">
              <div className="inputGroup">
                <label htmlFor="numeroCartao">Número do cartão</label>
                <input type="text" id="numeroCartao" placeholder="0000 0000 0000 0000" required />
              </div>

              <div className="inputGroup">
                <label htmlFor="cpfTitular">CPF</label>
                <input type="text" id="cpfTitular" placeholder="000.000.000-00" required />
              </div>

              <div className="rowInputs">
                <div className="inputGroup halfWidth">
                  <label htmlFor="validade">Validade</label>
                  <input type="text" id="validade" placeholder="MM/AA" required />
                </div>

                <div className="inputGroup halfWidth">
                  <label htmlFor="cvv">CVV</label>
                  <input type="text" id="cvv" placeholder="123" required />
                </div>
              </div>

              <label className="salvarDados">
                <input type="checkbox" defaultChecked />
                <span className="checkboxCustomizado"><FcOk /></span>
                <span>Salvar dados para próximo serviço!</span>
              </label>
            </div>
          </div>

          <div className="colunaPagamentoDireita">
            <div className="resumoPedido">
              <h2>Resumo do Pedido</h2>
              
              <div className="cardPlano">
                <div className="planoHeader">
                  <span className="badgePlano">Mensal</span>
                  <h3>Jardine com Paixão</h3>
                </div>
                <p className="planoDescricao">
                  Seu Jardim, Sua Beleza, Sem Compromissos de Longo Prazo. Acesso completo a todas as ferramentas por um mês.
                </p>
                <div className="planoPreco">
                  <span className="moeda">R$</span>
                  <span className="valor">38,90</span>
                  <span className="periodo">/mês</span>
                </div>
              </div>

              <div className="detalhesCusto">
                <div className="linhaCusto">
                  <span>Plano Mensal</span>
                  <span>R$ 38,90</span>
                </div>
                <div className="linhaCusto">
                  <span>Taxas</span>
                  <span>R$ 0,00</span>
                </div>
                <div className="linhaCusto total">
                  <span>Total</span>
                  <span>R$ 38,90</span>
                </div>
              </div>

              <button type="submit" className="btnFinalizarPagamento">
                Finalizar Pagamento
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Pagamento
