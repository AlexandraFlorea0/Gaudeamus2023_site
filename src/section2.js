import './css/bootstrap-icons.css';
import './css/bootstrap.min.css';
import './css/index.css';
import './css/styles.css';
import dubla from './images/dubla.jpg'

function Section2() {
  return (
  
                <div id ="section_2"class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">
                            <h2 class="mb-lg-5 mb-4">LSAC prezintă...</h2>
                        </div>

                        <div class="col-lg-5 col-12 me-auto mb-4 mb-lg-0">
                            <h3 class="mb-3">Despre Gaudeamus</h3>

                            <p> Festivalul Artei și Creației Studențești <strong>„Gaudeamus“</strong> este un proiect implementat de Casa de Cultură a Studenților din Iași, organizat împreună cu asociațiile și ligile studențești. Prin acest proiect, de 9 ani, se dorește scoaterea în evidență a potențialului tinerilor în realizarea evenimentelor culturale.</p><br></br>
                            <img className="dubla" class="custom-block-image img-fluid" src = {dubla} ></img><br></br><br></br>
                        </div>
                        <div class="col-lg-5 col-12 me-auto mb-4 mb-lg-0">
                            <h3 class="mb-3">Hollywood back then</h3>

                            <p> Marchează! </p>
                            <p><strong>Hollywood back then, scena 1, dubla 1</strong></p>
                            <p>Într-o lume în care tot mai des ținem apăsat butonul de fast forward pentru clipele prezente, într-o fugă continuă spre ceva nou și inedit, studenții celor două asociații au pornit în călătoria lor spre anii ’50-‘60 pentru a-și descoperi talentele încă neșlefuite, a lucra împreună și a pune în cadrul aparatului de filmat  secvențele unui film demn de Oscar!</p>
                            <p>Tăiați!</p>
                            <p><strong>Hollywood back then, scena 1, dubla 2</strong> </p>
                            <p>Bine….Câțiva actori mediocri, o carieră eșuată de polițist și un regizor recalcitrant, poate nu e rețeta unui film chiar demn de Oscar, dar ce ar putea merge prost, nu?</p>
                            <p>Vor reuși oare în cele din urmă să își ducă la bun sfârșit misiunea?</p>
                            <p>Pentru a afla răspunsul la această întrebare, dar și pentru a vedea dacă dorința lor de a șlefui tinerele talente a dat roade, vă așteptăm să faceți parte din public în data de <strong>5 aprilie, ora 19:00</strong>!</p>

                        </div>
                    </div>
                </div>
              


  );
}

export default Section2;
