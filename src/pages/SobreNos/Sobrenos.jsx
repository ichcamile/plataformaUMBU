import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { GrLinkedin, GrGithub } from 'react-icons/gr'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './sobrenos.css'
import Footer from '../../components/footer/Footer.jsx'
import Header from '../../components/header/Header.jsx'

const team = [
  { name: 'Camile Santana', role: 'Product Owner & Front-End', img: 'https://avatars.githubusercontent.com/u/106849636?v=4', linkedin: 'https://www.linkedin.com/in/camilepsantana/', github: 'https://github.com/ichcamile' },
  { name: 'Maicoln Pereira', role: 'Scrum & BackEnd', img: 'https://avatars.githubusercontent.com/u/115378745?v=4', linkedin: 'https://www.linkedin.com/in/maicoln-p-sousa', github: 'https://github.com/Maicoln-Per' },
  { name: 'Gustavo de Melo', role: 'Front-End', img: 'https://avatars.githubusercontent.com/u/116586095?v=4', linkedin: 'https://www.linkedin.com/in/gustavo-de-melo-fernandes-6b321822b/', github: 'https://github.com/GustavoMeloFn' },
  { name: 'Ingrid Vitória', role: 'Front-End', img: 'https://avatars.githubusercontent.com/u/119820823?v=4', linkedin: 'https://www.linkedin.com/in/ingrid-vit%C3%B3ria-santos-30b434206', github: 'https://github.com/IngridvS' },
  { name: 'Bruno Jaidan', role: 'UI/UX & Social Media', img: 'https://avatars.githubusercontent.com/u/110247321?v=4', linkedin: 'https://www.linkedin.com/in/bruno-jaidan/', github: 'https://github.com/BrunoJaidan' },
  { name: 'Felipe Oliveira', role: 'Banco de Dados', img: 'https://avatars.githubusercontent.com/u/119820823?v=4', linkedin: 'https://www.linkedin.com/in/felipe-nascimento-a336a81ba', github: 'https://github.com/Felipenascimento2001' },
  { name: 'Lucas Bonfim', role: 'Fullstack', img: 'https://avatars.githubusercontent.com/u/119820823?v=4', linkedin: 'https://www.linkedin.com/in/lucas-bonfim-545845289', github: 'https://github.com/Lucas-Bonfim80' },
  { name: 'Gabriel Borges', role: 'Financeiro & Back-End', img: 'https://avatars.githubusercontent.com/u/119820823?v=4', linkedin: 'https://www.linkedin.com/in/gabriel-borges-b69706263', github: 'https://github.com/GabrielBorgesCorrea' },
]

const sectors = [
  { title: 'UI/UX Designer e Social Media', members: 'Bruno Jaidan', desc: 'É o criativo da UMBU, trazendo vida à plataforma com seu talento em design. Como UI/UX Designer e responsável pelas redes sociais, ele garante que a UMBU tenha uma presença visualmente impactante e engajadora.' },
  { title: 'Front-End', members: 'Camile, Lucas, Gustavo e Ingrid', desc: 'Na linha de frente da UMBU, a equipe de Front-end cria interfaces envolventes e molda experiências que transcendem expectativas. Guiados pela paixão pela usabilidade e estética.' },
  { title: 'Banco de Dados', members: 'Felipe Nascimento', desc: 'Responsável pelo robusto sistema de banco de dados que alimenta a plataforma, garantindo uma base sólida e experiência confiável.' },
  { title: 'Back-End', members: 'Lucas, Maicoln e Gabriel', desc: 'A equipe de Back-end constrói e mantém os alicerces que fazem a UMBU operar suavemente, conectando front-end e operações internas.' },
]

function Sobrenos() {
  return (
    <div>
      <Header />
      <section className="tituloSo">
        <h2 className="tituloPaginaSobre">Conheça nossos desenvolvedores</h2>
        <p>
          Conheça a equipe por trás da UMBU, uma plataforma inovadora que vai além de simples conexões.
          Com um time diversificado de profissionais apaixonados, a UMBU promove uma experiência única e sustentável.
        </p>
      </section>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="swiperSobreNos"
      >
        {team.map((member, i) => (
          <SwiperSlide key={i} className="containerCardSobreNos">
            <div className="cardPhoto">
              <img className="fotocard" src={member.img} alt={member.name} />
              <div className="infos">
                <h3 className="nomeintegrante">{member.name}</h3>
                <p className="profissao">{member.role}</p>
                <div className="socialLinks">
                  <a href={member.linkedin} className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer">
                    <GrLinkedin />
                  </a>
                  <a href={member.github} className="backgroundIconSobreNos" target="_blank" rel="noopener noreferrer">
                    <GrGithub />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <section className="descricaoCargos">
        <h2 className="tituloPaginaSobre2">Como semeamos a UMBU?</h2>
        {sectors.map((sector, i) => (
          <div key={i} className="setorFull">
            <h3 className="tituloSetor">{sector.title}</h3>
            <p className="integrantes">{sector.members}</p>
            <p className="descricaoCargo">{sector.desc}</p>
          </div>
        ))}
      </section>

      <Footer />
    </div>
  )
}

export default Sobrenos
