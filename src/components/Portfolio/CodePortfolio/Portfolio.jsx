import Fotos from '../Publicacoes/Fotos'
import './Portfolio.css'

function Portfolio() {
  const fotosPortfolio = [
    "https://images.unsplash.com/photo-1558904541-efa843a96f0f?w=400&q=80",
    "https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=400&q=80",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&q=80",
    "https://images.unsplash.com/photo-1598902108854-10e335adac99?w=400&q=80",
    "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&q=80",
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=400&q=80",
    "https://images.unsplash.com/photo-1599839619722-39751411ea63?w=400&q=80",
    "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=400&q=80",
    "https://images.unsplash.com/photo-1605814526019-3f1fc5e112d7?w=400&q=80",
    "https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=400&q=80"
  ]

  return (
    <div className="pagePortfolio">
      <div className="ContainerImages">
        {fotosPortfolio.map((url, i) => (
          <Fotos key={i} foto={url} />
        ))}
      </div>
    </div>
  )
}

export default Portfolio