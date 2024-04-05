import DefaultParallax from "../classes/DefaultParalax";
import MainBgnSlider from "./MainBgnSlider";
function Main() {
    
    const PUBLIC_URL = process.env.PUBLIC_URL;


    return (
        <>
            <section className="main-content">
                    <MainBgnSlider></MainBgnSlider>
                  
                    <div className="container">
                        <div className="content">
                            <div className="left">
                                <h1>Поліфасад</h1>
                                <div>
                                    <p>Новий престижний вигляд вашої оселі <br/> економія на опаленні до 60%</p>
                                </div>

                                <div>
                                    <button className="dropdown-trigger waves-effect waves-light btn-large waves-orange phone-btn-trigger" data-target='phone_list'>Дзвоніть зараз</button>
                                </div>
                                <ul id='phone_list' className='dropdown-content phone_list grey darken-2'>
                                    <li><a href="tel:+380684614655">(068) 46-14-655</a></li>
                                    <li><a href="tel:+380687013888">(068) 70-13-888</a></li>
                                    <li><a href="tel:+380637739299">(063) 77-39-299</a></li>
                                    <li><a href="tel:+380952204938">(095) 22-04-938</a></li>
                                </ul>
                            </div>
                            <img className="right" src= {PUBLIC_URL + "/images/images/photo/worker.png"} alt=""/>
                        </div>
                    </div>
            </section>
            <section className="project-type">
                <div className="container">
                    <div className="project-type-cards">
                        <div className="project-type-card center">
                            <div className="project-type-card-img-conteiner">
                                <img alt="багатоповерхові" src={PUBLIC_URL + "/images/images/photo/h2.jpg"} alt=""/>
                            </div>
                            <div className="project-type-card-content">
                                <div className="type">
                                    <p>БАГАТОПОВЕРХОВІ  БУДИНКИ</p>
                                </div>
                                <a href="" className="anm-pulse">ПОДИВИТСЬ</a>
                            </div>
                        </div>
                        <div className="project-type-card center active">
                            <div className="project-type-card-img-conteiner">
                                <img alt="приватні" src={PUBLIC_URL + "/images/images/photo/h1.jpg"} alt=""/>
                            </div>
                            <div className="project-type-card-content">
                                <div className="type">
                                    <p>ПРИВАТНІ  БУДИНКИ</p>
                                </div>
                                <a href="" className="anm-pulse">ПОДИВИТСЬ</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bgn-overlay parallax-container">
                <div className="parallax bgn-img-overlay">
                    <DefaultParallax settings={{bgImageAlt:"logo-bgn", bgnImage:`${PUBLIC_URL}/images/logo/logo.svg`}} />
                </div>
                <a href="https://www.youtube.com/watch?v=gAhW8YFKDZg" className="bgn-overlay-context">
                    <div className="icon-bgn"><img alt="play" src={PUBLIC_URL + "/images/icons/play-video.svg"} className="icon"></img></div>
                    <span className="btn-outline1"></span> 
                    <span className="btn-outline2"></span> 
                </a>
            </section>
            <section className="services row">
                <div className="card col s12 m6 l3">
                    <div className="services-full center">
                        <div className="services-content">
                            <div className="service-image-container">
                                <i className="card-icon">
                                    <img src={PUBLIC_URL + "/images/icons/factory-svgrepo-com.svg"} alt=""/>
                                </i>
                            </div>
                            <p className="title">Власне виробництво</p>
                            <p>Власне виробництво - гарантія високої якості</p>
                        </div>

                    </div>
                </div>
                <div className="card col s12 m6 l3">
                    <div className="services-full center">
                        <div className="services-content">
                            <div className="service-image-container">
                                <i className="card-icon">
                                    <img src= {PUBLIC_URL + "/images/icons/consultation-svgrepo-com.svg"} alt=""/>
                                </i>
                            </div>
                            <p className="title">Безкоштовна консультація</p>
                            <p>Безкоштовна фахова консультація та розрахунок</p>
                        </div>
                    </div>
                </div>
                <div className="card col s12 m6 l3">
                    <div className="services-full center">
                        <div className="services-content">
                            <div className="service-image-container">
                                <i className="card-icon">
                                    <img src= {PUBLIC_URL + "/images/icons/list-verification-symbol-svgrepo-com.svg"} alt=""/>
                                </i>
                            </div>
                            <p className="title">Надійність</p>
                            <p>Гарантія 30 років</p>
                        </div>
                    </div>
                </div>
                <div className="card col s12 m6 l3">
                    <div className="services-full center">
                        <div className="services-content">
                            <div className="service-image-container">
                                <i className="card-icon">
                                    <img src= {PUBLIC_URL + "/images/icons/best-price-guarantee-warranty-svgrepo-com.svg"} alt=""/>
                                </i>
                            </div>
                            <p className="title">Гарантія</p>
                            <p>Гарантія 30 років з оформленням договору</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Main;
