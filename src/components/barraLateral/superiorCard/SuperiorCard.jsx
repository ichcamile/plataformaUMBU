import './superiorCard.css'

function SuperiorCard({ fotoJar, nomeJar, cargo }) {
  return (
    <div className="cardJardineiro">
      <img src={fotoJar} alt={`Foto de ${nomeJar}`} />
      <h4>{nomeJar}</h4>
      <p className="cargoJardineiro">{cargo}</p>
    </div>
  )
}

export default SuperiorCard
