import ComentarioNotas from './Avaliações/ComentarioNotas'
import { FaStar } from "react-icons/fa"
import './AbaDeAvaliacoes.css'

function AbaDeAvaliacoes() {
  const avaliacoes = [
    {
      imgPerfil: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
      nome: "Cristiana Ronalda",
      comentario: "Uma característica que me impressionou foi o comprometimento do jardineiro com práticas ambientalmente sustentáveis. Ele sugeriu métodos ecológicos de cuidado com as plantas, evitando o uso excessivo de produtos químicos.",
      data: "23/11/2023 - 11h52"
    },
    {
      imgPerfil: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
      nome: "Ronaldo Nazario",
      comentario: "A transparência nos preços é algo que aprecio. O jardineiro forneceu um orçamento claro desde o início, sem surpresas desagradáveis no final. O custo do serviço foi justo, considerando a qualidade do trabalho entregue.",
      data: "22/08/2023 - 18h30"
    },
    {
      imgPerfil: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&q=80",
      nome: "Gabriel Santana",
      comentario: "Este jardineiro foi incrivelmente eficiente. Ele concluiu o trabalho dentro do prazo estipulado, sem comprometer a qualidade do serviço. Cada tarefa foi realizada com cuidado e precisão, mostrando um profissionalismo que valorizo muito.",
      data: "15/07/2023 - 11h43"
    }
  ]

  return (
    <div className='notificacoes'>
      <h4 className='reviewsTitle'>Todas Avaliações ({avaliacoes.length})</h4>
      <div className="marginAvaliacoes">
        {avaliacoes.map((av, index) => (
          <ComentarioNotas
            key={index}
            imgPerfil={av.imgPerfil}
            nomeContratante={av.nome}
            nota1={<FaStar />}
            nota2={<FaStar />}
            nota3={<FaStar />}
            nota4={<FaStar />}
            nota5={<FaStar />}
            comentario={av.comentario}
            data={av.data}
          />
        ))}
      </div>
    </div>
  )
}

export default AbaDeAvaliacoes