import { GrFacebookOption, GrInstagram, GrLinkedin, GrGithub } from 'react-icons/gr'
import { SlCalender } from 'react-icons/sl'
import { IoIosArrowUp } from 'react-icons/io'
import { Link } from 'react-router-dom'
import './footer.css'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="footer">
      <div className="footerContent">
        <div className="colunaFooter">
          <h3>Quem somos?</h3>
          <span className="divisoria" />
          <p>
            Somos a plataforma que valoriza o trabalho dos jardineiros e conecta
            apaixonados por jardins a serviços personalizados.
          </p>
          <div className="linkIcons">
            <a href="https://www.facebook.com/profile.php?id=61552400456797" className="backgroundIcon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <GrFacebookOption />
            </a>
            <a href="https://www.instagram.com/sejaumbu/" className="backgroundIcon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <GrInstagram />
            </a>
            <a href="https://www.linkedin.com/company/sejaumbu/" className="backgroundIcon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <GrLinkedin />
            </a>
            <a href="https://github.com/sejaumbu" className="backgroundIcon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GrGithub />
            </a>
          </div>
        </div>

        <div className="colunaFooter">
          <h3>Conheça</h3>
          <span className="divisoria" />
          <nav>
            <ul className="listFooter">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/umblog">UMblog</Link></li>
              <li><Link to="/sobrenos">Sobre nós</Link></li>
              <li><Link to="/planos">Nossos serviços</Link></li>
            </ul>
          </nav>
        </div>

        <div className="colunaFooter">
          <h3>Confira:</h3>
          <span className="divisoria" />
          <nav>
            <ul className="listFooterContent">
              <li>
                <Link to="/umblog">Conheça mais sobre jardinagem</Link>
                <div className="confiraFooter">
                  <span className="IconsFooter"><SlCalender /></span>
                  <span className="calender">23 Outubro de 2023</span>
                </div>
              </li>
              <li>
                <Link to="/umblog">Conheça nossa identidade</Link>
                <div className="confiraFooter">
                  <span className="IconsFooter"><SlCalender /></span>
                  <span className="calender">15 de novembro de 2023</span>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="copyright">
        <p className="copy">&copy; {new Date().getFullYear()} UMBU. Todos os direitos reservados.</p>
        <button className="showUp" onClick={scrollToTop} aria-label="Voltar ao topo">
          <IoIosArrowUp />
        </button>
      </div>
    </footer>
  )
}