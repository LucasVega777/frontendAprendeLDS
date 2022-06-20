import React, {useState, useEfect} from "react";
import logo from './logo.png';
import logormbg from './logormbg.png';
import Footer from "./componentes/footer";

function HomePage({setTerminoBusqueda, terminoBusqueda}) {
  const [menu, setMenu] = useState('mobile-nav-show');
  const [x, setX] = useState('mobile-nav-hide d-none');
  const buscar = async(str) => {
    if (str.length === 0) {
        setTerminoBusqueda('')
        return;
    }
    setTerminoBusqueda(str);
  }

  const redirigir = async() => {
      let url = `/busqueda/?termino=${terminoBusqueda}`
      setTerminoBusqueda('');
      window.location.href= url;
  }
  
  return (
      <div>
        <header id="header" class="header d-flex align-items-center fixed-top">
          <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="https://lucasvega777.github.io/frontendAprendeLDS/" class="logo d-flex align-items-center">
              <h1>Signario</h1>
            </a>

            <i className={"mobile-nav-toggle " + menu + " bi bi-list"} onClick={() => {setX('mobile-nav-show'); setMenu('mobile-nav-hide d-none')}}></i>
            <i className={"mobile-nav-toggle " + x + " bi bi-x"} onClick={() => {setX('mobile-nav-hide d-none'); setMenu('mobile-nav-show')}}></i>
            <nav id="navbar" className={"navbar"}
            style={{right: (x == 'mobile-nav-show') ? '0' : '-100%'}}>
              <ul>
                <li><a href="https://lucasvega777.github.io/frontendAprendeLDS/" class="active">Home</a></li>
                <li><a href="https://api-lds.herokuapp.com/api/v1/palabras">WebService</a></li>
              </ul>
            </nav>

          </div>
        </header>

        <section id="hero" class="hero d-flex align-items-center">
          <div class="container">
            <div class="row gy-4 d-flex justify-content-between">
              <div class="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h2 data-aos="fade-up"> Aprende Lengua de Señas</h2>
                <p data-aos="fade-up" data-aos-delay="100">
                  Te ayudare a buscar la palabra que desees dentro de mi base de datos.
                </p>

                <form action="" 
                   class="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                  <input type="text" class="form-control" placeholder="Ingrese un término de búsqueda" 
                    id="termino" onChange={(event) => buscar(event.target.value)}
                  />
                  <button type="submit" class="btn btn-primary"
                  onClick={()=> redirigir()} disabled={terminoBusqueda.length === 0}>Buscar</button>
                </form>

                
              </div>

              <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                <img src={logormbg} class="img-fluid mb-3 mb-lg-0" alt=""/>
              </div>

            </div>
          </div>
        </section>

        <main id="main">

          <section id="featured-services" class="featured-services">
            <div class="container">

              <div class="row gy-4">

                <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
                  <div class="icon flex-shrink-0"><i class="bi bi-search"></i></div>
                  <div>
                    <h4 class="title">Buscador de Palabras</h4>
                    <p class="description">Puedes buscar las palabras que desees</p>
                  </div>
                </div>
                

                <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
                  <div class="icon flex-shrink-0"><i class="bi bi-translate"></i></div>
                  <div>
                    <h4 class="title"> Ayuda para crear oraciones </h4>
                    <p class="description"> Esta herramienta se incluirá en un futuro feature </p>
                  </div>
                </div>

                <div class="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon flex-shrink-0"><i class="bi bi-collection"></i></div>
                  <div>
                    <h4 class="title">Clasificacion de palabras</h4>
                    <p class="description">Esta herramienta se incluirá en un futuro feature</p>
                  </div>
                </div>

              </div>

            </div>
          </section>

      
          <section id="about" class="about pt-0">
            <div class="container" data-aos="fade-up">

              <div class="row gy-4">
                <div class="col-lg-6 position-relative align-self-start order-lg-last order-first">
                  <img src={logo} class="img-fluid" alt=""/>
                </div>
                <div class="col-lg-6 content order-last  order-lg-first">
                  <h3>Acerca de Este Proyecto</h3>
                  <p>
                    Este es un proyecto OpenSource, sin fines de lucro, creada para facilitar la busqueda y aprendizaje de palabras de la lengua de señas, diseñado por Lucas Vega, si desea realizar algun aporte en el codigo fuente, no dude en visitar nuestros repositorios
                  </p>
                  <ul>
                    <li data-aos="fade-up" data-aos-delay="100">
                      <i class="bi bi-diagram-3"></i>
                      <div>
                        <h5><a href="https://github.com/LucasVega777/APIaprendeLDS"> API </a></h5>
                        <p>API, es el que realiza las busquedas conectandose a nuestra Base de Datos</p>
                      </div>
                    </li>
                    <li data-aos="fade-up" data-aos-delay="200">
                      <i class="bi bi-window-sidebar"></i>
                      <div>
                        <h5><a href="https://github.com/LucasVega777/frontendAprendeLDS"> FrontEnd</a></h5>
                        <p>Realizado en React</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </section>

          
          <section id="faq" class="faq">
            <div class="container" data-aos="fade-up">

              <div class="section-header">
                <span>Preguntas Frecuentes</span>
                <h2>Preguntas Frecuentes</h2>

              </div>

              <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="200">
                <div class="col-lg-10">

                  <div class="accordion accordion-flush" id="faqlist">

                    <div class="accordion-item">
                      <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                          <i class="bi bi-question-circle question-icon"></i>
                          ¿Que es la lengua de señas?
                        </button>
                      </h3>
                      <div id="faq-content-1" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                        <div class="accordion-body">
                          La lengua de señas es la lengua natural de las personas Sordas. Una lengua que como cualquier otra, posee y cumple todas las leyes lingüísticas y se aprende dentro de la comunidad de usuarios a quienes facilita resolver todas las necesidades comunicativas y no comunicativas propias del ser humano, social y cultural. 
                        </div>
                      </div>
                    </div>

                    <div class="accordion-item">
                      <h3 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                          <i class="bi bi-question-circle question-icon"></i>
                          ¿Como contribuir a este proyecto?
                        </button>
                      </h3>
                      <div id="faq-content-2" class="accordion-collapse collapse" data-bs-parent="#faqlist">
                        <div class="accordion-body">
                          Puedes realizar un pull request a cualquiera de los repositorios en GitHub asociados al proyecto
                        </div>
                      </div>
                  </div>

                </div>
              </div>
              </div>
            </div>
          </section>
        </main>
        <Footer/>
      </div>
  );
}

export default HomePage;
