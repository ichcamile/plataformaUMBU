import './swiperRegistro.css'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import TesteRegistro from '../../../assets/ImagemLogin.png'
import TesteRegistro2 from '../../../assets/ImagemLogin2.png'
import TesteRegistro3 from '../../../assets/ImagemLogin3.png'
import TesteRegistro4 from '../../../assets/ImagemLogin4.png'

export default function LadoEsquerdoRegistro() {
  return (
    <div className="tentativadeSwiper">
      <Swiper
        spaceBetween={0}
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        className="itemSlides"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
          <img src={TesteRegistro} className="tamanhoImage" alt="Jardinagem 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TesteRegistro2} className="tamanhoImage" alt="Jardinagem 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TesteRegistro3} className="tamanhoImage" alt="Jardinagem 3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={TesteRegistro4} className="tamanhoImage" alt="Jardinagem 4" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}