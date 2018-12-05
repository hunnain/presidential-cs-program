import React, { Component } from 'react';
import arrow from '../../../assets/assets/icons/arrow.svg';
// import arrow from '../../../';
import news1 from '../../../assets/assets/images/Rectangle 46.jpg';
import news2 from '../../../assets/assets/images/Rectangle 47.jpg';
import news3 from '../../../assets/assets/images/Rectangle 49.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/js/dist/carousel.js';
import 'bootstrap/js/dist/carousel.js.map';
import {Carousel} from 'react-bootstrap';



class News extends Component {
    state = {  }
    render() { 
        return ( 
           <div>




       {/* will render on computer screen  */}
      <div className="news-box compScr">
      <center>
        <div className="news-cont">
        
          <div className="news-cont-head">
          <h1>In The News</h1>
          </div>

          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      


          <div className="news-cont-flexbox">
          <div className="news-btn1">
        <img src={arrow} />
        </div>
            <div className="news-cont-flex news-cont-flex1">
            <div className="news-cont-flex-box">
            <img src={news1} />
            <h1>DUMMY NEWS</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
            </p>
            <button>READ MORE</button>
            </div>
            </div>

            

            
            <div className="news-cont-flex news-cont- flex1">
            <div className="news-cont-flex-box">
            <img src={news2} />
            <h1>DUMMY NEWS</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
            </p>
            <button>READ MORE</button>
            </div>
            </div>
            <div className="news-cont-flex news-cont- flex1">
            <div className="news-cont-flex-box">
            <img src={news3} />
            <h1>DUMMY NEWS</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
            </p>
            <button>READ MORE</button>
            </div>
            </div>
        <div className="news-btn2"><img src={arrow} /></div>
          </div>

</div>
          
<div className="carousel-item ">
      


      <div className="news-cont-flexbox">
      <div className="news-btn1 "  href="#carouselExampleFade" role="button" data-slide="prev">
    <img src={arrow} />
    </div>
    <div className="news-cont-flex news-cont- flex1">
        <div className="news-cont-flex-box">
        <img src={news2} />
        <h1>DUMMY NEWS</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
        </p>
        <button>READ MORE</button>
        </div>
        </div>
        <div className="news-cont-flex news-cont- flex1">
        <div className="news-cont-flex-box">
        <img src={news3} />
        <h1>DUMMY NEWS</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
        </p>
        <button>READ MORE</button>
        </div>
        </div>
        
      

        <div className="news-cont-flex news-cont-flex1">
        <div className="news-cont-flex-box">
        <img src={news1} />
        <h1>DUMMY NEWS </h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
        </p>
        <button>READ MORE</button>
        </div>
        </div>
        
    <div className="news-btn2" href="#carouselExampleFade" role="button" data-slide="next"><img src={arrow} />
    
    </div>
      </div>

</div>

          
          
          <a className="carousel-control-prev noVisible" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>

  </a>
  <a className="carousel-control-next noVisible" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  
  </a>
</div>




 

              </div>
 

        </div>

      </center>
      </div>


      

 {/* will render on tab screen  */}
 <div className="news-box tabScr">
      <center>
        <div className="news-cont">
        
          <div className="news-cont-head">
          <h1>In The News</h1>
          </div>

          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      


          <div className="news-cont-flexbox">
          <div className="news-btn1">
        <img src={arrow} />
        </div>
            <div className="news-cont-flex news-cont-flex1">
            <div className="news-cont-flex-box">
            <img src={news1} />
            <h1>DUMMY NEWS</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
            </p>
            <button>READ MORE</button>
            </div>
            </div>

            

            
            <div className="news-cont-flex news-cont- flex1">
            <div className="news-cont-flex-box">
            <img src={news2} />
            <h1>DUMMY NEWS</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
            </p>
            <button>READ MORE</button>
            </div>
            </div>
        <div className="news-btn2"><img src={arrow} /></div>
          </div>

</div>
          
<div className="carousel-item ">
      


      <div className="news-cont-flexbox">
      <div className="news-btn1 "  href="#carouselExampleFade" role="button" data-slide="prev">
    <img src={arrow} />
    </div>
    <div className="news-cont-flex news-cont- flex1">
        <div className="news-cont-flex-box">
        <img src={news2} />
        <h1>DUMMY NEWS2</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
        </p>
        <button>READ MORE</button>
        </div>
        </div>
        <div className="news-cont-flex news-cont- flex1">
        <div className="news-cont-flex-box">
        <img src={news3} />
        <h1>DUMMY NEWS2</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
        </p>
        <button>READ MORE</button>
        </div>
        </div>
        
      

        
    <div className="news-btn2" href="#carouselExampleFade" role="button" data-slide="next"><img src={arrow} />
    
    </div>
      </div>

</div>

          
          
          <a className="carousel-control-prev noVisible" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a className="carousel-control-next noVisible" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</div>




 

              </div>
 

        </div>

      </center>
      </div>

 {/* will render on mobile screen  */}
 <div className="news-box mobScr">
      <center>
        <div className="news-cont">
        
          <div className="news-cont-head">
          <h1>In The News</h1>
          </div>

          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      


          <div className="news-cont-flexbox">
          <div className="news-btn1">
        <img src={arrow} />
        </div>
            <div className="news-cont-flex news-cont-flex1">
            <div className="news-cont-flex-box">
            <img src={news1} />
            <h1>DUMMY NEWS</h1>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
            </p>
            <button>READ MORE</button>
            </div>
            </div>

            
        <div className="news-btn2"><img src={arrow} /></div>
          </div>

</div>
          
<div className="carousel-item ">
      


      <div className="news-cont-flexbox">
      <div className="news-btn1 "  href="#carouselExampleFade" role="button" data-slide="prev">
    <img src={arrow} />
    </div>
    <div className="news-cont-flex news-cont- flex1">
        <div className="news-cont-flex-box">
        <img src={news2} />
        <h1>DUMMY NEWS</h1>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop pu
        </p>
        <button>READ MORE</button>
        </div>
        </div>
       

        
    <div className="news-btn2" href="#carouselExampleFade" role="button" data-slide="next"><img src={arrow} />
    
    </div>
      </div>

</div>

          
          
          <a className="carousel-control-prev noVisible" href="#carouselExampleFade" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
  </a>
  <a className="carousel-control-next noVisible" href="#carouselExampleFade" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
  </a>
</div>




 

              </div>
 

        </div>

      </center>
      </div>



            </div>
        
         );
    }
}
 
export default News;