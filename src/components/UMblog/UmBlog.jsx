import './UmBlog.css'
import CardBlog from '../cardBlog/CardBlog'
import IdentidadeVisual from "../../assets/IdentidadeUMBU.svg"
import umbuPlanta from "../../assets/usadosEscalabilidade/umbuPlanta.png"

function UmBlog() {
  return (
    <div className='Umblog'>
      <div className='tittleUmblog'>
        <h1 className='umblogTittle'>UMBlog</h1>
        <h2 className='UmblogFrase'>
          O UMblog é o lugar onde expressamos a visão e valores da UMBU, oferecendo informações sobre a empresa, projetos, desafios e conquistas. Ele serve como uma maneira de nos aproximar de clientes, parceiros e colaboradores, demonstrando transparência e qualidade em nosso trabalho.
        </h2>
      </div>

      <div className="conceitosUmblog">
        <div className='conceitosUmblog-1'>
          <h3>Conheça a UMBU</h3>
        </div>
      </div>
      
      <div className="containerQuemSomos">
        <CardBlog
          image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
          tituloMateria="Equipe UMBU"
          dataPublicacao="28 de setembro de 2023"
          descricao="Descubra a Equipe Apaixonada por Florescer Sonhos na UMBU."
          materia="/sobrenos"
        />
        <CardBlog
          image={IdentidadeVisual}
          tituloMateria="Identidade Visual"
          dataPublicacao="15 de outubro de 2023"
          descricao="Florescendo uma Identidade Visual que Reflete Natureza, Confiança e Tranquilidade."
          materia="/identidade"
        />
        <CardBlog
          image={umbuPlanta}
          tituloMateria="Escalabilidade"
          dataPublicacao="30 de outubro de 2023"
          descricao="Expandindo Horizontes, Semeando Crescimento e Transformando a Jardinagem em uma Experiência Global."
          materia="/escalabilidade"
        />
        <CardBlog
          image="https://images.unsplash.com/photo-1599839619722-39751411ea63?w=600&q=80"
          tituloMateria="Elas Plantam"
          dataPublicacao="30 de outubro de 2023"
          descricao="Usamos a tecnologia para impulsionar mudanças positivas, ajudando jardineiras a alcançar seus objetivos."
          materia="/elasplantam"
        />
        <CardBlog
          image="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?w=600&q=80"
          tituloMateria="Planos"
          dataPublicacao="15 de outubro de 2023"
          descricao="Teste nossa plataforma por 2 meses gratuitos."
          materia="/planos"
        />
        <CardBlog
          image="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80"
          tituloMateria="PROA"
          dataPublicacao="30 de outubro de 2023"
          descricao="Conheça mais sobre o Instituto PROA e como ajudamos a transformar vidas através da tecnologia."
          externalLink="https://www.proa.org.br/"
        />
      </div>
    </div>
  )
}

export default UmBlog