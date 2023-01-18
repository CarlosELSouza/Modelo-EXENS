import React, {useEffect} from 'react'
import '../styles/home.css'
import exens from '../../src/assets/images/exens-sombra.png'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import AOS from 'aos';
import 'aos/dist/aos.css';
// import pc from '../../src/assets/images/pc.svg'
import exensvazado from '../../src/assets/images/exens-vaz.png'

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
  <section className='hero__section-bg'>

    <div className="hero__section">

      <motion.div
        className="child1"
        initial={{ x: -500 }}
        animate={{ x: 0 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Onde a informação é nossa matéria-prima</h1>
        <h4>Desde 2003 proporcionando soluções para nossos clientes.</h4>
        <Link to="about">
          <button className='btn__more'>Saiba mais</button>
        </Link>
      </motion.div>
      <div className="child2">
        <motion.div className="img-container"
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          whileHover={{ scale: 1.1}}
        >
          
          <img src={exens} alt=""/>
        </motion.div>
      </div>
    </div>
    <div className="about__us-section">
      <div className="about" data-aos="fade-right">
        <motion.div
          className="child1-about"
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1>A EXENS</h1>
          <p>A EXENS é uma empresa de TI, especializada em inovação, graças aos investimentos constantes em pesquisa e desenvolvimento, que nos permitem entregar tecnologia de ponta aos nossos clientes e ir muito além do ERP.</p>
        </motion.div>
        <div className="child2-about">
          <motion.div className="img-container-about"
            initial={{ x: 500 }}
            animate={{ x: 0 }}
            transition={{ duration: 1.5 }}
            whileHover={{ scale: 1.1}}
          >
            <img src={exensvazado} alt="" />
          </motion.div>
        </div>
      </div>
      <div className="about__details">
        <div className="item"  data-aos="fade-right">
          <i className="ri-building-line"></i>
          <h2>Pioneirismo</h2>
          <h4>Uma das primeiras empresas de Franca-SP a ter um emissor de NFe.</h4>
        </div>
        <div className="item"  data-aos="fade-up">
          <i className="ri-macbook-line"></i>
          <h2>Multiplataforma</h2>
          <h4>Desde aplicativo web até aplicativo Offline para vendas.</h4>
        </div>
        <div className="item"  data-aos="fade-left">
          <i className="ri-global-line"></i>
          <h2>Sempre Atualizado</h2>
          <h4>Nossa equipe está constantemente trabalhando em melhorias para o ecosistema.</h4>
        </div>
      </div>
      <div className="products__click">
        <Link to='our__products'>
          <button data-aos="fade-up" className='btn__products'>Conheça nossos produtos</button>
        </Link>
      </div>
    </div>
    <div className="our__products">
      <div className="card__container">
        <div className="card__item">
          <p>1</p>
        </div>
        <div className="card__item">
          <p>2</p>
        </div>
        <div className="card__item">
          <p>3</p>
        </div>
        <div className="card__item">
          <p>4</p>
        </div>
        <div className="card__item">
          <p>5</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Home