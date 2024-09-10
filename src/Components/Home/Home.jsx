import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import imgHome from "../../assests/homeImg.avif"
import aboutImg from "../../assests/about.jpeg"
import { Link } from 'react-router-dom'
import Opinions from '../opinios/Opinions'
import { Helmet } from 'react-helmet'
import BoxIcons from '../BoxIcons/BoxIcons'
import Footer from '../Footer/Footer'



export default function Home() {
  return <>
  
  <Helmet>
<meta charSet="utf-8" />
<title> Drinkly ( Home ) </title>
</Helmet>




{/* <div className="home-caption position-absolute vh-100 w-100 d-flex justify-content-center align-items-center mb-5 ">


<img src={imgHome} alt="Drink fresh" className='homeImg' />

</div> */}

{/* home typed */}
       {/* <div className="home d-flex justify-content-center align-items-center flex-column "> */}

        {/* <span className="text-white fs-2">

        <Typewriter  
        words={['Find Your Favourite Drink Here!', 'Fresh Drinks', 'Nature Drinks', 'Healthy Drinks!']}
            typeSpeed={50}
            deleteSpeed={20}
            loop={true}
            delaySpeed={1000}  />
        </span> */}




      {/* </div>  */}


{/* <!-- start of home --> */}
    <div class="home" id="Home">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <div class="carousel-inner">
                {/* <!-- 1 --> */}
                <div class="carousel-item active d-flex justify-content-center align-items-center text-white" data-bs-interval="5000">
                <img src={imgHome} alt="Drink fresh" className='homeImg' />

                </div>
                {/* <!-- 2 --> */}
                <div class="carousel-item  d-flex justify-content-center align-items-center text-white" data-bs-interval="5000">
                <img src={imgHome} alt="Drink fresh" className='homeImg' />

                </div>
                {/* <!-- 3 --> */}
                <div class="carousel-item  d-flex justify-content-center align-items-center text-white" data-bs-interval="5000">
                <img src={imgHome} alt="Drink fresh" className='homeImg' />

                </div>
            </div>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                <div class="btn-left">
                    <i class="fa-regular fa-circle-left"></i>
                </div>
            </button>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                <div class="btn-right">
                <i class="fa-regular fa-circle-right"></i>
                </div>
            </button>
            </div>



    </div>
    {/* <!-- end of home --> */}

{/* about us */}

<BoxIcons/>

<div className="container mt-5">

<div className="aboutBtn  d-flex justify-content-center mb-5" >
    <button>
ABOUT US
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
</button>
  </div>



  <div className="row align-items-center">

    


{/* about right */}
  <div className="col-md-6">
  <img src={aboutImg} className='w-100 aboutImg' alt=""  />
  </div>


<div className="col-md-5 offset-md-1">
  <h4 className='text-white mb-4'>It's an Obsession.</h4>
<p className='text-white aboutCaption'>

It’s more than love. It’s an obsession! We want everyone to do FiiZ their way! That’s why we have hundreds of signature menu items, as well as tens of thousands of different drink combinations. 
</p>
</div>



  </div>
</div>


<br />
<br />

<Opinions/>




<br />
<br />
<br />
<br />
<Footer/>


  
  </>
}
