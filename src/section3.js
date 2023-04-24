import './css/bootstrap.min.css';
import './css/index.css';
import './css/styles.css';
import './fonts/bootstrap-icons.woff'
import './fonts/bootstrap-icons.woff2'
import background from './images/GAU_backgr.png'

function Section3() {
    return (
        <section class="events-section section-bg section-padding" id="section_4">
                        <div class="container">
                            <div class="row">

                                <div class="col-lg-12 col-12">
                                    <h2 class="mb-lg-3">Următorul eveniment</h2>
                                </div>


                                <div class="row custom-block custom-block-bg">
                                    <div class="col-lg-2 col-md-4 col-12 order-2 order-md-0 order-lg-0">
                                        <div class="custom-block-date-wrap d-flex d-lg-block d-md-block align-items-center mt-3 mt-lg-0 mt-md-0">
                                            <h6 class="custom-block-date mb-lg-1 mb-0 me-3 me-lg-0 me-md-0">5</h6>
                                            
                                            <strong class="text-white">Apr 2023</strong>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-8 col-12 order-1 order-lg-0">
                                        <div class="custom-block-image-wrap">
                                            <a href="https://www.facebook.com/events/1559460297878437/">

                                                <img className="backgroung" class="custom-block-image img-fluid" src = {background} ></img>

                                                <i class="custom-block-icon bi-link"></i>
                                            </a>
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-12 order-3 order-lg-0">
                                        <div class="custom-block-info mt-2 mt-lg-0">
                                            <a href="https://www.facebook.com/events/1559460297878437/" class="events-title-mb-3" class="nodecoration">Gaudeamus : Hollywood back then</a>

                                            <p class="mb-0">Spectacolul de anul acesta aduce împreună pentru al doilea an consecutiv, studenții de la cele două asociații, LSAC și ASAI, ce ne vor aduce în prim plan Golden Age of Hollywood, alături de viața cinematografului!</p>

                                            <div class="d-flex flex-wrap border-top mt-4 pt-3">

                                                <div class="mb-4 mb-lg-0">
                                                    <div class="d-flex flex-wrap align-items-center mb-1">
                                                        <span class="custom-block-span">Locatie:</span>

                                                        <p class="mb-0">Casa de Cultură a Studenților, Iași</p>
                                                    </div>

                                                    <div class="d-flex flex-wrap align-items-center">
                                                        <span class="custom-block-span">Bilet:</span>

                                                        <p class="mb-0">Gratis</p>
                                                    </div>
                                                </div>

                                                <div class="d-flex align-items-center ms-lg-auto"><br></br>
                                                    <a href="https://www.facebook.com/events/1559460297878437/" class="btn-custom" class="nodecoration">Vezi pe Facebook</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
        </section>
            );
}

export default Section3;
