import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div >
            <header className="header">
                
                <Link to="/Login">Iniciar sesión</Link>
                <Link to="/Recetas">Recetas </Link>
                <Link to="/Calculadora">Calculadora de IMC</Link>
                
                <form className='buscador'>
                <span class="icon"><i class="fa fa-search"></i></span>
                <input type="search" id="search" placeholder="Search..." /><button  className='button' action='submit'>Buscar</button>
                </form>
            </header>

            <nav>
                <section id="inicio" className="textos-nav">
                    <h1>Callejón de recetas</h1>
                    <h2>Friends not food</h2>
                    <h3>Nuestra web está destinada a compartir ideas de comidas faciles de origen vegetal, sumado
                        a experiencias de otras personas para alcanzar una nutricion balanceada a base de plantas.</h3>
                </section>
                <div className="wave" style={{ height: '200px', overflow: 'hidden' }}><svg viewBox="0 0 500 150" preserveAspectRatio="none"
                    style={{ height: '100%', width: '100%' }}>
                    <path d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        style={{ stroke: 'none', 'fill': 'rgb(80, 114, 60)' }}></path>
                </svg></div>


            </nav>
            <main>
                <section className="contenedor-derechos">
                    <img src="/svgs/header.png" alt="eco" className="imagen-principal"></img>
                    <h1>Callejon de recetas es una web en donde compartimos recetas de origen
                        vegetal y ademas compartimos referencias nutricionales para veganos y vegetarianos.</h1>
                    <div>
                        <video className="film" width="600" height="500" autoplay controls>
                            <source src="svgs/Video interfaz.mp4" type="video/mp4"></source>

                            Vegetarianismo y veganismo.
                        </video>
                    </div>


                    <article>
                        <div className="contenedor-derechos" id="acerca">
                            <h3> Declaracion de los Derechos de los Animales</h3>
                            <p>Todos los animales nacen iguales ante la vida y la tienen los mismos derechos a la existencia.a)
                                Todo animal tiene derecho a ser respetado.b) El hombre, en tanto que especie animal, no puede
                                atribuirse el derecho a exterminar a los otros animales o explotarlos violando su derecho</p>
                        </div>
                        <div> <h3>Movimiento anti-especista</h3>
                            <p>El antiespecismo es una posición política que considera que todos los seres vivos, y no solo los
                                humanos, son sujetos de derecho y su vida tiene el mismo valor.El especismo, por lo tanto, es
                                la postura opuesta: los animales son tratados como objetos.</p>
                        </div>
                    </article>
                </section>

            </main>


            <aside id="recetas" className="Portafolio-recetas">
                <div class="contenedor">
                    <h2 class="titulo">Recetas Veganas</h2>
                    <div class="galeria-recetas">
                        <div class="imagen-recetas">
                            <img src="svgs/humus.jpg" alt="1"></img>
                            <div class="hover-galeria">
                                <img src="svgs/hoovericon.png" alt=""></img>
                                <p>Hummus</p>
                            </div>
                        </div>

                        <div class="imagen-recetas">
                            <img src="svgs/Hamburguesas.jpg" alt="2"></img>
                            <div class="hover-galeria">
                                <img src="svgs/hoovericon.png" alt=""></img>
                                <p>Hamburguesas</p>
                            </div>
                        </div>

                        <div class="imagen-recetas">
                            <img src="svgs/pasta.jpg" alt="3"></img>
                            <div class="hover-galeria">
                                <img src="svgs/hoovericon.png" alt=""></img>
                                <p>Pastas</p>
                            </div>
                        </div>

                        <div class="imagen-recetas">
                            <img src="svgs/ensalada.jpg" alt="4"></img>
                            <div class="hover-galeria">
                                <img src="svgs/hoovericon.png" alt=""></img>
                                <p>Ensaladas</p>
                            </div>
                        </div>
                        <div class="imagen-recetas">
                            <img src="svgs/sopa.jpg" alt="5"></img>
                            <div class="hover-galeria">
                                <img src="svgs/hoovericon.png" alt=""></img>
                                <p>Sopas</p>
                            </div>
                        </div>

                        <div class="imagen-recetas">
                            <img src="svgs/postres.jpg" alt="6"></img>
                            <div class="hover-galeria">
                                <img src="svgs/hoovericon.png" alt=""></img>
                                <p>Postres</p>
                            </div>
                        </div>

                        <div class="imagen-recetas">
                            <img src="svgs/lechesvegetales.jpg" alt="7"></img>
                            <div class="hover-galeria">
                                <img src="svgs/hoovericon.png" alt=""></img>
                                <p>Leches Vegetales</p>
                            </div>
                        </div>
                    </div>
                </div>

            </aside >

            <article>
                <section className="Info-nutricional">
                    <h2 className="titulo">Referencias nutricionales</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="contenido-nutricional">
                                <h4>Vitaminas</h4>
                                <img src="svgs/vitaminas.png" alt="vit"></img>
                            </div>
                        </div>

                        <div className="card">
                            <div className="contenido-nutricional">
                                <h4>Minerales</h4>
                                <img src="svgs/minerales.jpg" alt="min"></img>
                            </div>
                        </div>

                        <div className="card">
                            <div className="contenido-nutricional">
                                <h4>Proteinas</h4>
                                <img src="svgs/proteina" alt="pro"></img>
                            </div>
                        </div>

                        <div className="card">
                            <div className="contenido-nutricional">
                                <h4>Equilibrio</h4>
                                <img src="svgs/equilibrio.png" alt="equi"></img>
                            </div>
                        </div>

                    </div>
                </section>
            </article>


            <article>
                <section className="contenidolinks">
                    <div className="contenedor">
                        <h2 className="titulo">Materiales de interes</h2>
                        <div className="servicio">
                            <div className="material">
                                <img src="" alt=""></img>
                                <h3>Veganismo y la industria Textil</h3>
                                <img src="svgs/algodon.jpg" alt="textil"></img>
                                <p>Ademas de la alimentacion, el veganismo implica una responsabilidad sobre qué consumimos en otros sectores del mercado.</p>
                            </div>
                            <div className="material">
                                <bottom className="calculadora" action='submit'>Calcular I.M.C</bottom>
                                <p>calcule su índice de masa corporal aquí.</p>
                            </div>
                            <div className="material">
                                <img src="" alt=""></img>
                                <h3>Control de Residuos </h3>
                                <img src="svgs/reciclar.jpg" alt="residuos"></img>
                                <p>No se trata solamente de generar menos residuos, se trata tambien de qué hago con mi basura.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </article>

            <footer>
                <div id="footer" className="contenedor-footer">
                    <div className="foot-info">
                        <h4> Telefono</h4>
                        <p>091252479</p>
                    </div>
                    <div className="foot-info">
                        <h4>Email</h4>
                        <p>masacredigital@icloud.com</p>
                    </div>
                    <div className="foot-info">
                        <h4>Locacion</h4>
                        <p>Colonia 1234</p>
                    </div>
                </div>
                <h2 className="titulo-final">&copy; Proyecto Senpai | Luciano Camargo</h2>
            </footer>
        </div >
    )
}

export default Header