import { useNavigate } from 'react-router-dom'
import BarraLateral from '../../components/barraLateral/BarraLateral'
import geranio from '../../assets/flores/Geranio.svg'
import './testeCompetencia.css'

function TesteCompetencia() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Teste finalizado com sucesso!')
    navigate('/painelcontrole') // or wherever it should go
  }

  const questoes = [
    {
      id: 1,
      pergunta: "1- Em relação a adubação, é INCORRETO afirmar que:",
      opcoes: [
        { valor: "A", texto: "A adubação da horta é necessária para prover o solo de nutrientes indispensáveis..." },
        { valor: "B", texto: "A adubação de plantio deve ser feita antes do plantio propriamente dito..." },
        { valor: "C", texto: "É indispensável à olericultura, a adubação de cobertura..." },
        { valor: "D", texto: "A adubação pode ser feita manualmente, quando se tratar de grandes áreas..." },
        { valor: "E", texto: "Os adubos orgânicos servem, principalmente, para melhorar as condições físicas do solo..." }
      ]
    },
    {
      id: 2,
      pergunta: "2- Qual destas plantas é conhecida por ser uma excelente opção para locais com pouca luz?",
      opcoes: [
        { valor: "A", texto: "Rosa do Deserto" },
        { valor: "B", texto: "Zamioculca" },
        { valor: "C", texto: "Cacto" },
        { valor: "D", texto: "Orquídea" }
      ]
    },
    {
      id: 3,
      pergunta: "3- Qual destas ferramentas é mais apropriada para cavar buracos para o plantio de mudas?",
      opcoes: [
        { valor: "A", texto: "Ancinho" },
        { valor: "B", texto: "Enxada" },
        { valor: "C", texto: "Pá (Vanga)" },
        { valor: "D", texto: "Tesoura de poda" }
      ]
    },
    {
      id: 4,
      pergunta: "4- Identifique a planta na imagem abaixo.",
      imagem: geranio,
      opcoes: [
        { valor: "A", texto: "Lírio" },
        { valor: "B", texto: "Violeta" },
        { valor: "C", texto: "Gerânio" },
        { valor: "D", texto: "Hortênsia" }
      ]
    },
    {
      id: 5,
      pergunta: "5- Qual é o método mais eficaz para controlar pragas em plantas sem o uso de produtos químicos?",
      opcoes: [
        { valor: "A", texto: "Rotação de culturas" },
        { valor: "B", texto: "Pulverização de pesticidas" },
        { valor: "C", texto: "Fertilização intensiva" },
        { valor: "D", texto: "Mantendo um microclima saudável entre plantas e solo" }
      ]
    },
    {
      id: 6,
      pergunta: "6- Como você identificaria a presença de deficiência de micronutrientes em uma planta?",
      opcoes: [
        { valor: "A", texto: "Análise cor e textura" },
        { valor: "B", texto: "Medição da altura da planta" },
        { valor: "C", texto: "Observação das flores" },
        { valor: "D", texto: "Avaliação do sabor dos frutos" }
      ]
    },
    {
      id: 7,
      pergunta: "7- Qual é a melhor maneira de regar plantas em um jardim?",
      opcoes: [
        { valor: "A", texto: "Regar aleatoriamente." },
        { valor: "B", texto: "Regar no início da manhã ou no final da tarde." },
        { valor: "C", texto: "Regar apenas quando as plantas começarem a murchar." }
      ]
    },
    {
      id: 8,
      pergunta: "8- Como você deve lidar com ervas daninhas em um jardim?",
      opcoes: [
        { valor: "A", texto: "Deixá-las crescer, pois algumas são bonitas." },
        { valor: "B", texto: "Arrancar as ervas daninhas manualmente ou usar mulch para evitar seu crescimento." },
        { valor: "C", texto: "Usar produtos químicos fortes para garantir a erradicação completa." }
      ]
    },
    {
      id: 9,
      pergunta: "9- Qual é a importância da rotação de culturas em um jardim? (Parte 1)",
      opcoes: [
        { valor: "A", texto: "Não é importante, as plantas sempre se adaptam." },
        { valor: "B", texto: "Usar produtos químicos fortes para garantir a erradicação completa." },
        { valor: "C", texto: "Ajuda a evitar a exaustão do solo e a prevenir o acúmulo de pragas específicas." }
      ]
    },
    {
      id: 10,
      pergunta: "10- Qual é a importância da rotação de culturas em um jardim? (Parte 2)",
      opcoes: [
        { valor: "A", texto: "Apenas a estética, escolher as plantas mais bonitas." },
        { valor: "B", texto: "A preferência pessoal, independentemente das condições de crescimento." },
        { valor: "C", texto: "As condições climáticas e do solo para garantir que as plantas escolhidas prosperem." }
      ]
    },
    {
      id: 11,
      pergunta: "11- Como evitar o desperdício de água no jardim?",
      opcoes: [
        { valor: "A", texto: "Utilizar sistemas de irrigação eficientes e coletar água da chuva." },
        { valor: "B", texto: "Regar o jardim todos os dias para garantir que as plantas recebam água suficiente." },
        { valor: "C", texto: "Ignorar o uso consciente da água, já que é um recurso ilimitado." }
      ]
    }
  ]

  return (
    <div className="layoutDashboard">
      <div className="sidebarFixed">
        <BarraLateral />
      </div>

      <div className="conteudoTeste">
        <div className="headerTeste">
          <h2>Teste de Competência</h2>
          <p>Responda às questões abaixo para avaliar seus conhecimentos em jardinagem.</p>
        </div>

        <form className="formTeste" onSubmit={handleSubmit}>
          {questoes.map((q) => (
            <div key={q.id} className="questaoContainer">
              <h3 className="tituloQuestao">{q.pergunta}</h3>
              
              <div className="opcoesQuestao">
                {q.opcoes.map((opcao) => (
                  <label key={opcao.valor} className="boxOpcao">
                    <input 
                      type="radio" 
                      name={`questao${q.id}`} 
                      value={opcao.valor} 
                      className="radioInput" 
                      required
                    />
                    <span className="textoOpcao">
                      <strong>{opcao.valor})</strong> {opcao.texto}
                    </span>
                  </label>
                ))}
              </div>

              {q.imagem && (
                <div className="imagemQuestao">
                  <img src={q.imagem} alt={`Imagem da questão ${q.id}`} />
                </div>
              )}
            </div>
          ))}

          <div className="acaoTeste">
            <button type="submit" className="btnFinalizarTeste">
              Finalizar Teste
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TesteCompetencia