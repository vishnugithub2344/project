import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useEffect, useState } from 'react';
import { TbBulb } from "react-icons/tb";
import { PiIntersectSquareDuotone } from "react-icons/pi";
import { MdOutlineCameraAlt } from "react-icons/md";
import CountUp from 'react-countup';




function Home(){
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);

  const [photoSessions, setPhotoSessions] = useState(0);
  const [opportunities, setOpportunities] = useState(0);
  const [coverage, setCoverage] = useState(0);

  useEffect(() => {
    // Simulating an API call to get updated numbers
    setTimeout(() => {
      setPhotoSessions(2937);
      setOpportunities(1286);
      setCoverage(1329);
    } );
  }, []);

  
  useEffect(() => {
    // Add an event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleScroll() {
    const page1 = document.querySelector('.page1');

    // Check if the page has been scrolled
    if (window.scrollY > 0) {
      page1.classList.add('scrolled');
    } else {
      page1.classList.remove('scrolled');
    }
  }

  return(
    <div className="continer">
      <div className="photo-tank-img">
      <div className="page1">
        <div className="page11">
          <h1>PhotoM4</h1>
        </div>
        <div className="page22">
                <div className="page221"></div>
                <div className="page222"></div>
                <div className="page223"></div>
                <div className="page224"></div> 
        </div>
        <div className="page33 left">
            <a href="" className="menu1">HOME</a>
            <Dropdown
             title="LIVE DEMO"
             className="dropdown"
             id="dropdown-contents"
             show={isDropdownOpen}
             onMouseEnter={() => setIsDropdownOpen(true)}
             onMouseLeave={() => setIsDropdownOpen(false)}
           >
         <Dropdown.Toggle variant="success" id="dropdown-basic">LIVE DEMO</Dropdown.Toggle>

            <Dropdown.Menu className='demo1'>
            <Dropdown.Item href="#/action-1">Photographer</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Photo Studio</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Photographer Shop</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Photo Workshop</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Photographer Courses </Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>

            <Dropdown
             title="LIVE DEMO BLOCKS"
             className="dropdown"
             id="dropdown-contents"
             show={isDropdownOpen2}
             onMouseEnter={() => setIsDropdownOpen2(true)}
             onMouseLeave={() => setIsDropdownOpen2(false)}>
            <Dropdown.Toggle variant="success" id="dropdown-basic">LIVE DEMO BLOCKS</Dropdown.Toggle>

            <Dropdown.Menu className='demo2'>
            <Dropdown.Item href="#/action-1">Headers and Features</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Content and Shop</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Pricing and Countres</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Team and Testimonials</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Progress and Images</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Slider and Video</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Socials and Forms</Dropdown.Item>
            <Dropdown.Item href="#/action-1">Maps and Footers</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
            <button className="menu4">Buy Now</button>
           </div>
      </div>
      <div className="main-content">
        <div className="row-content">
          <div className="straightline"></div>
          <div className="get-started">
          <h2 style={{ fontSize: '16px' }}>GET STARTED</h2>
          </div>
          <div className="straightline-right"></div>
          <div className="Photo-Studio">
          <h3 style={{ fontSize: '63px' }}>Photo Studio</h3></div>
          <div className="get-started-para">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non diam eleifend egestas id a ligula. Proin interdum vehicula neque sit amet scelerisque.</p>
          </div>
          <button className="viewmore">View More</button>
        </div>
      </div>
      <div className="media-container-row">
            <div className="card1">
              <div className="img-1"><MdOutlineCameraAlt style={{width:"60px",height:"60px",color:"#00d8a6"}} /></div>
              <div className="boxcard-1">
                <div className="titlecard-1">
                  <h4>Photo Sessions</h4></div>
                 <div className="textline-1">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.</p>
                </div>
                <div className="link-1">
                <button className='readmore'>READ MORE</button>
                <div className='line'></div>       
                </div>
              </div>
            </div>
            <div className="card2">
              <div className="img-2"><TbBulb style={{width:"60px",height:"60px",color:"#00d8a6"}} /> </div>
              <div className="boxcard-2">
                <div className="titlecard-2">
                  <h4>Occasions</h4></div>
                 <div className="textline-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.</p>
                </div>
                <div className="link-2">
                <button className='readmore'>READ MORE</button>  
                <div className='line'></div>     
                </div>
              </div> 
            </div>
            <div className="card3">
            <div className="img-3"><PiIntersectSquareDuotone style={{width:"60px",height:"60px",color:"#00d8a6"}} /></div>
              <div className="boxcard-2">
                <div className="titlecard-3">
                  <h4>Coverage</h4></div>
                 <div className="textline-3">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.</p>
                </div>
                <div className="link-3">
                <button className='readmore'>READ MORE</button>  
                <div className='line'></div>     
                </div>
              </div> 
            </div>
            </div>
            </div>
            <div className="ourevent-section">
              <div className="our-straightline"></div>
              <div className="box-ourevent">
              <h1 style={{ fontSize: '15px' }}>OUR EVENTS</h1>
              </div>
              <div className="our-straightline-right"></div>
              <div className="You-Can-Visit">
              <h2 style={{ fontSize: '65px' }}>You Can Visit</h2>
              </div>
              </div>
              <div className="featuresl-continer">
                <div className="featuresl-row-1">
                  <div className="featuresl-card-img-1"></div>
                  <div className="featuresl-card-box-1">
                    <div className="featuresl-card-subtitle-1">
                    <h3 style={{ fontSize: '15px' }}>JULY 13 - NOVEMBER 14, 2019</h3>
                    </div>
                    <div className="featuresl-card-title-1">
                    <h4 style={{ fontSize: '17px' }}>Stray gleams steal into the inner sanctuary</h4>
                    </div>
                    <div className="featuresl-card-textline-1">
                      <p>The customer is very important, the customer will be followed by the customer. The whole body is a trigger element in the drink. It's a very low level of life.</p>
                    </div>
                    <div className="featuresl-readmore-1">
                      <button className='youcanvisit-readmore'>READ MORE</button>  
                    <div className='featuresl-line'></div>     
                </div>
                  </div>
                  </div>
                  <div className="featuresl-row-2">
                  <div className="featuresl-card-img-2"></div>
                  <div className="featuresl-card-box-2">
                    <div className="featuresl-card-subtitle-2">
                    <h3 style={{ fontSize: '15px' }}>JULY 15 - NOVEMBER 16, 2019</h3>
                    </div>
                    <div className="featuresl-card-title-2">
                    <h4 style={{ fontSize: '17px' }}>Absorbed in the exquisite sense of tranquil</h4>
                    </div>
                    <div className="featuresl-card-textline-2">
                      <p>The customer is very important, the customer will be followed by the customer. The whole body is a trigger element in the drink. It's a very low level of life.</p>
                    </div>
                    <div className="featuresl-readmore-2">
                      <button className='youcanvisit-readmore'>READ MORE</button>  
                    <div className='featuresl-line'></div>     
                </div>
                  </div>
                  </div>
                  <div className="featuresl-row-3">
                    <div className="overflow">
                    <div className="featuresl-card-img-3"></div>
                    </div>
                  <div className="featuresl-card-box-3">
                    <div className="featuresl-card-subtitle-3">
                    <h5 style={{ fontSize: '15px' }}>JULY 17 - NOVEMBER 19, 2019</h5>
                    </div>
                    <div className="featuresl-card-title-3">
                    <h6 style={{ fontSize: '17px' }}>The meridian sun strikes the upper surface</h6>
                    </div>
                    <div className="featuresl-card-textline-3">
                      <p>The customer is very important, the customer will be followed by the customer. The whole body is a trigger element in the drink. It's a very low level of life.</p>
                    </div>
                    <div className="featuresl-readmore-3">
                      <button className='youcanvisit-readmore'>READ MORE</button>  
                    <div className='featuresl-line'></div>     
                </div>
                  </div>
                  </div>
              </div>
              <div className="progress-continer">
                <div className="progress-overlap">
                  <div className="progress-row-1">
                    <div className="progress-subtitle-1">
                    <h4 style={{ fontSize: '47px' }}>Photography is an Art</h4>
                    </div>
                    <div className="progress-textline-1">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex ornare porta euismod a libero. Phasellus vehicula placerat enim at egestas. Aliquam suscipit felis in massa hendrerit tristique.</p>
                    </div>
                    <div className="progress-section-subtitle-1">
                    <h4 style={{ fontSize: '47px' }}>Skills & Perspectives</h4>
                    </div>
                    <div className="progress-section-textline-1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget lectus eu ex ornare porta euismod a libero. Phasellus vehicula placerat enim at egestas. Aliquam suscipit felis in massa hendrerit tristique.</p>
                    </div>
                    <div className="progressl-1">
                      <div className="title-wrap-1">
                        <div className="progressbar-title-1">
                        <h4 style={{ fontSize: '15px' }}>Photography</h4>
                        </div>
                          <div className="progress-number-1">
                            <span>100</span>
                          </div>
                          <div className="progress-value-1">
                          <span>%</span>
                        </div>
                        <progress className="progress-primary "  max="100" value="100"></progress>
                      </div>
                    </div>
                    <div className="progressl-2">
                      <div className="title-wrap-2">
                        <div className="progressbar-title-1">
                        <h4 style={{ fontSize: '15px' }}>Design</h4>
                        </div>
                          <div className="progress-number-2">
                            <span>90</span>
                          </div>
                          <div className="progress-value-2">
                          <span>%</span>
                        </div>
                        <progress className="progress-primary " max="100" value="90"></progress>
                      </div>
                    </div>
                    <div className="progressl-3">
                      <div className="title-wrap-3">
                        <div className="progressbar-title-3">
                        <h4 style={{ fontSize: '15px' }}>Coverage</h4>
                        </div>
                          <div className="progress-number-3">
                            <span>80</span>
                          </div>
                          <div className="progress-value-3">
                          <span>%</span>
                        </div>
                        <progress className="progress-primary " max="100" value="80"></progress>
                      </div>
                    </div>
                    <div className="progressl-4">
                      <div className="title-wrap-4">
                        <div className="progressbar-title-4">
                        <h4 style={{ fontSize: '15px' }}>Art</h4>
                        </div>
                          <div className="progress-number-4">
                            <span>70</span>
                          </div>
                          <div className="progress-value-4">
                          <span>%</span>
                        </div>
                        <progress className="progress-primary " max="100" value="70"></progress>
                      </div>
                    </div>
              </div>
              <div className="progress-row-2"></div>
                </div>
              </div>
              <div className="countersl-continer">
      <div className="countersl-row-1">
        <div className="countersl-card-img-1">
          <MdOutlineCameraAlt style={{ width: '60px', height: '60px', color: '#dd8100' }} />
        </div>
        <div className="countersl-card-box1">
          <div className="countersl-countnumber-1">
            <CountUp end={photoSessions} duration={5} />
          </div>
          <div className="countersl-title-1">
            <h4 style={{ fontSize: '16px' }}>Photo Sessions</h4>
          </div>
          <div className="countersl-textline-1">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="countersl-row-2">
        <div className="countersl-card-img-2">
          <TbBulb style={{ width: '60px', height: '60px', color: '#dd8100' }} />
        </div>
        <div className="countersl-card-box2">
          <div className="countersl-countnumber-2">
            <CountUp end={opportunities} duration={5} />
          </div>
          <div className="countersl-title-2">
            <h4 style={{ fontSize: '16px' }}>Opportunities</h4>
          </div>
          <div className="countersl-textline-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.
            </p>
          </div>
        </div>
      </div>

      <div className="countersl-row-3">
        <div className="countersl-card-img-3">
          <PiIntersectSquareDuotone style={{ width: '60px', height: '60px', color: '#dd8100' }} />
        </div>
        <div className="countersl-card-box3">
          <div className="countersl-countnumber-3">
            <CountUp end={coverage} duration={5} />
          </div>
          <div className="countersl-title-3">
            <h4 style={{ fontSize: '16px' }}>Coverage</h4>
          </div>
          <div className="countersl-textline-3">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum felis in bibendum. Proin vitae turpis ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
             <div className="cid-ship-img">
              <div className="cid-container">
                <div className="cid-section-title">
                <h1 style={{ fontSize: '40px' }}>Our History</h1>
                </div>
                <div className="cid-sub-title">
                <h6 style={{ fontSize: '16px' }}>Integer iaculis enim sed imperdiet maximus</h6>
                </div>
                <div className="cid-textline">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla metus metus, ornare sit amet dictum in, fringilla eget eros. Nunc in neque ex. Curabitur tempor turpis ligula, sed suscipit ex pretium nec. Nullam posuere diam arcu. Cras congue posuere ligula, ut placerat mi elementum sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <button className="ourwork">our work</button> 
                </div>
             </div>
             <div className="justify-container">
              <div className="justify-row">
              <div className="justify-straightline"></div>
              <div className="box-justify">
              <h1 style={{ fontSize: '15px' }}>PORTFOLIO</h1>
              </div>
              <div className="justify-straightline-right"></div>
              <div className="justify-Showcase">
              <h2 style={{ fontSize: '65px' }}>Showcase</h2>
              </div>
              <div className="justify-textline">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non diam eleifend egestas id a ligula. Proin interdum vehicula neque sit amet scelerisque. Nulla imperdiet mollis libero, in efficitur ligula.</p>
              </div>
              </div>
             </div>
          <div className="image-container">
          <div className="image-row">
            <div className="image-column column-1">
              <div className="image-warp">
                <div className="image-title">
                  <h1 style={{ fontSize: '15px' }}>ARTWORK </h1>
                </div>
                <div className="image-textline">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>

            <div className="image-column column-2">
              <div className="image-warp">
                <div className="image-title">
                  <h1 style={{ fontSize: '15px' }}>ARTWORK </h1>
                </div>
                <div className="image-textline">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>

            <div className="image-column column-3">
              <div className="image-warp">
                <div className="image-title">
                  <h1 style={{ fontSize: '15px' }}>ARTWORK </h1>
                </div>
                <div className="image-textline">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
          </div>


             <div className="gallery-big-container">
              <div className="gallery-fuild">
                <div className="gallery-img-1">
                <div class="search-icon"></div>
                </div>
                <div className="gallery-img-2">
                <div class="search-icon"></div>
                </div>
                <div className="gallery-img-3">
                <div class="search-icon"></div>
                </div>
                <div className="gallery-img-4">
                <div class="search-icon"></div>
                </div>
                <div className="gallery-img-5">
                <div class="search-icon"></div>
                </div>
                <div className="gallery-img-6">
                <div class="search-icon"></div>
                </div>
                <div className="gallery-img-7">
                <div class="search-icon"></div>
                </div>
                <div className="gallery-img-8">
                <div class="search-icon"></div>
                </div>
              </div>
             </div>
             <div className="two-container">
              <div className="black-image-row-1">
              <div className="image-overlay"></div>
                <div className="black-warp-1">
                <div className="black-title-1">
                <h1 style={{ fontSize: '15px' }}>ARTWORK</h1>
                </div>
                <div className="black-subtitle-1">
                <h1 style={{ fontSize: '15px' }}>Landscapes Photography</h1>
                </div>
                <div className="black-textline-1">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum.</p>
                </div>
                </div>
              </div>
              <div className="black-image-row-2">
              <div className="black-warp-1">
                <div className="black-title-2">
                <h1 style={{ fontSize: '15px' }}>ARTWORK</h1>
                </div>
                <div className="black-subtitle-2">
                <h1 style={{ fontSize: '15px' }}>Nature Photography</h1>
                </div>
                <div className="black-textline-2">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ullamcorper elementum.</p>
                </div>
                </div>
                 </div>
             </div>
             <div className="profession-section">
              <div className="profession-straightline"></div>
              <div className="box-professiont">
              <h1 style={{ fontSize: '15px' }}>PROFESSIONALS</h1>
              </div>
              <div className="profession-straightline-right"></div>
              <div className="Our-Team">
              <h2 style={{ fontSize: '65px' }}>Our Team</h2>
              </div>
              </div>
              <div className="section-four-colorphoto">
                <div className="colorphoto-container">
                  <div className="clorphoto-row-1">
                     <div className="image-1"></div>
                     <div className="text-container">
                      <div className="title">
                      <h1 style={{ fontSize: '15px' }}>Developer</h1>
                      </div>
                      <div className="sub-title">
                      <h2 style={{ fontSize: '15px' }}>Ann James</h2>
                      </div>
                      <div className="textline">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non diam eleifend egestas id a ligula.</p>
                      </div>
                     </div>

                  </div>
                  <div className="clorphoto-row-2">
                     <div className="image-2"></div>
                     <div className="text-container">
                      <div className="title">
                      <h1 style={{ fontSize: '15px' }}>Developer</h1>
                      </div>
                      <div className="sub-title">
                      <h2 style={{ fontSize: '15px' }}>Ann James</h2>
                      </div>
                      <div className="textline">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non diam eleifend egestas id a ligula.</p>
                      </div>
                     </div>

                  </div>
                  <div className="clorphoto-row-3">
                     <div className="image-3"></div>
                     <div className="text-container">
                      <div className="title">
                      <h1 style={{ fontSize: '15px' }}>Developer</h1>
                      </div>
                      <div className="sub-title">
                      <h2 style={{ fontSize: '15px' }}>Ann James</h2>
                      </div>
                      <div className="textline">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non diam eleifend egestas id a ligula.</p>
                      </div>
                     </div>

                  </div>
                  <div className="clorphoto-row-4">
                     <div className="image-4"></div>
                     <div className="text-container">
                      <div className="title">
                      <h1 style={{ fontSize: '15px' }}>Developer</h1>
                      </div>
                      <div className="sub-title">
                      <h2 style={{ fontSize: '15px' }}>Ann James</h2>
                      </div>
                      <div className="textline">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu dui non diam eleifend egestas id a ligula.</p>
                      </div>
                     </div>

                  </div>
                </div>
              </div>
           </div>
          
)
}
export default Home



