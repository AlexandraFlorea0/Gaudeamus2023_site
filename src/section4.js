import './css/bootstrap.min.css';
import './css/index.css';
import './css/styles.css';
import './fonts/bootstrap-icons.woff'
import './fonts/bootstrap-icons.woff2'
import parteneri from './images/partners.png'


function Section4() {
    return (
        <section class="contact-section section-padding" id="section_5">
                        <div class="container">
                            <div class="row">
                                <h2 class="mb-4 pb-2">Contact și parteneri</h2>
                                <img className="parteneri" src = {parteneri}></img>
                            </div>
                        </div>
        </section>
        );
}

export default Section4;
