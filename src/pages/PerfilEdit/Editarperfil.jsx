import BarraLateral from '../../components/barraLateral/BarraLateral'
import { SlArrowDown } from "react-icons/sl"
import { FcOk } from "react-icons/fc"
import { FaPenToSquare } from "react-icons/fa6"
import './perfil.css'

export default function EditarPerfil() {
  return (
    <div className="layoutDashboard">
      <div className="sidebarFixed">
        <BarraLateral />
      </div>

      <div className="conteudoEditarPerfil">
        <div className="cardEditarPerfil">
          <div className="headerEditarPerfil">
            <h2>Edite seu perfil</h2>
          </div>

          <form className="formEditarPerfil">
            <div className="colunaEsquerda">
              <div className="inputGroup">
                <label htmlFor="nome">Nome</label>
                <input type="text" id="nome" name="nome" placeholder="José Ferreira" />
              </div>

              <div className="inputGroup">
                <label htmlFor="email">Email</label>
                <div className="inputWithIcon">
                  <input type="email" id="email" name="email" placeholder="jose.ferreira@gmail.com" />
                  <span className="iconStatus"><FcOk /></span>
                </div>
              </div>

              <div className="inputGroup">
                <label htmlFor="endereco">Endereço</label>
                <input type="text" id="endereco" name="endereco" placeholder="Rua Tito 54, Vila Romana" />
              </div>

              <div className="rowInputs">
                <div className="inputGroup halfWidth">
                  <label htmlFor="cidade">Cidade</label>
                  <div className="inputWithIcon">
                    <input type="text" id="cidade" name="cidade" placeholder="São Paulo" />
                    <span className="iconSelect"><SlArrowDown /></span>
                  </div>
                </div>

                <div className="inputGroup halfWidth">
                  <label htmlFor="estado">Estado</label>
                  <div className="inputWithIcon">
                    <input type="text" id="estado" name="estado" placeholder="SP" />
                    <span className="iconSelect"><SlArrowDown /></span>
                  </div>
                </div>
              </div>

              <div className="inputGroup">
                <label htmlFor="senha">Senha</label>
                <div className="inputWithIcon">
                  <input type="password" id="senha" name="senha" placeholder="••••••••" />
                  <span className="iconStatus"><FcOk /></span>
                </div>
              </div>

              <div className="acoesFormulario">
                <button type="button" className="btnCancelar">Cancelar</button>
                <button type="submit" className="btnSalvar">Salvar</button>
              </div>
            </div>

            <div className="colunaDireita">
              <div className="fotoContainer">
                <img className="fotoPerfilEdit" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" alt="Foto de Perfil" />
                <button type="button" className="btnEditarFoto">
                  <FaPenToSquare />
                </button>
              </div>

              <div className="inputGroup">
                <label htmlFor="contato">Contato</label>
                <input type="tel" id="contato" name="contato" placeholder="(11) 98002-8922" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
