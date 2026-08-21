import "./identidade.css"
import folhaDireita from "../../assets/usadosIdentidade/folhaDireita.png"
import folhaEsquerda from "../../assets/usadosIdentidade/folhaEsquerda.png"
import ItensSomados from "../../assets/usadosIdentidade/ItensSomados.png"
import logoCentral from "../../assets/usadosIdentidade/logoCentral.png"
import logoUmbu from "../../assets/usadosIdentidade/LogoUMBU.png"
import Aplicacao from "../../assets/usadosIdentidade/AplicacaoVisual.jpg"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { RiPlantFill } from "react-icons/ri"

function IdentidadeVisualTela() {
  return (
    <div className="pageIdentidade">
      <Header />
      
      <main className="componenteIdentidade">
        <section className="secaoLogoPrincipal">
          <div className="tituloIdentidade">
            <h1 className="titleV">Nossa Identidade Visual</h1>
          </div>

          <div className="fundoLogo">
            <div className="logoUmbuComposicao">
              <div className="imgLateral">
                <img src={folhaEsquerda} alt="Folha Esquerda" loading="lazy" />
              </div>
              <div className="imgLogoCentral">
                <img src={logoCentral} alt="Logo Umbu" loading="lazy" />
              </div>
              <div className="imgLateral">
                <img src={folhaDireita} alt="Folha Direita" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="paletaDeCores">
          <div className="headerSecao">
            <h2 className="tituloP">Paleta de Cores</h2>
            <p className="subP">Matizes representativos da marca</p>
          </div>
          
          <div className="folhagens">
            <div className="corHex" id="corPrimaria">
              <span className="folhagemItem"><RiPlantFill /></span>
              <p>#00572E</p>
            </div>
            <div className="corHex" id="corSecundaria">
              <span className="folhagemItem"><RiPlantFill /></span>
              <p>#006845</p>
            </div>
            <div className="corHex" id="corTercearia">
              <span className="folhagemItem"><RiPlantFill /></span>
              <p>#2E7F60</p>
            </div>
            <div className="corHex" id="corQuarta">
              <span className="folhagemItem"><RiPlantFill /></span>
              <p>#51C601</p>
            </div>
          </div>
        </section>

        <section className="secaoTipografia">
          <div className="headerSecao">
            <h2 className="titutoF">Fontes Utilizadas</h2>
            <p className="subF">Formas de fonte para comunicar a mensagem</p>
          </div>

          <div className="fontesGrid">
            <div className="colunaCantora">
              <div className="amostraFonte">
                <h3 className="tituloFonte cantoraBold">CANTORA ONE BOLD</h3>
                <p className="alfabeto cantoraBold">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 ! @#$%^&*()</p>
              </div>

              <div className="amostraFonte">
                <h3 className="tituloFonte cantora">CANTORA ONE</h3>
                <p className="alfabeto cantora">ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 ! @#$%^&*()</p>
              </div>

              <div className="amostraFonte">
                <h3 className="tituloFonte cantora">GUIA DE FONTE</h3>
                <p className="alfabeto cantora">Combinação e dimensionamento adequados</p>
              </div>
            </div>

            <div className="colunaMontserrat">
              <h3 className="tituloFonte montserrat">Montserrat</h3>
              <h4 className="subtituloFonte montserrat">SUBTÍTULO</h4>
              <p className="paragrafoFonte montserrat">
                UMBU Cria: Nossa Jornada Além do Verde - Acreditamos que os jardins são mais do que apenas espaços verdes; são promotores de qualidade de vida e bem-estar. Comprometidos com a responsabilidade social e ambiental, destinamos parte do nosso faturamento para projetos inovadores de criação e revitalização de áreas verdes em comunidades carentes.
              </p>
            </div>
          </div>
        </section>

        <section className="desenvolvimentoLogo">
          <div className="headerSecao">
            <h2 className="tituloD">Desenvolvimento da Logo</h2>
            <p className="subD">Comunicando a natureza e a paixão pela jardinagem</p>
          </div>

          <div className="imgFormandoLogo">
            <img className="logoI" src={ItensSomados} alt="Ícones que formam a logo da umbu" loading="lazy" />
            <img className="logoU" src={logoUmbu} alt="Logo final da umbu" loading="lazy" />
          </div>
        </section>

        <section className="aplicacaoElementoVisual">
          <div className="headerSecao">
            <h2 className="titulos">APLICAÇÕES DE ELEMENTO VISUAL</h2>
            <p className="subTitulo">Aplicações práticas da marca</p>
          </div>
          
          <div className="containerImagemAplicacao">
            <img className="finalPagina" src={Aplicacao} alt="Aplicação elemento visual" loading="lazy" />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default IdentidadeVisualTela
