import './App.css';
import Logo from "./components/img/Logo RealEstate.png"
import firstSectionPhoto from "./components/img/Content Image large.png"
import firstCardPhoto from "./components/img/House Example 1.png"
import SingleBedSharpIcon from '@mui/icons-material/SingleBedSharp';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import MemoryOutlinedIcon from '@mui/icons-material/MemoryOutlined';
import thirdSectionPhoto from "./components/img/Rectangle.png"
import Oval from "./components/img/Oval.png"

function App() {
  return (
    <>
      <div className='head'>
        <div className='navbar'>
          <img src={Logo} alt='logo' />
          <div className='right_nav'>
            <a href='!#'>Nav link</a>
            <a href='!#'>Nav link</a>
            <a href='!#'>Nav link</a>
            <a href='!#'>Nav link</a>
            <button>Work with us</button>
          </div>
        </div>
        <div className='headMidle'>
          <h1 className='main_text'>Beautiful homes made for you</h1>
          <p className='lorem_text'> In oculis quidem se esse admonere interesse enim maxime placeat, facere possimus, omnis. Et quidem faciunt, ut labore et accurate disserendum et harum quidem exercitus quid.</p>
        </div>
        <div className='head_buttons_div'><button className='head_button'>See all listings</button></div>
      </div>

      <div className='section1'>
        <img src={firstSectionPhoto} alt='png' className='firstSectionPhoto' />
        <div className='firstSectionTExt'>
          <hr></hr>
          <h1 className='firsSectionH_One'>You’re in good hands</h1>
          <p className='firstSectionLorem'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
          <button className='firstSectionButton'>Learn More</button>
        </div>
      </div>

      <div className='secondSection'>
        <div className='secondSectionStart'>
          <hr></hr>
          <h1 className='secondSectionH_One'>Find your next place to live</h1>
        </div>


        <div className='accordion'>
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Looking for
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Location
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Property Type
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Price
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='Cards'>
          <div className='firstCardsLine'>
            <div className='firstCard' >
              <img src={firstCardPhoto} alt='Фото первого дома' />
              <div className='firstCardTExt'>
                <h3>Malto Hause</h3>
                <div className='firstCardIcons'>
                  <p><SingleBedSharpIcon />4</p>
                  <p><BathtubOutlinedIcon />2</p>
                  <p><MemoryOutlinedIcon />2</p>
                </div>
              </div>
            </div>
            <div className='firstCard' >
              <img src={firstCardPhoto} alt='Фото первого дома' />
              <div className='firstCardTExt'>
                <h3>Malto Hause</h3>
                <div className='firstCardIcons'>
                  <p><SingleBedSharpIcon />4</p>
                  <p><BathtubOutlinedIcon />2</p>
                  <p><MemoryOutlinedIcon />2</p>
                </div>
              </div>
            </div>
            <div className='firstCard' >
              <img src={firstCardPhoto} alt='Фото первого дома' />
              <div className='firstCardTExt'>
                <h3>Malto Hause</h3>
                <div className='firstCardIcons'>
                  <p><SingleBedSharpIcon />4</p>
                  <p><BathtubOutlinedIcon />2</p>
                  <p><MemoryOutlinedIcon />2</p>
                </div>
              </div>
            </div>
          </div>
          <div className='firstCardsLine'>
            <div className='firstCard' >
              <img src={firstCardPhoto} alt='Фото первого дома' />
              <div className='firstCardTExt'>
                <h3>Malto Hause</h3>
                <div className='firstCardIcons'>
                  <p><SingleBedSharpIcon />4</p>
                  <p><BathtubOutlinedIcon />2</p>
                  <p><MemoryOutlinedIcon />2</p>
                </div>
              </div>
            </div>
            <div className='firstCard' >
              <img src={firstCardPhoto} alt='Фото первого дома' />
              <div className='firstCardTExt'>
                <h3>Malto Hause</h3>
                <div className='firstCardIcons'>
                  <p><SingleBedSharpIcon />4</p>
                  <p><BathtubOutlinedIcon />2</p>
                  <p><MemoryOutlinedIcon />2</p>
                </div>
              </div>
            </div>
            <div className='firstCard' >
              <img src={firstCardPhoto} alt='Фото первого дома' />
              <div className='firstCardTExt'>
                <h3>Malto Hause</h3>
                <div className='firstCardIcons'>
                  <p><SingleBedSharpIcon />4</p>
                  <p><BathtubOutlinedIcon />2</p>
                  <p><MemoryOutlinedIcon />2</p>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>

      <div className='thirdSection'>
        <div className='thirdSectionText'>
          <hr></hr>
          <h1 className='firsSectionH_One'>You’re in good hands</h1>
          <p className='firstSectionLorem'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
          <button className='firstSectionButton'>Learn More</button>
        </div>
        <img className='thirdSectionPhoto' src={thirdSectionPhoto} alt='png' />
      </div>


      <div className='fourthSection'>
        <div style={{ width: "475px" }}>
          <hr></hr>
          <h1 className='fourthSectionH_One'>You’re in good hands</h1>
          <p className='fourthSectionLorem'>Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.</p>
          <button className='fourthSectionButton'>Learn More</button>
        </div>
      </div>

      <div className='fivthSection'>
        <div className=''>
          <div>
            <hr style={{marginLeft: "300px"}}></hr>
            <h5 style={{ width: "400px", marginLeft: "300px", marginBottom: "100px" }}>“Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”</h5>
          </div>


          <div className='fivthCards'>
            <div className='cardlar'>
              <div><img src={Oval} alt='png' /></div>
              <div>
                <h3>Lara Madrigal</h3>
                <p style={{ color: "gray" }}>client</p>
              </div>
            </div>
            <div className='cardlar'>
              <div><img src={Oval} alt='png' /></div>
              <div>
                <h3>Lara Madrigal</h3>
                <p style={{ color: "gray" }}>client</p>
              </div>
            </div>
            <div className='cardlar'>
              <div><img src={Oval} alt='png' /></div>
              <div>
                <h3>Lara Madrigal</h3>
                <p style={{ color: "gray" }}>client</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='footer'>
        <div className='mainText'>
          <h1>Make your dreams a <span style={{color: "#FFAC12"}}>reality</span></h1>
          <button style={{background: "#FFAC12"}}>Work With Us</button>
        </div>

        <div className='endFooter'>
          <div style={{width: "600px"}}>
            <img src={Logo} alt='png'/>
            <div className='footerIcons'>
              <button style={{width: "20px", height: "20px"}}></button>
              <button style={{width: "20px", height: "20px"}}></button>
              <button style={{width: "20px", height: "20px"}}></button>
            </div>
          </div>
          <div style={{marginLeft: "50px"}}>
            <h3 style={{color: "white"}}>Column</h3>
            <p>Link goes here</p>
            <p>Link goes here</p>
            <p>Link goes here</p>
            <p>Link goes here</p>
          </div>
          <div style={{marginLeft: "50px"}}>
            <h3 style={{color: "white"}}>Column</h3>
            <p>Link goes here</p>
            <p>Link goes here</p>
            <p>Link goes here</p>
            <p>Link goes here</p>
          </div>
          <div style={{marginLeft: "50px"}}>
            <h3 style={{color: "white"}}>Column</h3>
            <p>Link goes here</p>
            <p>Link goes here</p>
            <p>Link goes here</p>
            <p>Link goes here</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
