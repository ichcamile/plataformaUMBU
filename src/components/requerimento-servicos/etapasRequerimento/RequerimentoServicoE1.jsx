;

export default function RequerimentoServicoE1(props) {

    return (
        <form className='formServico1'>
            <label>Qual serviço você procura?</label>
            <select type='option' className='opServicos1' required>
                <option value='' disabled selected>Selecione</option>
                <option value='manutencao'>Manutenção</option>
                <option value='poda'>Poda</option>
                <option value='fertilizacao'>Fertilização</option>
                <option value='ControleDePragas'>Controle de pragas</option>
                <option value='Grama'>Grama</option>
                <option value='jardimDeInverno'>Jardim de inverno</option>
                <option value='sistemaIrrigacao'>Sistema de irrigação</option>
            </select>
            <div className="bntAvancarEspaco">
                <button className='btnAvancarRequerimento' onClick={props.avancarReq}>Avançar</button>
            </div>
        </form>
    )
}