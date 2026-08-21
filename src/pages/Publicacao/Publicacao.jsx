import BarraLateral from '../../components/barraLateral/BarraLateral'
import { MdAddPhotoAlternate } from "react-icons/md"
import { SlScreenSmartphone } from "react-icons/sl"
import './publicacao.css'

function Publicacao() {
  return (
    <div className="layoutDashboard">
      <div className="sidebarFixed">
        <BarraLateral />
      </div>

      <div className="conteudoPublicacao">
        <div className="publicacaoContainer">
          <div className="headerPublicacao">
            <h2 className="tituloPublicacao">Criar publicação</h2>
          </div>

          <div className="uploadArea">
            <div className="iconUpload">
              <MdAddPhotoAlternate />
            </div>
            
            <div className="textoUpload">
              <span className="textoDestaqueUpload">Adicionar fotos</span>
              <span className="textoSecundarioUpload">ou arraste e solte</span>
            </div>
          </div>

          <div className="footerPublicacao">
            <div className="dicaMobile">
              <SlScreenSmartphone className="iconMobile" />
              <p>Adicione fotos diretamente do seu dispositivo móvel para facilitar o processo.</p>
            </div>
            
            <button className="btnPublicar" onClick={() => alert('Galeria aberta!')}>
              Selecionar Arquivos
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publicacao