import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { useNavigate } from 'react-router-dom'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import CardServico from '../../components/cardServico/CardServico'
import AvaliacoesCliente from '../../components/avaliacoes/AvaliacoesCliente'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Images
import fotoJar from '../../assets/jardineiroFoto.png'
import fotoJar2 from '../../assets/usadosLandingPage/jardineiroFoto2.svg'
import fotoJara from '../../assets/usadosLandingPage/jardineiraFoto.svg'
import especilidade1 from '../../assets/usadosLandingPage/especialidadeCortar.svg'
import especilidade2 from '../../assets/usadosLandingPage/especialidadePodar.svg'
import especilidade3 from '../../assets/usadosLandingPage/especialidadeDecorar.svg'
import especilidade4 from '../../assets/usadosLandingPage/especialidadeManutencao.svg'
import especilidade5 from '../../assets/usadosLandingPage/especialidadeLimpeza.svg'
import proa from '../../assets/usadosLandingPage/proa.svg'
import umEntreposto from '../../assets/usadosLandingPage/umEntreposto.svg'

import './LandingPage.css'

import { MdOutlineSecurity, MdRateReview, MdOutlineMarkUnreadChatAlt } from 'react-icons/md'
import { IoMdPhotos } from 'react-icons/io'
import { TbGardenCart } from 'react-icons/tb'
import { PiPlantBold } from 'react-icons/pi'

