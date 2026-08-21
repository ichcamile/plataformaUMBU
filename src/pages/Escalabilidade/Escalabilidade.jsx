import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Estilos Swiper
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import "./escalabilidade.css"

function Escalabilidade() {
  const slides = [
    {
      titulo: "Conectando Pessoas, criando laços",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
    },
    {
      titulo: "Transformando Espaços Verdes",
      img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80"
    },
    {
      titulo: "Crescimento Sustentável",
      img: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80"
    },
    {
      titulo: "Inovação na Jardinagem",
      img: "https://images.unsplash.com/photo-1558904541-efa843a96f0f?w=1200&q=80"
    }
  ]

  return (
    <div className="pageEscalabilidade">
      <Header />
      
      <main className="mainEscalabilidade">
        <div className="carouselEscalabilidade">
          <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="escalabilidadeSwiper"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="slideUmbuNosJardins">
                  <img src={slide.img} alt={slide.titulo} className="imageBackground" loading="lazy" />
                  <div className="slideOverlay"></div>
                  <h2 className="tituloSlider">
                    <span className="detalheTitulo">Projeto UMBU Cria: </span>
                    {slide.titulo}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <section className="conteudoEscalabilidade">
          <h2>Escalabilidade</h2>
          <p>
            Na Umbu, nossa ênfase na escalabilidade permeia todos os aspectos, desde a infraestrutura 
            até o design de produtos. Comprometidos com o crescimento sustentável, buscamos soluções 
            que atendam às demandas atuais e proporcionem uma base sólida para a expansão contínua, 
            permitindo que nossos clientes evoluam com confiança ao lado da Umbu.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Escalabilidade