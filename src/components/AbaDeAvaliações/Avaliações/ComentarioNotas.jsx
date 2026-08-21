import '../AbaDeAvaliacoes.css'

function ComentarioNotas({ imgPerfil, nomeContratante, nota1, nota2, nota3, nota4, nota5, data, comentario }) {
  return (
    <div className="avaliacao">
      <img className="imgPerfilPerfil" src={imgPerfil} alt={`Foto de ${nomeContratante}`} />
      <div className="box">
        <div className="nomeContratante">
          {nomeContratante}
        </div>
        <div className="notaData">
          <span className="estrelas">
            {nota1}{nota2}{nota3}{nota4}{nota5}
          </span>
          <span className="data">{data}</span>
        </div>
        <div className="comentario">
          {comentario}
        </div>
      </div>
    </div>
  )
}

export default ComentarioNotas