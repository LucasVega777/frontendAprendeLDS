import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>

      <html lang="en">

      <head>
        <meta charset="utf-8"/>
        <meta content="width=device-width, initial-scale=1.0" name="viewport"/>

        <title>Signario</title>
        <meta content="" name="description"/>
        <meta content="" name="keywords"/>

        <link href="assets/img/favicon.png" rel="icon"/>
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon"/>

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,600;1,700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"/>


        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet"/>
        <link href="assets/vendor/fontawesome-free/css/all.min.css" rel="stylesheet"/>
        <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/>
        <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/>
        <link href="assets/vendor/aos/aos.css" rel="stylesheet"/>
        <link href="assets/css/main.css" rel="stylesheet"/>
      </head>

      <body>


        <header id="header" class="header d-flex align-items-center fixed-top">
          <div class="container-fluid container-xl d-flex align-items-center justify-content-between">

            <a href="https://lucasvega777.github.io/frontendAprendeLDS/" class="logo d-flex align-items-center">
              <h1>Signario</h1>
            </a>

            <i class="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
            <i class="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
            <nav id="navbar" class="navbar">
              <ul>
                <li><a href="/" class="active">Home</a></li>
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

                <form action="#" class="form-search d-flex align-items-stretch mb-3" data-aos="fade-up" data-aos-delay="200">
                  <input type="text" class="form-control" placeholder="Ingrese un término de búsqueda"/>
                  <button type="submit" class="btn btn-primary">Buscar</button>
                </form>

                
              </div>

              <div class="col-lg-5 order-1 order-lg-2 hero-img" data-aos="zoom-out">
                <img src="assets/img/logormbg.png" class="img-fluid mb-3 mb-lg-0" alt=""/>
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
                  <img src="assets/img/logo.png" class="img-fluid" alt=""/>
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
        <footer id="footer" class="footer">

          <div class="container">
            <div class="row gy-4">
              <div class="col-lg-5 col-md-12 footer-info">
                <a href="https://lucasvega777.github.io/frontendAprendeLDS/" class="logo d-flex align-items-center">
                  <span>Contacto</span>
                </a>
                <p> Puedes contactar conmigo mediante las siguientes redes sociales</p>
                <div class="social-links d-flex mt-4">
                  <a href="https://twitter.com/lucasvegap" class="twitter"><i class="bi bi-twitter"></i></a>
                  <a href="https://www.facebook.com/lucas.vega.927758" class="facebook"><i class="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/lucas_vegap/" class="instagram"><i class="bi bi-instagram"></i></a>
                  <a href="https://www.linkedin.com/in/lucasmvegap/" class="linkedin"><i class="bi bi-linkedin"></i></a>
                  <a href="https://github.com/LucasVega777" class="linkedin"><i class="bi bi-github"></i></a>
                </div>
              </div>

              <div class="col-lg-2 col-6 footer-links">
                <h4>Tambien te puede interesar</h4>
                <ul>
                  <li><a href="https://www.facebook.com/Instituto-de-Lengua-de-Señas-Paraguaya-ILSEPy-1713395765608554/">ILSEPy</a></li>
                  <li><a href="https://www.facebook.com/senadispy">SENADIS</a></li>
                  <li><a href="https://www.instagram.com/manitosqueh/">Manitos que Hablan</a></li>
                  <li><a href="https://www.youtube.com/channel/UCosZ4u1sC49lOW2DsWWXC3A/videos">SLS Centro de Relevo del Paraguay</a></li>
                  <li><a href="https://www.instagram.com/__valorartepy__/">Valorarte</a></li>
                </ul>
              </div>

              <div class="col-lg-2 col-6 footer-links">
                <h4>Tecnologias utilizadas</h4>
                <ul>
                  <li><a href="https://es.reactjs.org/docs/getting-started.html">React</a></li>
                  <li><a href="https://nodejs.org/es/docs/">Node</a></li>
                  <li><a href="https://www.npmjs.com/package/express">Express</a></li>
                  <li><a href="https://www.heroku.com">Heroku</a></li>
                  <li><a href="https://github.com">GitHub</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-12 footer-contact text-center text-md-start">
                <h4>Acerca de mi</h4>
                <p>
                  Me llamo Lucas Manuel Vega Paez<br/>
                  Estoy estudiando Lic en Ciencias Informaticas <br/>
                  Trabajo como Desarrollador Backend <br/>
                  <strong>Email:</strong> lucasmvegap@gmail.com<br/>
                </p>

              </div>

            </div>
          </div>

          <div class="container mt-4">
            <div class="copyright">
              &copy; Copyright <strong><span>Logis</span></strong>. All Rights Reserved
            </div>
            <div class="credits">
              Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
            </div>
          </div>

        </footer>


        <a href="#" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

        <div id="preloader"></div>

        <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
        <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
        <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
        <script src="assets/vendor/aos/aos.js"></script>
        <script src="assets/vendor/php-email-form/validate.js"></script>

        <script src="assets/js/main.js"></script>
      </body>
    </html>
  </div>
  );
}

export default App;