function LandingPage() {
  const navigate = useNavigate()

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="heroSection">
        <div className="heroOverlay" />
        <div className="heroContent">
          <h1 className="heroTitle">
            Bem vindo ao futuro da
            <span className="heroHighlight"> Jardinagem</span>
          </h1>
          <p className="heroSubtitle">Seu jardim, nossa missão!</p>
          <button className="btn-primary heroBtn" onClick={() => navigate('/registro')}>
            Comece Agora
          </button>
        </div>
      </section>

      {/* Especialidades */}
      <section className="especialidadesUmbu">
        <div className="especialidadesInner">
          <h2>Especialidade dos jardineiros</h2>
          <div className="iconesEspecilidades">
            {[
              { img: especilidade1, label: 'Cortar grama' },
              { img: especilidade2, label: 'Podar' },
              { img: especilidade3, label: 'Decorar plantas' },
              { img: especilidade4, label: 'Manutenção jardim' },
              { img: especilidade5, label: 'Limpeza jardim' },
            ].map((item, i) => (
              <div className="conteudoHabilidades" key={i}>
                <aside>
                  <img src={item.img} alt={item.label} />
                </aside>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossos Serviços */}
      <section className="nossosServicosLP">
        <h2>Serviços da UMBU</h2>
        <p>Alguns dos serviços que a UMBU desenvolveu para entregar o melhor da nossa plataforma.</p>
        <div className="servicosDivider" />
      </section>

      <div className="cardsDisplay">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="servicosSwiper"
        >
          <SwiperSlide>
            <CardServico servico="Segurança" iconeCard={<MdOutlineSecurity />} descricao="Garantimos um ambiente seguro para jardineiros e contratantes em todas as transações." />
          </SwiperSlide>
          <SwiperSlide>
            <CardServico servico="Portfólio" iconeCard={<IoMdPhotos />} descricao="Mostre seus melhores trabalhos e conquiste novos clientes com um portfólio profissional." />
          </SwiperSlide>
          <SwiperSlide>
            <CardServico servico="Avaliações" iconeCard={<MdRateReview />} descricao="Sistema transparente de avaliações para construir reputação e confiança." />
          </SwiperSlide>
          <SwiperSlide>
            <CardServico servico="UMChat" descricao="Facilitamos a comunicação e negociação entre o Jardineiro Ideal e o contratante." iconeCard={<MdOutlineMarkUnreadChatAlt />} />
          </SwiperSlide>
          <SwiperSlide>
            <CardServico servico="Insumos" descricao="Delegue a cotação e logística de insumos aos nossos parceiros especializados." iconeCard={<TbGardenCart />} />
          </SwiperSlide>
          <SwiperSlide>
            <CardServico servico="Habilidades" descricao="Destaque suas habilidades e conecte-se aos clientes ideais para serviços excepcionais." iconeCard={<PiPlantBold />} />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Como Funciona */}
      <section className="visaoUmbuLP">
        <h2 className="visaoTitulo">Como funciona a UMBU</h2>
        <div className="visaoGrid">
          <article className="visaoCard">
            <div className="visaoNumero">01</div>
            <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80" alt="Crie seu perfil" />
            <div className="visaoTexto">
              <h3>Crie seu perfil</h3>
              <p>Compartilhe suas habilidades, experiência e paixão pela jardinagem para construir um perfil que destaque suas qualidades.</p>
            </div>
          </article>

          <article className="visaoCard">
            <div className="visaoNumero">02</div>
            <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80" alt="Explore a plataforma" />
            <div className="visaoTexto">
              <h3>Explore Nossa Plataforma</h3>
              <p>Navegue pela diversidade de projetos e oportunidades disponíveis na UMBU.</p>
            </div>
          </article>

          <article className="visaoCard">
            <div className="visaoNumero">03</div>
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" alt="Conecte-se" />
            <div className="visaoTexto">
              <h3>Conecte-se e Transforme</h3>
              <p>Receba solicitações, estabeleça comunicação direta e comece a transformar espaços verdes.</p>
            </div>
          </article>
        </div>
      </section>

      {/* Elas Podam */}
      <section className="espacoDelas">
        <div className="espacoDelasContent">
          <h2>Elas Podam</h2>
          <p>Cultivando Empoderamento para Jardineiras - Conectando Raízes, Rompendo Barreiras e Florescendo Juntas!</p>
          <div className="conteudoDelas">
            <img src="https://images.unsplash.com/photo-1629997391037-c3b5210b5d35?w=800&q=80" alt="Jardineira 1" />
            <img src="https://images.unsplash.com/photo-1674049405746-94d3c13dfe5e?w=800&q=80" alt="Jardineira 2" />
            <img src="https://images.unsplash.com/photo-1555955208-94f6fafea771?w=800&q=80" alt="Jardineira 3" />
          </div>
          <button className="btn-primary heroBtn" onClick={() => navigate('/elasplantam')}>
            Saiba mais
          </button>
        </div>
      </section>

      {/* Portfólio Gallery */}
      <section className="espacoPortifolio">
        <h2>Serviços de Alguns <br /> Jardineiros da Plataforma</h2>
        <Swiper
          spaceBetween={30}
          navigation={true}
          slidesPerView={3}
          modules={[Navigation, Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="galeriaSwiper"
        >
          {[
            { img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&q=80', name: 'José Augusto' },
            { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80', name: 'Rogério Maranhão' },
            { img: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', name: 'José Fernando' },
            { img: 'https://images.unsplash.com/photo-1598902108854-d1446614550e?w=600&q=80', name: 'Ana Cláudia' },
            { img: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=600&q=80', name: 'Leonardo Brito' },
            { img: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=600&q=80', name: 'Geovanna Rameiro' },
          ].map((item, i) => (
            <SwiperSlide key={i}>
              <div className="portifolioGaleria">
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Feedbacks */}
      <section className="divReviewsCards">
        <h2>Feedbacks</h2>
        <div className="containerFeedbacks">
          <AvaliacoesCliente
            fotoJard={fotoJar}
            nomeAvaliacao="José Santos"
            descricaoAvaliacao="A experiência na Umbu foi gratificante, conectando-me a projetos emocionantes alinhados às minhas habilidades como jardineiro."
            descricaoTipoUsuario="Jardineiro"
          />
          <AvaliacoesCliente
            fotoJard={fotoJara}
            nomeAvaliacao="Maria Oliveira"
            descricaoAvaliacao="A Umbu superou minhas expectativas! A plataforma é intuitiva. Recomendo a todos os profissionais verdes lá fora!"
            descricaoTipoUsuario="Jardineira"
          />
          <AvaliacoesCliente
            fotoJard={fotoJar2}
            nomeAvaliacao="Carlos Silva"
            descricaoAvaliacao="A Umbu é uma ferramenta indispensável para jardinagem de qualidade. A plataforma é fácil de usar e a variedade de profissionais é impressionante."
            descricaoTipoUsuario="Cliente"
          />
        </div>
      </section>

      {/* Parceiros */}
      <section className="parceirosUmbu">
        <h2>Parceiros</h2>
        <div className="imageParceiros">
          <img src={proa} alt="Proa" />
          <img src={umEntreposto} alt="Um Entreposto" />
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default LandingPage
