import React from 'react'
import '../Footer/footer.css'

import { Container, Row, Col, ListGroup, ListGroupItem} from "reactstrap"
import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  return <footer className="footer">
    <Container>
      <Row>
        <Col lg='4' md='6'>
        <div className="logo">
            <div>
              <h1 className='text-white'>Exens Sistemas</h1>
            </div>
          </div>
          <p className="footer__text mt-4"></p>
        </Col>

        <Col lg='3' className='mb-4' md='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Categorias</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Pistolas</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Rifles</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Espingardas</Link>
              </ListGroupItem>

              <ListGroupItem className='ps-0 border-0'>
                <Link to="#">Munições</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>

        <Col lg='2' className='mb-4' md='3'>
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Links úteis</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Todos os produtos</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Login</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to="#">Termo de Privacidade</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
        </Col>

        <Col lg='3' md='4' >
          <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className='footer__contact'>
                <ListGroupItem className='ps-0 border-0  d-flex align-items-center gap-2'>
                  <span><i className='ri-map-pin-line'></i></span>
                  <p>123 Rua Tal, Franca, Brazil</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0  d-flex align-items-center gap-2'>
                <span><i className='ri-phone-line'></i></span>
                  <p>(16) 4002-8922</p>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0  d-flex align-items-center gap-2'>
                <span><i className='ri-mail-line'></i></span>
                  <p>dev@exens.com.br</p>
                </ListGroupItem>

              </ListGroup>
            </div>
        </Col>
        <Col lg='12'>
          <p className="footer__copyright">Copyright {year} - Feito por Exens Sistemas, Todos os Direitos Reservados.</p>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer