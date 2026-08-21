import { useNavigate } from 'react-router-dom'

// Imagens da Página
import Capa from "../../assets/usadosElasPlantam/CapaElasPlantam.png"
import imagem1 from "../../assets/usadosElasPlantam/Imagem1.png"
import imagem2 from "../../assets/usadosElasPlantam/Imagem2.png"
import imagem3 from "../../assets/usadosElasPlantam/Imagem3.png"

// Componentes
import Footer from "../../components/footer/Footer"
import Header from '../../components/header/Header'

import "./Plantam.css"

function ElasPlantam() {
  const navigate = useNavigate()

  return (
    <>
      <Header />

      <div id="conteudoCompletoElas">
        <section className="heroElasPlantam">
          <img className="capaElasPlantam" src={Capa} alt="Mulheres na jardinagem" loading="lazy" />
          <div className="textoHeroElasPlantam">
            <h1 className="tituloHero">Elas Plantam</h1>
            <p className="subtituloHero">Celebrando as Mulheres que Plantam no Mundo</p>
          </div>
        </section>

        <main className="mainElasPlantam">
          <section className="secaoInicial">
            <p className="textoDestaque">
              Nosso compromisso é utilizar a tecnologia para impulsionar impactos positivos nas comunidades onde atuamos. 
              Por isso, desenvolvemos uma série de iniciativas voltadas para reconhecer e apoiar os profissionais de jardinagem 
              que escolhem fazer parte da nossa plataforma. Nosso objetivo é incentivar mais jardineiras a se juntarem a nós, 
              proporcionando uma nova oportunidade de renda e ajudando-as a conquistar seus objetivos pessoais e financeiros, 
              ao mesmo tempo em que assumem o controle de suas vidas profissionais.
            </p>
          </section>

          <section className="secaoChamada">
            <div className="conteudoChamada">
              <h2>Mulheres que podam o mundo</h2>
              <p>
                A nossa missão é ser uma aliada para um número crescente de mulheres no universo da jardinagem, auxiliando-as 
                a assumir o controle de suas vidas e oferecendo novas oportunidades de renda. Buscamos apoiar as mulheres na 
                conquista de seus objetivos, promovendo a autonomia tanto pessoal quanto financeira. Dessa forma, encorajamos 
                a participação ativa das mulheres em nossa plataforma, incentivando não apenas a integração delas, mas também 
                a indicação de outras mulheres que desejem explorar esse novo horizonte na jardinagem.
              </p>
              <button className="btnCadastreSe" onClick={() => navigate('/registro')}>
                CADASTRE-SE
              </button>
            </div>
          </section>

          <section className="secaoSeguranca">
            <div className="conteudoSeguranca">
              <h2>Segurança das Mulheres</h2>
              <p>
                Na UMBU, segurança é prioridade e nenhum tipo de assédio ou violência é tolerado. 
                Para contribuir com a solução de questões complexas como essa, nos unimos a organizações especialistas 
                no assunto e trabalhamos em projetos dentro e fora da plataforma.
              </p>
            </div>
          </section>

          <section className="gridInfo">
            <div className="infoRow">
              <div className="infoImage">
                <img src={imagem1} alt="Mulher trabalhando com plantas" loading="lazy" />
              </div>
              <div className="infoText">
                <p>
                  Nosso compromisso com as mulheres no mundo da jardinagem busca atender às necessidades específicas da jardineira. 
                  Buscamos, assim, traçar uma jornada única de fortalecimento de suas raízes, oferecendo oportunidades significativas 
                  e transformadoras.
                </p>
              </div>
            </div>

            <div className="infoRow reverseRow">
              <div className="infoImage">
                <img src={imagem2} alt="Comunidade de mulheres" loading="lazy" />
              </div>
              <div className="infoText">
                <p>
                  Importância de uma rede sólida de apoio. Estamos empenhados em criar uma comunidade onde mulheres na jardinagem 
                  possam se conectar, colaborar e compartilhar conhecimentos. Facilitamos o contato com os clientes para encontrar 
                  a oportunidade de trabalho.
                </p>
              </div>
            </div>

            <div className="infoRow">
              <div className="infoImage">
                <img src={imagem3} alt="Benefícios para mulheres" loading="lazy" />
              </div>
              <div className="infoText">
                <p>
                  Para facilitar a entrada de mais mulheres em nossa plataforma, oferecemos um incentivo exclusivo: os três primeiros 
                  meses são gratuitos para novas jardineiras que se cadastrarem. Essa iniciativa visa reduzir as barreiras financeiras 
                  iniciais e proporcionar um período de adaptação sem custos, permitindo que as mulheres explorem o potencial da plataforma 
                  com tranquilidade.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  )
}

export default ElasPlantam
