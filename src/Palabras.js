import React, {useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import logo from './logo.png';
import Footer from "./componentes/footer";

function Palabras() {
    const {search} = useLocation;
    console.log('SEARCH', search);
    const query = new URLSearchParams(search);
    console.log('QUERY', query.toString());
    console.log('QUERY GET',query.get("termino"));

    const [termino, setTermino] = useState(query.get("termino"));
    const [datos, setDatos] = useState([]);
    let url = `https://api-lds.herokuapp.com/api/v1/palabras/busqueda?termino=`;

    useEffect(() => {
        console.log(url);
        axios.get(url).
        then(response => {
            setDatos(response.data);
            console.log(datos);
        })
    }, [termino]);

    if (datos.length === 0) {
        return (
            <div>
                <h1>No se encontraron coincidencias </h1>
            </div>
        )
    } else {
    return (
        <div>
        <main id="main">
            <div className="breadcrumbs">
            <div className="page-header d-flex align-items-center" >
                <div className="container position-relative">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-6 text-center">
                    <h2>Services</h2>
                    <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
                    </div>
                </div>
                </div>
            </div>
            </div>



            
            <section id="service" className="services pt-0">
            <div className="container" data-aos="fade-up">

                <div className="section-header">
                <span>Our Services</span>
                <h2>Our Services</h2>

                </div>
                <div className="row gy-4">
                {
                    datos.map((palabra)=>{
                        if(palabra.plataforma === 'youtube')
                            return (
                                
                            
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card">
                                            <h3><a href={palabra.url} className="stretched-link">{palabra.termino}</a></h3>


                                            <iframe src={palabra.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                                        </div> 
                                    </div>
                                
                                
                            )
                        else {
                            return (
                                
                            
                                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                                        <div className="card">
                                            <h3><a href={palabra.url} className="stretched-link">{palabra.termino}</a></h3>
                                            <h4> Se encontro un video en {palabra.plataforma}, y este es el enlace: {palabra.url}</h4>
                                        </div> 
                                    </div>
                                
                             
                            )
                        }
                    })

                }
                </div>

            </div>
            </section>
            
        </main>
        <Footer/>
        </div>
    )
    }
}


export default Palabras;

// <div>
//             <h1>Palabras encontradas</h1>
//             {
//                datos.map(palabra => {
//                    return (
//                     <div>
//                         <h2> {palabra.termino} </h2>
//                         <h3> {palabra.url} </h3>
//                         <h3> {palabra.plataforma} </h3>
//                     </div>
//                    )
//                 } )
//             }

//         </div>