import "../CodePortfolio/Portfolio.css"

function Fotos({ foto }) {
  return (
    <img src={foto} alt="Trabalho do portfólio" loading="lazy" />
  )
}

export default Fotos