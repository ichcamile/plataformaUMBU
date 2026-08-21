;
import "../telaRegistro3/telaRegistroT3.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { Icon } from "@iconify/react";

function TelaRegistroT3() {
  return (
    <div>
      <div className="containerT3">
        <div className="headerT3">
          <div className="voltarT3">
            <span>
              <IoIosArrowBack />
            </span>
            <p>Voltar</p>
          </div>
          <div className="etapaT3">
            <p>Etapa 02/03</p>
            <p>
              <strong>Informações sobre residência</strong>
            </p>
          </div>
        </div>
        <div className="formT3">
          <div className="topoRegistroT3">
            <span>Complete seu perfil</span>
            <p id="textoP">
              Para fins de regulamentação do setor, seus dados são necessários.
            </p>
          </div>
          <label className="labelRegistroT3">Número</label>
          <div className="caixa-de-selecao">
            <div className="caixa-de-opcao">
              <div>
                <Icon icon="flag:br-4x3" />
                <span className="numero-codigo-pais">+55</span>
                {/* <div className="icone-down">
                  <Icon icon="teenyicons:down-solid" />
                </div> */}
              </div>
              <input
                type="tel"
                name="tel"
                placeholder="Número de Telefone"
                id="telefone"
              />
            </div>
            <div className="opcoes">
              {/* <input
                type="text"
                className="caixa-procurar"
                placeholder="Procurar nome país"
              />
              <ol>
                <li className="opcao-pais">
                  <div>
                    <Icon icon="flag:ar-4x3" />
                    <span className="nome-pais">Argentina</span>
                  </div>
                  <strong>+54</strong>
                </li>
              </ol> */}
            </div>
          </div>
          <label className="labelRegistroT3">Endereço</label>
          <input
            type="text"
            className="Inputs"
            placeholder="Digite o seu endereço"
          />
          <label className="labelRegistroT3">Cidade</label>
          <select className="Inputs" required>
            <option value="" disabled selected>
              Selecione
            </option>
            <option value="opcao1">Texto1</option>
          </select>
          <div className="botao-salvar">
            <button className="salvar-continuar">Salvar & Continuar</button>
          </div>
        </div>
        <div className="msgSeguranca">
          <span>
            <MdLockOutline />
          </span>
          <p>Suas informações estão protegidas com segurança</p>
        </div>
      </div>
    </div>
  );
}

export default TelaRegistroT3;
