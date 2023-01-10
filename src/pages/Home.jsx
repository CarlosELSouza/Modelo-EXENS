import React from 'react'
import '../styles/home.css'

const Home = () => {
  return <section className='hero__section-bg'>
    <div className="hero__section">
      <div className="child1">
        <h3>Onde a informação é nossa matéria-prima</h3>
      </div>
      <div className="child2">
        <h3>Desde 2003 proporcionando soluções para nossos clientes.</h3>
        <button className='btn__more'>Saiba mais</button>
      </div>
    </div>
  </section>
}

export default Home