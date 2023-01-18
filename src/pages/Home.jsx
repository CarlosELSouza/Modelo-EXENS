import React from 'react'
import '../styles/home.css'
import exens from '../../src/assets/images/EXENS-3.png'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import pc from '../../src/assets/images/pc.svg'
import exensvazado from '../../src/assets/images/exens-vaz.png'

const Home = () => {
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
    <div className="about">
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
  </section>
  )
}

export default Home